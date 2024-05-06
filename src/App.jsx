import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventPage from "./pages/eventPage/EventPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import TicketsPage from "./pages/ticketsPage/TicketsPage";
import Navigation from "./components/navigation/Navigation";
import { useEffect } from "react";
import useEventStore from "./store/event-store";

function App() {
  const location = useLocation();

  const { event } = useEventStore((state) => ({
    event: state.event,
  }));

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
      {location.pathname !== "/" && <Navigation />}
    </>
  );
}

export default App;
