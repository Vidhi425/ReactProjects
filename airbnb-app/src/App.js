import React from"react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";

export default function App(){
  return(
    <div className="container">
    <Navbar/>
    <p><Hero/></p>
   
    <div className="card3" >
    <Card
    img="katie.png"
    rating="5.0"
    reviewCount={6}
    country="USA"
    title="Life lessons from kateie Zafers"
    price={136}
    />
    <Card
    img="wedding-photography.png"
    rating="5.0"
    reviewCount={30}
    country="USA"
    title="Learn Wedding Photography"
    price={125}
    />
    <Card
    img="mountain-bike.png"
    rating="5.0"
    reviewCount={2}
    country="USA"
    title="Group Mountain Biking"
    price={50}
    />
    </div>
    
    
    </div>
  )
};