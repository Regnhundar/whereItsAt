import "./eventsPage.css"
import axios from "axios"
import { useEffect, useState } from "react"
import useEventStore from "../../store/event-store";
import Event from "../../components/event/Event";

function EventsPage() {
    const [searchInput, setSearchInput] = useState('');

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

    useEffect(() => {

        const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchInput.toLowerCase()));

        if (searchInput.length > 1) {
            setEvents(filteredEvents);
        } else {
            axios.get("https://santosnr6.github.io/Data/events.json")
                .then(response => {
                    setEvents(response.data.events);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [searchInput]);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <>
            <h1 className="page-title">Events</h1>
            <input className="event-search"
                type="search"
                aria-label="Search for an event."
                onChange={handleInputChange}
                value={searchInput}
            />
            {events.length === 0 ? (
                <h2><span className="event-highlight">{searchInput} </span>matched no event.</h2>)
                : (
                    <ul className="event-list">
                        {Array.isArray(events) && events.map((event, index) => {
                            return (
                                <Event
                                    key={event.name}
                                    object={event}
                                    index={index}
                                />
                            )
                        })}
                    </ul>)}
        </>
    )
}

export default EventsPage