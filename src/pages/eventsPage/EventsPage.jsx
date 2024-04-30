import "./eventsPage.css"
import axios from "axios"
import { useEffect, useState } from "react"

function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("https://santosnr6.github.io/Data/events.json")
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
console.log(events);
    return (
        <div>EventsPage</div>
    )
}

export default EventsPage