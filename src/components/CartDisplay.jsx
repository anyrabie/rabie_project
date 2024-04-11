import React, { useRef } from 'react';
import { useCart } from 'react-use-cart';
import { IoIosAddCircle, IoIosRemoveCircle, IoMdAdd, IoMdCloseCircle, IoMdPrint, IoMdRemove } from 'react-icons/io';
import './CartDisplay.css'
import IsEmpty from './IsEmpty';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TypographyH1 } from './ui/typographyH1';
import { useReactToPrint } from 'react-to-print';
import Invoice from './Invoice';

export const AnotherExample = ({ items, cartTotal, totalItems }) => {
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

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Feel free and type your notes here." />
      <Button>Send notes</Button>
    </div>
  )
}

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
      <div>
        <div className='center'><TypographyH1 title={"Cart Full Content"} /></div>

        <ul className="card-list2">
          {items.map((item) => (
            <li key={item.id} className="card-item2">
              <div className="itemd-details">
                <img src={item.image} alt={item.name} className="itemd-image" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Prix: {item.price} DA</p>
                  <p>Quantité: {item.quantity}</p>
                </div>
              </div>
              <div className='center'>
                <Dialog>
                  <DialogTrigger>
                    <div className='notes'>
                      <p className="add-notes-text">Add Notes</p> <IoMdAdd className="add-notes-icon" />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Add an order note</DialogTitle>
                    <DialogDescription>You may be charged for extras.</DialogDescription>
                    <TextareaWithButton />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="buttond-container2">
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><IoIosRemoveCircle /></button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><IoIosAddCircle /></button>
                <button onClick={() => removeItem(item.id)}><IoMdCloseCircle /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='title-container'>
        <h2 className="title-text">Total Prices:{cartTotal} DA</h2>
        <h2 className="title-text">Total Items:{totalItems}</h2>
      </div>
      <AnotherExample items={items} cartTotal={cartTotal} totalItems={totalItems} />
    </div>
  );
}

export default CartDisplay;
