

import React, { useState } from 'react';
import Nav from "../components/Nav";


function Payments() {
    const [showSideBar, setShowSideBar] = useState(false); // Added state for sidebar
    const [searchQuery, setSearchQuery] = useState('');
    const [payments, setPayments] = useState([
        { id: 1, customerName: 'J', amount: 100.00, status: 'Pending' },
        { id: 2, customerName: 'XXX', amount: 150.00, status: 'Completed' },
        { id: 1, customerName: 'XXX', amount: 100.00, status: 'Pending' },
        { id: 2, customerName: 'J', amount: 150.00, status: 'Completed' },
        { id: 1, customerName: 'John ', amount: 100.00, status: 'Pending' },
        { id: 2, customerName: ' Smith', amount: 150.00, status: 'Completed' },
        { id: 1, customerName: 'JDoe', amount: 100.00, status: 'Pending' },
        { id: 2, customerName: 'Ja', amount: 150.00, status: 'Completed' },
        { id: 1, customerName: 'J', amount: 100.00, status: 'Pending' },
        { id: 2, customerName: 'XXX', amount: 150.00, status: 'Completed' }
    ]);

    // Function to handle updating the payment status
    function handleUpdatePaymentStatus(paymentId) {
        console.log('Update payment status for payment with ID:', paymentId);
    }

    return (
       

        
            <div className="payments-container">
                <h2>PAYMENT PRODUCT</h2>
             
                
                <div className='widjets'></div>
                <div className="search-button-container">
                    
                    <input
                        type="text"
                        placeholder="Search for payments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <table className="payment-table">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Customer Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.customerName}</td>
                                <td>${payment.amount.toFixed(2)}</td>
                                <td>{payment.status}</td>
                                <td>
                                    <button onClick={() => handleUpdatePaymentStatus(payment.id)}>Update Status</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
      
    );
}

export default Payments;
