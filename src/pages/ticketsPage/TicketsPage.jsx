import "./ticketsPage.css";
import useTicketsStore from "../../store/ticket-store";
import { useEffect } from "react";
import Ticket from "../../components/ticket/Ticket";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function TicketsPage() {
  const { tickets, clearTickets } = useTicketsStore((state) => ({
    tickets: state.tickets,
    clearTickets: state.clearTickets,

  }));

  useEffect(() => {
    document.body.classList.add('gradient');
    return () => {
      document.body.classList.remove('gradient');
    };
  }, []);

  const navigate = useNavigate();
  console.log(tickets);
  return (
    <main className="tickets">

      {tickets.map((ticket, index) => (
        //Index tas ut för att key ska bli unikt. Kan inte ha ticket.id på flera av samma event.  
        <Ticket
          key={`${ticket.id}-${index}`}
          what={ticket.name}
          where={ticket.where}
          when={ticket.when.date}
          from={ticket.when.from}
          to={ticket.when.to}
          seating={ticket.info}
          barcode={ticket.ticketID}
        />

      ))}

      {tickets.length !== 0 && (
        <Button
          text="Delete tickets"
          onClick={(e) => { clearTickets(e); navigate(`/events`); }} />)}
    </main>
  );
}

export default TicketsPage;
