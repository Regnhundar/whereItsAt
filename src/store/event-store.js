import { create } from "zustand";

const useEventStore = create((set)=> ({
    events: [],
    setEvents: (newEvents) => set({events: newEvents}),
    event: {},
    setEvent: (newEvent) => set({event: newEvent})
}))

export default useEventStore;