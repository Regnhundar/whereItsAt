import "./eventsPage.css";
import { useEffect, useState } from "react";
import useEventStore from "../../store/event-store";
import Event from "../../components/event/Event";

function EventsPage() {
  const [searchInput, setSearchInput] = useState("");

  const { events, setEvents, getEvents } = useEventStore((state) => {
    return {
      events: state.events,
      setEvents: state.setEvents,
      getEvents: state.getEvents,
    };
  });

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchInput.length !== 0) {
      setEvents(filteredEvents);
    } else {
      getEvents();
    }
  }, [searchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <h1 className="page-title">Events</h1>
      <input
        className="event-search"
        type="search"
        aria-label="Search for an event."
        onChange={handleInputChange}
        value={searchInput}
      />
      {events.length === 0 && searchInput.length !== 0 ? (
        <h2>
          <span className="event-highlight">{searchInput} </span>matched no
          event.
        </h2>
      ) : (
        <ul className="event-list">
          {Array.isArray(events) &&
            events.map((event) => {
              return <Event key={event.id} object={event} />;
            })}
        </ul>
      )}
    </>
  );
}

export default EventsPage;
