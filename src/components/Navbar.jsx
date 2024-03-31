import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './navbar.css';
import { HoverCardDemo } from './ui/bal';
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
import { Input } from './ui/input';
import { TypographyH1 } from './ui/typographyH1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2" >
      <AiFillTag size={25} className='mr-4' /> 
      <Input type="text" placeholder="Promo Code"></Input>
      <Button type="submit">Apply</Button>

    </div>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><AiFillTag size ={25}className='mr-4' /> </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Promotions</DialogTitle>
        </DialogHeader>
          <div>
            <InputWithButton/>
          </div>
      </DialogContent>
    </Dialog>
  )
}


const Navbar = ({ addToCart }) => {
const [cartCount, setCartCount] = useState(0);
const [nav, setNav] = useState(false)
const handleAddToCart = (id) => {
  addToCart(id); 
  setCartCount(cartCount + 1); 
};
  return (
    <div className='navbar max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-2 px-2'>
        <span className="orange" style={{ color: 'orange' }}>R</span>
         <span>E</span>
        <span>S</span>
         <span>T</span>
          <span>O</span>
        </h1>

        
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      
        
        <Sheet>
          <SheetTrigger><Button className='k' onClick={handleAddToCart}><BsFillCartFill size={20} className='mr-2' /> ({cartCount})</Button></SheetTrigger>
          <SheetContent>
          <SheetHeader>
          <SheetTitle className='ka'><img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png" alt="Panel One" style={{ width: '50%', height: '50%' }}/></SheetTitle>
         
         <SheetTitle className='center'>Add items to start a cart</SheetTitle>
          <SheetDescription>
          Once you add items from a restaurant or store, your cart will appear here.
         </SheetDescription>
         </SheetHeader>
         <SheetTitle className='center-justified'><Button className='k'>Get Start</Button></SheetTitle>
         </SheetContent>
         
        </Sheet>


      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'side fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <div className="flex items-center">
          <Link to="/" className="mr-4">
          <h2 className='text-2xl scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-2 px-2'>
              <span className="orange" style={{ color: 'orange' }}>R</span>
              <span>E</span>
              <span>S</span>
              <span>T</span>
              <span>O</span>
            </h2>
          </Link>
          <HoverCardDemo/>
        </div>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><Link to='/about'><Button variant="outline"><TbTruckDelivery size={25} className='mr-4' /> </Button></Link></li>
                <li className='text-xl py-4 flex'><Link to='/help'><Button variant="outline"><MdHelp size={25} className='mr-4' /> </Button></Link></li>
                <li className='text-xl py-4 flex'><DialogDemo/></li>
                
                
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;