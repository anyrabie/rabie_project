import React, { useRef } from "react";
import { useCart } from "react-use-cart";
import {
  IoIosAddCircle,
  IoIosDownload,
  IoIosRemoveCircle,
  IoMdAdd,
  IoMdCloseCircle,
  IoMdPrint,
  IoMdRemove,
} from "react-icons/io";
import "./CartDisplay.css";
import IsEmpty from "./IsEmpty";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH1 } from "./ui/typographyH1";
import { DownloadInvoice } from "./DownloadInvoice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import StripeCheckout from "react-stripe-checkout";

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Feel free and type your notes here." />
      <Button>Send notes</Button>
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

  if (isEmpty) {
    return <IsEmpty />;
  }

  return (
    <div>
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
      </div>
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
            <TextareaWithButton />
          </DialogContent>
        </Dialog>
      </div>
      <div className="title-container">
        <h2 className="title-text">Total Prices:{cartTotal} DA</h2>
        <h2 className="title-text">Total Items:{totalItems}</h2>
      </div>
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
          loading ? "Téléchargement en cours..." : <Button>Download Invoice<IoIosDownload size={30} /></Button>
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
      <Button>Confirm Order</Button>
    </div>
  );
}

export default CartDisplay;
