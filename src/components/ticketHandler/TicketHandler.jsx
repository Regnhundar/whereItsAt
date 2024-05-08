import "./ticketHandler.css";

// defaultProps kommer tas bort i framtida uppdatering så react rekommenderar att man istället använder "JavaScript default parameters". Vilket ser förjävla rörigt ut.
// Det är värden som används så länge man inte skickar ned någon annan prop via förälder.
function TicketHandler({ amount = 1, remove = (e) => { e.preventDefault(); console.log(`You clicked: -`); }, add = (e) => { e.preventDefault(); console.log(`You clicked: +`); } }) {
  return (
    <div className="ticket-handler">
      <button className="ticket-handler__remove-ticket" onClick={remove}>
        -
      </button>
      <p className="ticket-handler__counter">{amount}</p>
      <button className="ticket-handler__add-ticket" onClick={add}>
        +
      </button>
    </div>
  );
}

export default TicketHandler;
