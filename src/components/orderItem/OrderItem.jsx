import TicketHandler from "../ticketHandler/TicketHandler";
import useOrderStore from "../../store/order-store";
import { useNavigate } from "react-router-dom";
import "./orderItem.css";

function OrderItem({ orderItem }) {
    const { order, setOrder } = useOrderStore((state) => ({
        order: state.order,
        setOrder: state.setOrder,
    }));

    const navigate = useNavigate();
    const handleOrder = (e, handle) => {
        e.preventDefault();
        const matchingOrder = order.findIndex((item) => item.id === orderItem.id);
        const updatedOrder = [...order];
        if (matchingOrder !== -1 && handle === "add") {
            updatedOrder[matchingOrder].quantity += 1;
        } else if (matchingOrder !== -1 && handle === "remove") {
            if (updatedOrder[matchingOrder].quantity > 1) {
                updatedOrder[matchingOrder].quantity -= 1;
            } else {
                updatedOrder.splice(matchingOrder, 1);
                if (updatedOrder.length === 0) {
                    navigate("/events")
                }
            }
        }
        setOrder(updatedOrder);
        sessionStorage.setItem("order", JSON.stringify(updatedOrder));
    };
    return (
        <li className="order-item">
            <div className="order-item__inner-wrapper">
                <h2 className="order-item__title">{orderItem.name}</h2>
                <p className="order-item__when">{`${orderItem.when.date} kl ${orderItem.when.from} - ${orderItem.when.to}`}</p>
            </div>

            <TicketHandler
                amount={orderItem.quantity}
                add={(e) => handleOrder(e, "add")}
                remove={(e) => handleOrder(e, "remove")}
            />
        </li>
    );
}

export default OrderItem;
