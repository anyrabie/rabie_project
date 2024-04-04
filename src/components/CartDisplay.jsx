import React from 'react';
import { useCart } from 'react-use-cart';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './CartDisplay.css'
import IsEmpty from './IsEmpty';

function CartDisplay() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    isEmpty,
    totalItems
  } = useCart();
  if (isEmpty) {
    return (
      <IsEmpty />
    );
  }
  
  return (
   <div>
    <table className="cart-table">
      <thead>
        <tr>
          <th>Image</th>
          <th style={{ paddingRight: '10px' }}>Plat    </th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} className="item-image" />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <div className="button-container">
              <button className='decrese' style={{ backgroundColor: 'green', borderRadius: '50%', padding: '15px' }} 
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        <IoMdRemove/></button>
              <button className='increse' style={{ backgroundColor: 'blue', borderRadius: '50%', padding: '15px' }} 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        <IoMdAdd/></button>
              <button className='remove' style={{ backgroundColor: 'red', borderRadius: '50%', padding: '15px' }} 
                    onClick={() => removeItem(item.id)}> 
                        <AiOutlineCloseCircle/></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="title-container">
      <h2 className="title-text">Total Prices:</h2>
      <span className="price">{cartTotal} Da</span>
      <h2 className="title-text">Total Items:</h2>
      <span className="quantity">{totalItems}</span>
    </div>
    </div>
  );
}

export default CartDisplay;
