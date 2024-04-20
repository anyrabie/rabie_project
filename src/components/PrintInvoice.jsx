import React, { useRef } from 'react';
import { IoMdPrint } from 'react-icons/io';
import { useReactToPrint } from 'react-to-print';

export const PrintInvoice = ({ items, cartTotal, totalItems }) => {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  return (
    <>
      <div ref={contentToPrint}>
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
      </div>
      <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }}>
        <IoMdPrint/>
      </button>
    </>
  );
}