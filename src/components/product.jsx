
import './pages.css';
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

function Product() {

    const [products, setProducts] = useState([
        { id: 1, name: 'T-shirt', quantity: 10, price: 15.99 },
        { id: 2, name: 'Jeans', quantity: 20, price: 29.99 }
    ]);




    return (
        <div className="product-container">
            <h2>Product Management</h2>

            <form className="form_form">
                <CiSearch className="search_icon" />
                <input
                    type="text"
                    placeholder="Search by Products..."
                    className="search-input"
                />
            </form>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleUpdate(product.id)}>Update</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}

export default Product;
