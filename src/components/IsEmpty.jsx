import React from 'react';
import './IsEmpty.css';
function IsEmpty() {
  return (
    <div className="empty-container">
      <h2 className="empty-text">Your cart is empty</h2>
      <p className="empty-description">Add some items to your cart to continue shopping!</p>
    </div>
  );
}

export default IsEmpty;
