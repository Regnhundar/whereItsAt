import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventPage from "./pages/eventPage/EventPage";
import OrderPage from "./pages/orderPage/OrderPage";
import TicketsPage from "./pages/ticketsPage/TicketsPage";
import Navigation from "./components/navigation/Navigation";
import { useEffect } from "react";
import useTicketsStore from "./store/ticket-store";
import useOrderStore from "./store/order-store";

function App() {
  const location = useLocation();

  const { setOrder } = useOrderStore((state) => ({
    setOrder: state.setOrder,
  }));

  const { setTickets } = useTicketsStore((state) => ({
    setTickets: state.setTickets,
  }));

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("order");
    const savedTickets = sessionStorage.getItem("tickets");

    if (savedTickets) {
      setTickets(JSON.parse(savedTickets))
    }

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder))
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
      {location.pathname !== "/" && <Navigation />}
    </>
  );
}

export default App;
