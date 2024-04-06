import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from './ui/button.jsx';
import './CartItemDia.css'



const CartItemDialog = ({ selectedItem, addItem }) => {
  return (
    <div className="dialog-container">
      <Card>
        <CardHeader>
          <CardTitle><img src={selectedItem.image} alt={selectedItem.name} style={{ width: '80%', height: '200px', objectFit: 'cover' }} /></CardTitle>
          <p className='bold-text'>{selectedItem.name}</p>
        </CardHeader>
        <CardContent>
        <CardDescription>{selectedItem.description}</CardDescription>
          
          
        </CardContent>
        <CardFooter className="footer-container">
            <p className='chaba'>{selectedItem.price} DA</p>
            <Button onClick={() => addItem(selectedItem)}>Add to Cart</Button>   
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartItemDialog;
