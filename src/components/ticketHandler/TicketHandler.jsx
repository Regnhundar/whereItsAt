import "./ticketHandler.css"


function TicketHandler({amount = 1, remove = (event) => {event.preventDefault(); console.log(`You clicked: -`)}, add = (event) => {event.preventDefault(); console.log(`You clicked: +`)}}) {

    return (
        <div className="ticket-handler">
            <button className="ticket-handler__remove-ticket" onClick={remove}>-</button>
            <p className="ticket-handler__counter">{amount}</p>
            <button className="ticket-handler__add-ticket" onClick={add}>+</button>
        </div>
    )
}

export default TicketHandler