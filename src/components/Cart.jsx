import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Button } from './ui/button.jsx';
import { BsFillCartFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

export function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}
function CartSh({ foods, toggleFavorite })
 {
  const { addItem } = useCart();
  
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {foods.map((item, index) => (
        <div
          key={index}
          className='border shadow-lg rounded-lg hover:scale-105 duration-300'
        >
          <img
            src={item.image}
            alt={item.name}
            className='w-full h-[200px] object-cover rounded-t-lg'
          />
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='costum-two'>
                {item.price}
              </span>
            </p>
            <Button  onClick={() => addItem(item)}>
              <BsFillCartFill size={20} className='mr-1'  />
            </Button>
            <FaHeart 
              color={item.isFavorite ? "red" : "black"} 
              size={24} 
              onClick={() => toggleFavorite(item.id)} 
            />               
          </div>
          
        </div>
      ))}<Cart/>
    </div>
  );
}

export default CartSh;
