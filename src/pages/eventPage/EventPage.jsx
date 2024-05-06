import "./eventPage.css";
import { useEffect } from "react";
import useEventStore from "../../store/event-store";
import AddToOrder from "../../components/addToOrder/AddToOrder";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pageTittle/PageTitle";

function EventPage() {
  const { event, setEvent, getEvent } = useEventStore((state) => ({
    event: state.event,
    setEvent: state.setEvent,
    getEvent: state.getEvent,
  }));

  const { id } = useParams();

  // För att undvika onödiga API-anrop kollar vi först om event finns sparad i sessionStorage. Om det inte finns anropas API.
  useEffect(() => {
    const savedEvent = sessionStorage.getItem("event");
    if (savedEvent) {
      const parsedSavedEvent = JSON.parse(savedEvent);
      if (parsedSavedEvent.id === id) {
        setEvent(parsedSavedEvent);
      } else {
        getEvent(id);
      }
    }
  }, []);

  // Kollar så alla nycklar är tillgängliga i objektet innnan sidan renderas. Nästade objekt (dvs event.when.date osv) tar längre tid att köra i JSON.parse vilket resulterade i error.
  const isEventReady =
    event &&
    event.name &&
    event.when &&
    event.when.date &&
    event.when.from &&
    event.when.to &&
    event.where;

  if (!isEventReady) {
    return null;
  }

  return (
    <>
      <PageTitle
        title={"Event"}
        subtitle={"You are about to score some tickets to"}
      />
      <main className="event-wrapper">
        <article className="event-info">
          <h3 className="event-info__title">{event.name}</h3>
          <p className="event-info__date">{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</p>
          <p className="event-info__location">{`@ ${event.where}`}</p>
        </article>
        <AddToOrder />
      </main>
    </>
  );
}

export default EventPage;
