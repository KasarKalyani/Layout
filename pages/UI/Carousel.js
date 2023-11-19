// CardCarousel.js


import React, { useRef } from 'react';
// import './CardCarousel.css';


const Carousel = ({ cards }) => {


 let card = [
   'Card 1',
   'Card 2',
   'Card 3',
   'Card 4',
   'Card 5',
   'Card 6',
   'Card 7',
   'Card 1',
   'Card 2',
   'Card 3',
   'Card 4',
   'Card 5',
   'Card 6',
   'Card 7',
 ];
 const carouselRef = useRef(null);


 const scrollLeft = () => {
   carouselRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
 };


 const scrollRight = () => {
   carouselRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
 };


 return (
   <div style={{display: 'flex', overflow: 'auto', width: '100%'}}>
     <button onClick={scrollLeft} className="scroll-button left-button">
       &lt;
     </button>
     <div className="card-carousel" ref={carouselRef} style={{display:'flex'}}>
       {card.map((card, index) => (
         <div key={index} className="card">
           {card}
         </div>
       ))}
     </div>
     <button onClick={scrollRight} className="scroll-button right-button">
       &gt;
     </button>
   </div>
 );
};


export default Carousel;
