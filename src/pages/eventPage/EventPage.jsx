import "./eventPage.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

function EventPage() {
    const [event, setEvent] = useState({})
    const { id } = useParams();
    return (
        <div>EventPage</div>
    )
}

export default EventPage