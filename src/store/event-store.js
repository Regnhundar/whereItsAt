import { create } from "zustand";
import axios from "axios";

const useEventStore = create((set) => ({
  events: [],

  setEvents: (newEvents) => set({ events: newEvents }),

  event: {},

  setEvent: (newEvent) => set({ event: newEvent }),

  formatEventDate: (date) => {
    const [day, monthName] = date.split(" ");
    const paddedDay = String(day).padStart(2, "0");
    const monthAbbreviation = monthName.substring(0, 3);

    return { paddedDay, monthAbbreviation };
  },

  getEvents: () => {
    axios
      .get("https://santosnr6.github.io/Data/events.json")
      .then((response) => {
        set({ events: response.data.events });
      })
      .catch((error) => {
        console.log("Error at getEvents", error);
      });
  },
  getEvent: (id) => {
    axios
      .get("https://santosnr6.github.io/Data/events.json")
      .then((response) => {
        const matchedEvent = response.data.events.find(
          (event) => event.id === id
        );
        if (matchedEvent) {
          set({ event: { ...matchedEvent, quantity: 1 } });
        } else {
          console.log(`No event found with id: ${id}`);
        }
      })
      .catch((error) => {
        console.log("Error at getEvent", error);
      });
  },
}));

export default useEventStore;
