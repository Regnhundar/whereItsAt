import { create } from "zustand";

const useTicketsStore = create((set) => ({
    tickets: [],

    setTickets: (newTickets) => set({ tickets: newTickets }),

    generateTicketID: () => {
        const characters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        for (let i = characters.length - 1; i > 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let character = characters[i];
            characters[i] = characters[randomNumber];
            characters[randomNumber] = character;
        }
        return characters.slice(0, 5).join(""); // Med join kan man välja vad som ska vara mellan items i en array. Default är komma. join("") så blir det inget mellanrum.
    },

    clearTickets: (e) => {
        e.preventDefault();
        set({ tickets: [] });
        sessionStorage.removeItem("tickets");
    },
}));

export default useTicketsStore;
