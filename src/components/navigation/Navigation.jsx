import { Link } from "react-router-dom"
import "./navigation.css"

function Navigation() {
  return (

        <nav className="navigation">
            <Link className="navigation__link" aria-label="Navigate to events-list." to="/events">Events</Link>
            <Link className="navigation__link" aria-label="Navigate to checkout." to="/checkout">Checkout</Link>
            <Link className="navigation__link" aria-label="Navigate to your list of tickets." to="/tickets">Tickets</Link>
        </nav>

  )
}

export default Navigation