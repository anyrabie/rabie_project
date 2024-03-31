import React, { useState } from 'react';
import { data } from '../data/data.js';
import './food.css'
import { Button } from './ui/button.jsx';
import { Textarea } from "@/components/ui/textarea"
import { BsFillCartFill} from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';



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
  const addToCart = (id) => {
    setFoods(
      foods.map((item) => {
        if (item.id === id) {
          return { ...item, isAdded: true }; 
        }
        return item;
      })
    );
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

      {/* Display foods */}
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
              <Button onClick={() => handleAddToCart(item.id)}>
                <BsFillCartFill size={20} className='mr-2' />
              </Button> 

              <FaHeart 
                color={item.isFavorite ? "red" : "black"} 
                size={24} 
                onClick={() => toggleFavorite(item.id)} 
              />                      
            </div>
          </div>
        ))}
      </div>
      <h2 className='lc'> Leave a comment:</h2>
      <TextareaWithButton />
    </div>
  );
};

export default Food;
