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
    if (event.quantity > 1) {
      const newQuantity = event.quantity - 1;
      setEvent({ ...event, quantity: newQuantity });
    }
  };

  const addToOrder = (e) => {
    e.preventDefault();
    const existingEventIndex = order.findIndex(
      (orderEvent) => orderEvent.id === event.id
    );
    if (existingEventIndex !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingEventIndex].quantity = event.quantity;
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { ...event }]);
    }
  };

  return (
    <form className="ticket-purchase">
      <div className="ticket-purchase__inner-wrapper">
        <p className="ticket-purchase__total-sum">{`${
          event.price * event.quantity
        } sek`}</p>
        <TicketHandler
          amount={event.quantity}
          add={addQuantity}
          remove={removeQuantity}
        />
      </div>
      <Button text="Lägg i varukorgen" onClick={addToOrder} />
    </form>
  );
}

export default AddToOrder;
