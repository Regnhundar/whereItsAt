import "./addToOrder.css";
import useEventStore from "../../store/event-store";
import useOrderStore from "../../store/order-store";
import Button from "../button/Button";
import TicketHandler from "../ticketHandler/TicketHandler";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddToOrder() {
  const { event, setEvent } = useEventStore((state) => ({
    event: state.event,
    setEvent: state.setEvent,
  }));
  const navigate = useNavigate();
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
    const buttonText = customizeButton().buttonText;
    const existingEventIndex = order.findIndex(
      (orderEvent) => orderEvent.id === event.id
    );
    let updatedOrder = [...order];
    switch (buttonText) {
      case "Ta bort från order":
        updatedOrder = updatedOrder.filter((_, index) => index !== existingEventIndex);
        break;
      case "Gå till order":
        navigate("/order")
        return;
      case "Uppdatera order":
        updatedOrder[existingEventIndex].quantity = event.quantity;
        break;
      case "Lägg till i order":
        updatedOrder.push({ ...event });
        break;
      default:
        return;
    }
    setOrder(updatedOrder);
    sessionStorage.setItem("order", JSON.stringify(updatedOrder));
  };

  const customizeButton = () => {
    const existingEvent = order.find((orderEvent) => orderEvent.id === event.id);

    if (existingEvent) {
      if (event.quantity === 0) {
        return { buttonText: "Ta bort från order", color: "red" };
      }
      return existingEvent.quantity === event.quantity
        ? { buttonText: "Gå till order", color: "dark-green" }
        : { buttonText: "Uppdatera order" };
    }

    return event.quantity > 0
      ? { buttonText: "Lägg till i order" }
      : { buttonText: "" };
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
      {customizeButton().buttonText !== "" &&
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
