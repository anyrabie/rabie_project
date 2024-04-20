import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselDemo } from "@/components/ui/carouselDemo";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyP } from "@/components/ui/typographyP";
import "./promo.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Promo = () => {
  return (
    <div>
      <h2 className="wah">We are here!</h2>
      <CarouselDemo />
      <h2 className="wah">Table of ours Promotions:</h2>

      <Table className="table" style={{ width: "50%" }}>
        <TableCaption>A list of OURS PROMOTIONS.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Promo Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Harira Soup</TableCell>
            <TableCell>traditionnel</TableCell>
            <TableCell>200DA</TableCell>
            <TableCell className="text-right">100DA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Arabian Collection</TableCell>
            <TableCell>traditionnel</TableCell>
            <TableCell>1000DA</TableCell>
            <TableCell className="text-right">500DA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Caesar Salad</TableCell>
            <TableCell>salad</TableCell>
            <TableCell>500DA</TableCell>
            <TableCell className="text-right">200DA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="wah">Why Promotions</h2>
      <TypographyP />
    </div>
  );
};

export default Promo;
