import "./addToOrder.css"
import useEventStore from "../../store/event-store"
import Button from "../button/Button";
import TicketHandler from "../ticketHandler/TicketHandler";

function AddToOrder() {

    const { event, setEvent } = useEventStore((state) => ({
        event: state.event,
        setEvent: state.setEvent
    }));

    const addQuantity = (clickedEvent) => {
        clickedEvent.preventDefault();
        const newQuantity = event.quantity + 1;
        setEvent({ ...event, quantity: newQuantity });
    }

    const removeQuantity = (clickedEvent) => {
        clickedEvent.preventDefault();
        if (event.quantity > 1) {
            const newQuantity = event.quantity - 1;
            setEvent({ ...event, quantity: newQuantity });
        }

    }

    return (
        <form className="ticket-purchase">
            <div className="ticket-purchase__inner-wrapper">
                <p className="ticket-purchase__total-sum">{`${event.price * event.quantity} sek`}</p>
                <TicketHandler
                    amount={event.quantity}
                    add={addQuantity}
                    remove={removeQuantity}
                />
            </div>
            <Button
                text="Lägg i varukorgen"
            />
        </form>
    )
}

export default AddToOrder