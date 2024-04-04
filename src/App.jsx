import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import { Routes, Route } from 'react-router-dom'
import Help from './views/help'
import About from './views/about'
import NotFound from './views/NotFound'
import { CartProvider } from 'react-use-cart'
import { ViewItem } from './views/ViewItem'


function App() {
  return (
    <CartProvider>
    <div className='3abalk'>
      {/* Navbar affichée sur toutes les routes */}
      <Navbar />
      {/* Router pour gérer les différentes routes */}
      <Routes>
        {/* Route pour la page Home */}
        <Route path="/" element={<>
          <Hero />
          <HeadlineCards />
          <Food />
        </>} />
        {/* Route pour la page About */}
        <Route path="/about" element={<About />} />
        {/* Ajoutez d'autres routes ici */}
        
        {/* Route pour la page Help */}
        
        <Route path="/help" element={<Help />} />
        {/* Route pour la page Not Found */}
        <Route path="*" element={<NotFound />} />
        <Route path="/viewAll" element={<ViewItem />} /> {/* Placez cette ligne à la fin */}
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
