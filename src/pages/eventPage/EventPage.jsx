import "./eventPage.css"
import { useEffect } from "react"
import useEventStore from "../../store/event-store";

function EventPage() {

    const { event, setEvent } = useEventStore((state) => ({
        event: state.event,
        setEvent: state.setEvent
    }));

    useEffect(() => {
        const savedEvent = sessionStorage.getItem("event");

        if (savedEvent) {
            setEvent(JSON.parse(savedEvent));
        }

    }, []);

        // Kollar så alla nycklar är tillgängliga i objektet innnan sidan renderas. Nästade objekt (dvs event.when.date osv) tar längre tid att köra i JSON.parse vilket resulterade i error.  
        const isEventReady = event && event.name && event.when && event.when.date && event.when.from && event.when.to && event.where;

        if (!isEventReady) {
            return null;
        }

    return (
        <>
        <h1 className="page-title">Event</h1>
        <h2 className="page-subtitle">You are about to score some tickets to</h2>

        <article className="event-info">
            <h3 className="event-info__title">{event.name}</h3>
            <p className="event-info__date">{ `${event.when.date} kl ${event.when.from} - ${event.when.to}`}</p>
            <p className="event-info__location">{ `@ ${event.where}`}</p>
        </article>
        
        </>
    )
}

export default EventPage