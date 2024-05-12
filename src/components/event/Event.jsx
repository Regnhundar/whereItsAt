import "./event.css";
import useEventStore from "../../store/event-store";
import useOrderStore from "../../store/order-store";
import { useNavigate } from "react-router-dom";

function Event({ object }) {
  const { formatEventDate, setEvent } = useEventStore((state) => ({
    formatEventDate: state.formatEventDate,
    setEvent: state.setEvent,
  }));

  const { order } = useOrderStore((state) => ({
    order: state.order,
  }));

  const navigate = useNavigate();

  const { paddedDay, monthAbbreviation } = formatEventDate(object.when.date);

  const goToEvent = () => {
    let existingEvent = order.findIndex(
      (orderEvent) => orderEvent.id === object.id
    );
    if (existingEvent !== -1) {
      setEvent({ ...order[existingEvent] });
    } else {
      setEvent({ ...object, quantity: 0 });
    }
    navigate(`/event/${object.id}`);
  };

  return (
    <li className="event" onClick={goToEvent}>
      <p className="event__date">
        <span className="event__day">
          {paddedDay}
        </span>
        <span className="event__month">
          {monthAbbreviation.toUpperCase()}
        </span>

      </p>

      <div className="event_inner-wrapper">
        <h2 className="event__title">{object.name}</h2>
        <p className="event__location">{object.where}</p>
        <p className="event__time">{`${object.when.from} - ${object.when.to}`}</p>
        <p className="event__price">{`${object.price} sek`}</p>
      </div>
    </li>
  );
}

export default Event;
