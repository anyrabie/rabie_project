import React from 'react';

const Invoice = ({ items, cartTotal, totalItems }) => {
  return (
    <div className="invoice">
      <h1>Facture</h1>
      <div className="invoice-details">
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {cartTotal} Da</p>
      </div>
      <table className="invoice-items">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
