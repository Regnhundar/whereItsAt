import "./eventPage.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import useEventStore from "../../store/event-store";

function EventPage() {
    const { events, setEvents } = useEventStore((state) => ({
        events: state.events,
        setEvents: state.setEvents
      }));
      
    const { id } = useParams();
    return (
        <div>EventPage</div>
    )
}

export default EventPage