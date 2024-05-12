import "./ticket.css";
import useEventStore from "../../store/event-store";

function Ticket({
    what = "Artistnamn",
    where = "Arenan",
    when = "99 Brawnuary",
    from = "Startar",
    to = "Slutar",
    seating = "Section - seat ",
    barcode = "#00000",
}) {
    const { formatEventDate } = useEventStore((state) => ({
        formatEventDate: state.formatEventDate
    }));

    const { paddedDay, monthAbbreviation } = formatEventDate(when);

    return (
        <article className="ticket">
            <h2 className="ticket__title">WHAT</h2>
            <p className="ticket__event">{what}</p>
            <h2 className="ticket__title">WHERE</h2>
            <p className="ticket__location">{where}</p>
            <h2 className="ticket__title ticket__title--first">WHEN</h2>
            <p className="ticket__date">{`${paddedDay} ${monthAbbreviation}`}</p>
            <h2 className="ticket__title ticket__title--second">FROM</h2>
            <p className="ticket__start">{from}</p>
            <h2 className="ticket__title ticket__title--third">TO</h2>
            <p className="ticket__end">{to}</p>
            <h2 className="ticket__title">INFO</h2>
            <p className="ticket__seat">{seating}</p>
            <h2 className="ticket__barcode">{barcode}</h2>
            <p className="ticket__order-id">{barcode}</p>
        </article>
    );
}

export default Ticket;
