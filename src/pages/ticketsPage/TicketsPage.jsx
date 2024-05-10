import "./ticketsPage.css";
import useTicketsStore from "../../store/ticket-store";
import { useEffect } from "react";
import Ticket from "../../components/ticket/Ticket";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';



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
  return (
    <main className="tickets">
      {tickets.length > 0 ? (
        <Swiper
          modules={[Pagination, EffectCards]}
          pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
          effect={'cards'}
          cardsEffect={{ perSlideOffset: 2, perSlideRotate: 1 }}

        >
          {tickets.map((ticket, index) => (
            //Tar ut index för att göra key unikt. Då vi kan ha flera biljetter med samma ID behövs något extra.
            <SwiperSlide key={`${ticket.id}-${index}`}>
              <Ticket
                what={ticket.name}
                where={ticket.where}
                when={ticket.when.date}
                from={ticket.when.from}
                to={ticket.when.to}
                seating={ticket.info}
                barcode={ticket.ticketID}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (<h1>You have no tickets.</h1>)
      }

      {
        tickets.length !== 0 && (
          <Button
            text="Radera biljetter"
            onClick={(e) => { clearTickets(e); navigate(`/events`); }}
            margin="margin"
            color="red"
          />
        )
      }
    </main >
  );
}

export default TicketsPage;
