import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp } from "react-icons/md";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import "./navbar.css";
import { HoverCardDemo } from "./ui/bal";
import { data } from "../data/data.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Cart } from "./Cart";


export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <AiFillTag size={25} className="mr-4" />
      <Input type="text" placeholder="Promo Code"></Input>
      <Button type="submit">Apply</Button>
    </div>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <AiFillTag size={25} className="mr-4" />{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Promotions</DialogTitle>
        </DialogHeader>
        <div>
          <InputWithButton />
        </div>
      </DialogContent>
    </Dialog>
  );
}
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // Nouvel état pour contrôler l'affichage des résultats

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredResults = data.filter((food) =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowResults(term !== ""); // Afficher les résultats seulement si le terme de recherche n'est pas vide
  };
  return (
    <div className="navbar max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-2 px-2">
          <span className="orange" style={{ color: "orange" }}>
            R
          </span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span>O</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <Input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onBlur={() => setShowResults(false)} // Cacher les résultats lorsque la barre de recherche perd le focus
        />
      </div>
      {/* Display search results */}
      {showResults && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id} className="search-result-item">
              <Link to={`/food/${result.id}`}>{result.name}</Link>
            </div>
          ))}
        </div>
      )}
      {/* Cart button */}
      <Cart />
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "side fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <h2 className="text-2xl scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-2 px-2">
              <span className="orange" style={{ color: "orange" }}>
                R
              </span>
              <span>E</span>
              <span>S</span>
              <span>T</span>
              <span>O</span>
            </h2>
          </Link>
          <HoverCardDemo />
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <Link to="/about">
                <Button variant="outline">
                  <TbTruckDelivery size={25} className="mr-4" />{" "}
                </Button>
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <Link to="/help">
                <Button variant="outline">
                  <MdHelp size={25} className="mr-4" />{" "}
                </Button>
              </Link>
            </li>
            <li className="text-xl py-4 flex">
              <DialogDemo />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
