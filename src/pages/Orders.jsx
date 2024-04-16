import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

function Orders() {
    const [orders, setOrders] = useState([
        { id: 1, customerName: 'Sirish Shakya', totalAmount: 150.99, date: '2024-04-15', deliveryDeadline: '2024-04-20', status: 'Pending', productAvailability: 'Available', delivery: 'In progress' },
        { id: 2, customerName: 'Suyash Bajracharya', totalAmount: 220.75, date: '2024-04-14', deliveryDeadline: '2024-04-18', status: 'Completed', productAvailability: 'Unavailable', delivery: 'Delivered' },
        { id: 3, customerName: 'Datengi Sherpa', totalAmount: 180.50, date: '2024-04-16', deliveryDeadline: '2024-04-22', status: 'Pending', productAvailability: 'Available', delivery: 'In progress' },
        { id: 4, customerName: 'Aakirt Maharjan', totalAmount: 198.25, date: '2024-04-13', deliveryDeadline: '2024-04-19', status: 'Completed', productAvailability: 'Unavailable', delivery: 'Delivered' },
        { id: 5, customerName: 'Jhon Rai', totalAmount: 130.00, date: '2024-04-17', deliveryDeadline: '2024-04-21', status: 'Pending', productAvailability: 'Available', delivery: 'In progress' }
    ]);

    // Function to handle updating an order
    const handleUpdate = (orderId) => {
        // Add your update logic here
        console.log("Update order with ID:", orderId);
    };

    // Function to handle deleting an order
    const handleDelete = (orderId) => {
        // Add your delete logic here
        console.log("Delete order with ID:", orderId);
    };

    return (
        <div className="product-container">
            <h2>Order Management</h2>

            <form className="form_form">
                <CiSearch className="search_icon" />
                <input
                    type="text"
                    placeholder="Search by Orders..."
                    className="search-input"
                />
            </form>

            <div className="table-responsive">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Orders</th>
                            <th>Customer Name</th>
                            <th>Total Amount</th>
                            <th>Date</th>
                            <th>Delivery Deadline</th>
                            <th>Status</th>
                            <th>Product Availability</th>
                            <th>Delivery</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.customerName}</td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>{order.date}</td>
                                <td>{order.deliveryDeadline}</td>
                                <td>{order.status}</td>
                                <td>{order.productAvailability}</td>
                                <td>{order.delivery}</td>
                                <td>
                                    <button onClick={() => handleUpdate(order.id)}>Update</button>
                                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
