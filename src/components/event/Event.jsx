import "./event.css"
import useEventStore from "../../store/event-store";
import { useNavigate } from "react-router-dom";

function Event({ object, index }) {

    const { formatEventDate, setEvent } = useEventStore((state) => ({
        formatEventDate: state.formatEventDate,
        setEvent: state.setEvent
    }));

    const navigate = useNavigate();

    const goToEvent = (index) => {
        setEvent({...object, quantity: 1});
        sessionStorage.setItem("event", JSON.stringify({...object, quantity: 1}));
        navigate(`/event/${index+1}`);
    }
    


    return (
        <li className="event" onClick={()=>goToEvent(index)}>
            <p className="event__date">{formatEventDate(object.when.date).toUpperCase()}</p>
            <div className="event_inner-wrapper">
                <h2 className="event__title">{object.name}</h2>
                <p className="event__location">{object.where}</p>
                <p className="event__time">{`${object.when.from} - ${object.when.to}`}</p>
                <p className="event__price">{`${object.price} sek`}</p>
            </div>
        </li>
    )
}

export default Event