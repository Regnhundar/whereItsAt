import { create } from "zustand";

const useEventStore = create((set)=> ({
    events: [],
    
    setEvents: (newEvents) => set({events: newEvents}),
    
    event: {},
    
    setEvent: (newEvent) => set({event: newEvent}),
    
    formatEventDate: (dateString) => {
        const [day, monthName] = dateString.split(" ");
        const paddedDay = String(day).padStart(2, "0");
        const monthAbbreviation = monthName.substring(0, 3);
    
        return `${paddedDay} ${monthAbbreviation}`;
      },
      
}))

export default useEventStore;