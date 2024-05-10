import "./addToOrder.css";
import useEventStore from "../../store/event-store";
import useOrderStore from "../../store/order-store";
import Button from "../button/Button";
import TicketHandler from "../ticketHandler/TicketHandler";
import { useEffect } from "react";

function AddToOrder() {
  const { event, setEvent } = useEventStore((state) => ({
    event: state.event,
    setEvent: state.setEvent,
  }));

  const { order, setOrder } = useOrderStore((state) => ({
    order: state.order,
    setOrder: state.setOrder,
  }));

  useEffect(() => {
    sessionStorage.setItem("event", JSON.stringify(event));
  }, [event]);

  const addQuantity = (e) => {
    e.preventDefault();
    const newQuantity = event.quantity + 1;
    setEvent({ ...event, quantity: newQuantity });
  };

  const removeQuantity = (e) => {
    e.preventDefault();
    if (event.quantity > 0) {
      const newQuantity = event.quantity - 1;
      setEvent({ ...event, quantity: newQuantity });
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const existingEventIndex = order.findIndex(
      (orderEvent) => orderEvent.id === event.id
    );
    if (existingEventIndex !== -1) {
      let updatedOrder = [...order];
      if (event.quantity === 0) {
        updatedOrder = updatedOrder.filter((_, index) => index !== existingEventIndex);
      } else {
        updatedOrder[existingEventIndex].quantity = event.quantity;
      }
      setOrder(updatedOrder);
      sessionStorage.setItem("order", JSON.stringify(updatedOrder));
    } else if (event.quantity > 0) {
      setOrder([...order, { ...event }]);
      sessionStorage.setItem("order", JSON.stringify([...order, { ...event }]));
    }
  };

  const customizeButton = () => {
    const existingEvent = order.find((orderEvent) => orderEvent.id === event.id);

    if (existingEvent) {
      if (event.quantity === 0) {
        return { buttonText: "Ta bort från order", color: "red" };
      }
      return existingEvent.quantity === event.quantity
        ? { buttonText: "Redan i din order", color: "gray" }
        : { buttonText: "Uppdatera order", color: "green" };
    }

    return event.quantity > 0
      ? { buttonText: "Lägg i varukorgen", color: "green" }
      : { buttonText: "none", color: "" };
  };

  return (
    <form className="ticket-purchase">
      <div className="ticket-purchase__inner-wrapper">
        <p className="ticket-purchase__total-sum">{`${event.price * event.quantity
          } sek`}</p>
        <TicketHandler
          amount={event.quantity}
          add={addQuantity}
          remove={removeQuantity}
        />
      </div>
      {customizeButton().buttonText !== "none" &&
        <Button
          text={customizeButton().buttonText}
          color={customizeButton().color}
          onClick={handleOrder}
        />
      }

    </form>
  );
}

export default AddToOrder;
