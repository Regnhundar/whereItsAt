import { create } from "zustand";

const useOrderStore = create((set) => ({
  order: [],

  setOrder: (newOrder) => set({ order: newOrder }),
}));

export default useOrderStore;
