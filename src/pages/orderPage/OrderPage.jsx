import OrderItem from "../../components/orderItem/OrderItem";
import PageTitle from "../../components/pageTittle/PageTitle";
import "./orderPage.css";
import useOrderStore from "../../store/order-store";
import useTicketsStore from "../../store/ticket-store";
import Button from "../../components/button/Button";

function OrderPage() {
  const { order, setOrder } = useOrderStore((state) => ({
    order: state.order,
    setOrder: state.setOrder,
  }));

  const { setTickets, generateTicketID, tickets, generateTicketSeating } = useTicketsStore((state) => ({
    setTickets: state.setTickets,
    generateTicketID: state.generateTicketID,
    generateTicketSeating: state.generateTicketSeating,
    tickets: state.tickets,
  }));

  const sumUpOrder = () => {
    let totalAmount = 0;
    order.map(
      (orderItem) => (totalAmount += orderItem.price * orderItem.quantity)
    );
    return totalAmount;
  };

  const createTickets = () => {
    const ticketsArray = [];
    order.forEach((orderItem) => {
      const { seatingSection, firstSeat } = generateTicketSeating();

      for (let i = 0; i < orderItem.quantity; i++) {
        const ticketID = generateTicketID();
        const ticket = {
          ...orderItem, ticketID, info: `Section ${seatingSection} - seat ${firstSeat + i}`
        };
        delete ticket.quantity;
        ticketsArray.push(ticket);
      }
    });
    setTickets([...tickets, ...ticketsArray]);
    setOrder([]);
    sessionStorage.removeItem("order");
    sessionStorage.setItem("tickets", JSON.stringify([...tickets, ...ticketsArray]));
  }


  return (
    <>
      <PageTitle title={"Order"} />
      {order.length > 0 ? (
        <>
          <ul className="orders">
            {order.map((orderItem) => (
              <OrderItem key={orderItem.id} orderItem={orderItem} />
            ))}
          </ul>
          <h3 className="order-subtitle">Totalt värde på order</h3>
          <p className="order-total">{`${sumUpOrder()} sek`}</p>
          <Button text={"Skicka order"} onClick={createTickets} />
        </>
      ) : (
        <h2 className="order-thanks">Thank you for your order!</h2>
      )}
    </>
  );
}

export default OrderPage;
