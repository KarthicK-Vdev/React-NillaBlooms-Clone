import React, { useState } from 'react';
import './adminpanel.css'; // Import the CSS file

const AdminPanel = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Rose Bouquet', price: '$20', stock: 50 },
        { id: 2, name: 'Tulip Arrangement', price: '$25', stock: 30 },
        { id: 3, name: 'Lily Bouquet', price: '$30', stock: 40 },
        { id: 4, name: 'Orchid Basket', price: '$40', stock: 25 },
        { id: 5, name: 'Sunflower Bouquet', price: '$35', stock: 45 },
        { id: 6, name: 'Daisy Arrangement', price: '$30', stock: 35 },
        // Add more sample products as needed
    ]);

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <div>
                <h3>Manage Products</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;
