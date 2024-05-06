import "./ticket.css";

function Ticket({
    what = "Artistnamn",
    where = "Arenan",
    when = "Datum",
    from = "Startar",
    to = "Slutar",
    seating = "Section X - seat 233",
    barcode = "#A2ED7",
}) {
    return (
        <article className="ticket">
            <h2 className="ticket__title">WHAT</h2>
            <p className="ticket__event">{what}</p>
            <h2 className="ticket__title">WHERE</h2>
            <p className="ticket__location">{where}</p>
            <h2 className="ticket__title ticket__title--first">WHEN</h2>
            <p className="ticket__date">{when}</p>
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
