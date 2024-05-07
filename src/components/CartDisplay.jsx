import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import addNotification from "react-push-notification";
import {
  IoIosAddCircle,
  IoIosDownload,
  IoIosRemoveCircle,
  IoMdAdd,
  IoMdCloseCircle,
} from "react-icons/io";
import "./CartDisplay.css";
import IsEmpty from "./IsEmpty";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH1 } from "./ui/typographyH1";
import { DownloadInvoice } from "./DownloadInvoice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import StripeCheckout from "react-stripe-checkout";
import { DialogTitle } from "@radix-ui/react-dialog";

export function DialogDemoConfirmOrder({ notes, onButtonClick }) {
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    setShowNotes(!!notes);
  }, [notes]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ready To Send</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          We have prepared your order and taken your notes into consideration
        </DialogTitle>
        {showNotes && (
          <div className="notes-container">
            <h3 className="notes-title">Your Notes</h3>
            <p className="notes-content">{notes}</p>
          </div>
        )}
        <Button onClick={onButtonClick} className="confirm-button">
          Confirm Order
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export function TextareaWithButton({ onSendNotes }) {
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSendNotes = () => {
    onSendNotes(notes);
    setNotes(""); 
  };

  return (
    <div className="grid w-full gap-2">
      <Textarea
        placeholder="Feel free and type your notes here."
        value={notes}
        onChange={handleNotesChange}
      />
      <Button onClick={handleSendNotes}>Send notes</Button>
    </div>
  );
}

function CartDisplay() {
  const onToken = (token) => {
    console.log(token);
  };
  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    isEmpty,
    totalItems,
  } = useCart();
  const [orderNotes, setOrderNotes] = useState("");

  const handleSendNotes = (notes) => {
    setOrderNotes(notes);
  };

  if (isEmpty) {
    return <IsEmpty />;
  }

  const buttonClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "The Order has sent To manager",
      theme: "darkblue",
      native: true,
      duration: 4000,
      backgroundTop: "green",
      backgroundBottom: "darkgreen",
      colorTop: "green",
      colorBottom: "darkgreen",
    });
  };

  return (
    <div>
      <div className="center">
        <TypographyH1 title={"Cart Full Content"} />
      </div>

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

            <div className="buttond-container2">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                <IoIosRemoveCircle />
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                <IoIosAddCircle />
              </button>
              <button onClick={() => removeItem(item.id)}>
                <IoMdCloseCircle />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="center">
        <Dialog>
          <DialogTrigger>
            <div className="notes">
              <p className="add-notes-text">Add Notes</p>{" "}
              <IoMdAdd className="add-notes-icon" />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add an order note</DialogTitle>
            <DialogDescription>
              You may be charged for extras.
            </DialogDescription>
            <TextareaWithButton onSendNotes={handleSendNotes} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="title-container">
        <h2 className="title-text">Total Prices: {cartTotal} DA</h2>
        <h2 className="title-text">Total Items: {totalItems}</h2>
      </div>

      <div className="button-container">
        <PDFDownloadLink
          document={
            <DownloadInvoice
              items={items}
              cartTotal={cartTotal}
              totalItems={totalItems}
            />
          }
          fileName="facture"
        >
          {({ loading }) =>
            loading ? (
              "Téléchargement en cours..."
            ) : (
              <Button>
                Download Invoice <IoIosDownload size={30} />
              </Button>
            )
          }
        </PDFDownloadLink>

        <StripeCheckout
          token={onToken}
          name="RESTO"
          shippingAddress="true"
          billingAddress="true"
          zipCode="true"
          alipay="true"
          bitcoin="true"
          allowRememberMe="true"
          reconfigureOnUpdate="true"
          triggerEvent="onClick"
          amount={cartTotal}
          stripeKey="pk_test_51P52xrEocppImaqvs17OLsdkQOuWIYJe08DxkhLGySA3uuXvAp7DPqJ1cJdWKjJNbuSuEuyoBXry4Z1B1w0RD46u00tVeTCCFC"
        />

        <DialogDemoConfirmOrder
          notes={orderNotes}
          onButtonClick={buttonClick}
        />
      </div>
    </div>
  );
}

export default CartDisplay;
