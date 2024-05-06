import "./ticketsPage.css";
import useTicketsStore from "../../store/ticket-store";
import useEventStore from "../../store/event-store";
import Ticket from "../../components/ticket/Ticket";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function TicketsPage() {
  const { tickets, generateTicketID, clearTickets } = useTicketsStore((state) => ({
    tickets: state.tickets,
    setTickets: state.setTickets,
    generateTicketID: state.generateTicketID,
    clearTickets: state.clearTickets
  }));

  const { formatEventDate } = useEventStore((state) => ({
    formatEventDate: state.formatEventDate
  }));

  const navigate = useNavigate();

  return (
    <main className="tickets">

      {tickets.map((ticket) => (
        //Array.from skapar en shallow-copy baserad på något itirerbart. I det här fallet kvantiteten i objektet.
        //Understrecket, dvs: _ , indikerar att värdet inte används. Enbart index är intressant. Behövs inte skrivas så men är konvention.
        //Index tas ut för att key ska bli unikt. Kan inte ha ticket.id på flera ur samma objekt.  
        Array.from({ length: ticket.quantity }).map((_, index) => (
          <Ticket
            key={`${ticket.id}-${index}`}
            what={ticket.name}
            where={ticket.where}
            when={formatEventDate(ticket.when.date)}
            from={ticket.when.from}
            to={ticket.when.to}
            seating={"Section X - seat 233"}
            barcode={`#${generateTicketID()}`}
          />
        ))
      ))}

      {tickets.length !== 0 && (
        <Button
          text="Delete tickets"
          onClick={(e) => { clearTickets(e); navigate(`/events`); }} />)}
    </main>
  );
}

export default TicketsPage;
