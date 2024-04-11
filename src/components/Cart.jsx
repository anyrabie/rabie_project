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
  DialogTrigger,
} from "@/components/ui/dialog"
import CartItemDialog from './CartItemDia.jsx';
import { IoIosAddCircle,IoIosRemoveCircle, IoMdCloseCircle,} from 'react-icons/io';
import { toast } from "sonner"

export function SonnerDemo({ addItem ,item}) {

  const handleShowToast = () => {
    const currentTime = new Date(); 
    toast("Your item has been added", {
      description: `Added on ${currentTime.toLocaleString()}`,
      action: {
        label: "Undo",
        onClick: () => {
          toast.dismiss(toast);
        },
      },
    });
    addItem(item);
  };
  return (
    <Button  onClick={handleShowToast}>
      <BsFillCartFill size={20} className='mr-1' />
    </Button>
  );
}
export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Feel free and type your notes here." />
      <Button> Send notes</Button>
    </div>
  )
}




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
  
  if (items.length >=6) {
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
    <Sheet className="sheet">
  <SheetTrigger>
    <Button className='k'>
      <BsFillCartFill size={20} className='mr-2' />
      {totalUniqueItems}
    </Button>
  </SheetTrigger>
  <SheetContent>
    <ul className="cart-list">
      {items.map((item) => (
        <li key={item.id} className="cart-item">
          <div className="item-details">
            <img src={item.image} alt={item.name} className="item-image" />
            <div>
              <h3>{item.name}</h3>
              <p>Prix: {item.price} DA</p>
              <p>Quantité: {item.quantity}</p>
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><IoIosRemoveCircle/></button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><IoIosAddCircle/></button>
            <button onClick={() => removeItem(item.id)}><IoMdCloseCircle/></button>
          </div>
        </li>
      ))}
    </ul>
    <div className="totals-container">
      <h2 className='bold-text'>Total Prices : {cartTotal} Da</h2>
      <h2 className='bold-text-rabie'>Total Items : {totalItems}</h2>
      <div className='center-justified'>
        <Link to="/viewAll"><Button>Go Check</Button></Link>
      </div>
    </div>
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
            <SonnerDemo addItem={addItem} item={item} />
            
            
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