import "./event.css"
import useEventStore from "../../store/event-store";

function Event({ object }) {

    const { formatEventDate} = useEventStore((state) => ({
        formatEventDate: state.formatEventDate
      }));

    return (
        <li className="event">
            <p className="event__date">{formatEventDate(object.when.date).toUpperCase()}</p>
            <h2 className="event__title">{object.name}</h2>
            <p className="event__location">{object.where}</p>
            <p className="event__time">{`${object.when.from} - ${object.when.to}`}</p>
            <p className="event__price">{`${object.price} sek`}</p>
        </li>
    )
}

export default Event