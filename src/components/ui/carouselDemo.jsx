// Dans votre composant CarouselDemo

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { id: 1, src: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Description de l\'image 1' },
  { id: 2, src: 'https://images.pexels.com/photos/6275158/pexels-photo-6275158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Description de l\'image 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', alt: 'Description de l\'image 3' },
];

export function CarouselDemo() {
  return (
    <div className="flex justify-center"> 
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map(image => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    
                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
