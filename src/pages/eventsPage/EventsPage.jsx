import "./eventsPage.css"
import axios from "axios"
import { useEffect } from "react"
import useEventStore from "../../store/event-store";
import Event from "../../components/event/Event";

function EventsPage() {

    const { events, setEvents } = useEventStore((state) => {
        return {
            events: state.events,
            setEvents: state.setEvents
        };
    });

    useEffect(() => {
        axios.get("https://santosnr6.github.io/Data/events.json")
            .then(response => {
                setEvents(response.data.events);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <h1 className="page-title">Events</h1>
            <input className="event-search" type="search" />
            <ul className="event-list">
            {Array.isArray(events) && events.map(event => {
                return (
                    <Event
                        key={event.name}
                        object={event}
                    />
                )
            })}
            </ul>
        </>
    )
}

export default EventsPage