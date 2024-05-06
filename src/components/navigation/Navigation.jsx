import { Link } from "react-router-dom";
import "./navigation.css";
import useOrderStore from "../../store/order-store";
import useTicketsStore from "../../store/ticket-store";

function Navigation() {
  const { tickets } = useTicketsStore((state) => ({
    tickets: state.tickets,
  }));

  const { order } = useOrderStore((state) => ({
    order: state.order,
  }));

  return (
    <nav className="navigation">
      {(order.length !== 0 || tickets.length !== 0) && (
        <Link
          className="navigation__link"
          aria-label="Navigate to events-list."
          to="/events"
        >
          Events
        </Link>)}
      {order.length > 0 && (
        <Link
          className="navigation__link"
          aria-label="Navigate to your order."
          to="/order"
        >
          Order
        </Link>)}
      {tickets.length > 0 && (
        <Link
          className="navigation__link"
          aria-label="Navigate to your list of tickets."
          to="/tickets"
        >
          Tickets
        </Link>)}
    </nav>
  );
}

export default Navigation;
