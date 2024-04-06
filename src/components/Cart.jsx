import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Button } from './ui/button.jsx';
import { BsFillCartFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Cart.css'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CartItemDialog from './CartItemDia.jsx';


export function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems
  } = useCart();

  if (isEmpty) {
    return (
      <div>          
        <Sheet>
        <SheetTrigger><Button className='k'><BsFillCartFill  size={20} className='mr-2'/>{totalUniqueItems} </Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='ka'><img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png" alt="Panel One" style={{ width: '50%', height: '50%' }}/></SheetTitle>
              <SheetTitle className='center'>Add items to start a cart</SheetTitle>
              <SheetDescription>
                Once you add items from a restaurant or store, your cart will appear here.
              </SheetDescription>
            </SheetHeader>
            <SheetTitle className='center-justified'><Link to="/"><Button className='k'>Get Start</Button></Link></SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  
  if (items.length > 6) {
    return (
      <div>          
        <Sheet>
        <SheetTrigger><Button className='k'><BsFillCartFill  size={20} className='mr-2'/>{totalUniqueItems} </Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
            <SheetTitle className='ka'><img src="https://cdn.pixabay.com/photo/2019/03/12/07/00/clumsy-4050065_960_720.png" alt="Panel One" style={{ width: '80%', height: '50%' }}/></SheetTitle>
              <SheetTitle className='center'>The number of items exceeds 6</SheetTitle>
              <SheetDescription>
              Your articles has been reserved, please don't worry.
              </SheetDescription>
              <SheetTitle className='center-justified'><Link to="/viewAll"><Button>Go Check</Button></Link></SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <>
    <Sheet>
      <SheetTrigger>
        <Button className='k'>
         <BsFillCartFill  size={20} className='mr-2'/>
           {totalUniqueItems}
       </Button>
      </SheetTrigger>
    <SheetContent>
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
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2 className='bold-text'>Total Prices :{cartTotal} Da</h2>
    <h2 className='bold-text-rabie'>Total Items :{totalItems}</h2>
    </SheetContent>
    </Sheet>
    </>
  );
}
function CartSh({ foods, toggleFavorite }) {
  const { addItem } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [ setIsDialogOpen] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true); 
  };

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      <Dialog>
        
      {foods.map((item, index) => (
        <div
          key={index}
          className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          onClick={() => handleClick(item)}
        >
          <div className="image-container">
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
             <FaHeart className='FaHeartIcon'
              color={item.isFavorite ? "red" : "#D1C8C8"}
              size={24}
              onClick={() => toggleFavorite(item.id)}
            />
          </div>
        <DialogTrigger><Button variant="link">view more</Button></DialogTrigger>
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='costum-two'>
                {item.price} Da
              </span>
            </p>
            <Button onClick={() => addItem(item)}>
              <BsFillCartFill size={20} className='mr-1' />
            </Button>
            
            
          </div>
          
        </div>
        
      ))}
          <DialogContent>
        <CartItemDialog selectedItem={selectedItem} addItem={addItem} /></DialogContent>
        </Dialog>
      
      
    </div>
  );
}

export default CartSh;