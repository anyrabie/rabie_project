import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
const Help = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Any Questions?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <Collapsible>
                <CollapsibleTrigger>What are your opening hours?</CollapsibleTrigger>
                <CollapsibleContent>
                  Our opening hours are from 10:00 AM to 10:00 PM Monday to Friday, and from 11:00 AM to 11:00 PM on weekends
                </CollapsibleContent>
              </Collapsible>
            </TableCell>
          </TableRow>

          <TableRow><TableCell className="font-medium"><Collapsible>
        <CollapsibleTrigger>Do you offer vegetarian options?</CollapsibleTrigger>
        <CollapsibleContent>
        Yes, we offer a variety of vegetarian options on our menu, including main dishes, appetizers, and desserts
       </CollapsibleContent>
        </Collapsible></TableCell></TableRow>

        <TableRow><TableCell className="font-medium"><Collapsible>
        <CollapsibleTrigger>Do you accept reservations?</CollapsibleTrigger>
        <CollapsibleContent>
        Yes, we accept reservations. You can book a table online on our website or call us directly.
       </CollapsibleContent>
        </Collapsible></TableCell></TableRow>

        <TableRow><TableCell className="font-medium"><Collapsible>
        <CollapsibleTrigger>What is your policy regarding food allergies?</CollapsibleTrigger>
        <CollapsibleContent>
        We take food allergies very seriously. Please inform our staff of any food allergies before placing your order, and we will do our best to accommodate your needs
       </CollapsibleContent>
        </Collapsible></TableCell></TableRow>

        <TableRow><TableCell className="font-medium"><Collapsible>
        <CollapsibleTrigger>Do you accept credit card payments?</CollapsibleTrigger>
        <CollapsibleContent>
        Yes, we accept credit card payments, as well as cash
       </CollapsibleContent>
        </Collapsible></TableCell></TableRow>

        </TableBody>
      </Table>

      {/* Footer section */}
      <footer className="mt-8 text-center text-gray-500">
        <p className="mb-2">Contact Us</p>
        <p className="mb-2">Privacy Policy</p>
        <p>Terms of Service</p>
      </footer>
      <div className="flex items-center justify-center mt-4">
        
        <a href="https://www.facebook.com/myrestaurant" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaFacebook size={30} />
        </a>

        
        <a href="https://www.twitter.com/myrestaurant" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaTwitter size={30} />
        </a>

        
        <a href="https://www.instagram.com/myrestaurant" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>

      
    </div>
  );
}

export default Help;
