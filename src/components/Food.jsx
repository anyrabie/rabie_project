import React, { useState } from 'react';
import { data } from '../data/data.js';
import './food.css'
import { Button } from './ui/button.jsx';
import { Textarea } from "@/components/ui/textarea"
import Cart from './Cart';
import CartSh from './Cart';

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}

const Food = () => {

  const [foods, setFoods] = useState(data);
  const toggleFavorite = (id) => {
    setFoods(foods.map(item => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    }));
  };
 
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
    
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='costum-button'
            >
              All
            </button>
            <button
              onClick={() => filterType('frite')}
              className='costum-button'
            >
              frite
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='costum-button'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='costum-button'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('traditionnel')}
              className='costum-button'
            >
              traditionnel
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('100DA')}
              className='costum-button'
            >
              100DA
            </button>
            <button
              onClick={() => filterPrice('200DA')}
              className='costum-button'
            >
              200DA
            </button>
            <button
              onClick={() => filterPrice('500DA')}
              className='costum-button'
            >
              500DA
            </button>
            <button
              onClick={() => filterPrice('1000DA')}
              className='costum-button'
            >
              1000DA
            </button>
          </div>
        </div>
      </div>
      <CartSh foods={foods} toggleFavorite={toggleFavorite} />
      <h2 className='lc'> Leave a comment:</h2>
      <TextareaWithButton />
    </div>
  );
};

export default Food;
