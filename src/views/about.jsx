import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2 className='wah'>About Our Restaurant:</h2>
      <p>Welcome to RESTO Name! We're thrilled to share a bit about who we are and what makes us special.</p>
      <ResizablePanelGroup direction="horizontal" style={{ width: '600px', height: '400px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <ResizablePanel>
    <img src="https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg" alt="Panel One" style={{ width: '100%', height: '100%' }} />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
    <img src="https://cdn.pixabay.com/photo/2019/09/23/07/39/chef-4497749_960_720.jpg" alt="Panel Two" style={{ width: '100%', height: '100%' }} />
  </ResizablePanel>
  <ResizablePanel>
    <img src="https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_960_720.jpg" alt="Panel three" style={{ width: '100%', height: '100%' }} />
  </ResizablePanel>
</ResizablePanelGroup>




      <h2 className='wah'>Our Mission:</h2>
      <p>Our mission is to ... We aim to create memorable dining experiences for every guest who walks through our doors.</p>
      
      <h2 className='wah'>Our Chef:</h2>
      <Table className='table' style={{ width: '50%' }}>
        <TableCaption>A list of OURS CHEFS.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Full Name</TableHead>
            <TableHead>Specialty cuisine</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Chef Moha</TableCell>
            <TableCell>French cuisine</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Chef Si</TableCell>
            <TableCell>Algerian cuisine</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Chef Antony Manu</TableCell>
            <TableCell>Brazillian cuisine</TableCell>
            
          </TableRow>
        </TableBody>
      </Table>
      
      <h2 className='wah'>Our Menu:</h2>
      <p>Explore our diverse menu featuring a variety of defrent cuisine dishes made with fresh, locally sourced ingredients. From appetizers to desserts, we offer something for everyone to enjoy.</p>
      
      <h2 className='wah'>Locally Sourced:</h2>
      <p>We are committed to supporting local farmers and producers by sourcing ingredients from nearby farms and suppliers. This allows us to offer the freshest, highest quality ingredients in our dishes.</p>
      
      <h2 className='wah'>Visit Us</h2>
      <p>We invite you to dine with us and experience the flavors of RESTO. <Link to="/" ><Button variant="link" >Visit us</Button></Link> and enjoy a delicious meal in a warm and welcoming atmosphere.</p>
      
      <h2 className='wah'>Follow Us!</h2>
      <p><Link to="/help" ><Button variant="link" >Stay connected</Button></Link> with us on social media for the latest updates, special offers, and behind-the-scenes glimpses into our kitchen:</p>
      
    </div>
  );
};

export default About;
