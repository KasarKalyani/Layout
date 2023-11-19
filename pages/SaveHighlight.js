import { useState } from "react";
const { Highlight } = require("../styles/proStyle");
import { FaSave } from "react-icons/fa";


function SaveHighlight() {
 const [box, setBox] = useState([]);
 const [savedBox, setSavedBox] = useState([]);
 const [savedBox2, setSavedBox2] = useState([]);


 const get = async () => {
   const res = await fetch("/api/proDataApiRoute");
   const data = await res.json();
   setBox(data);
 };


 const saved = async (id, src) => {
   const res = await fetch("/api/SavedItem", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ id, src }),
   });
   const data = await res.json();
 };


 const showsaved = async () => {
   const res = await fetch("/api/SavedItem");
   const data = await res.json();
   setSavedBox2(data);
   console.log("data::", data);
 
 };
 return (
   <>
     <button
       onClick={() => {
         get();
       }}
     >
       Click
     </button>
     {box.map((box) => {
       return (
         <Highlight key={box.id}>
           <FaSave style={{ position: "absolute" }} />
           <img
             src={box.src}
             onClick={() => {
               saved(box.id, box.src);
             }}
           />
         </Highlight>
       );
     })}
     <button
       onClick={() => {
         showsaved();
       }}
     >
       show saved
     </button>
     <br />
     <br />
     {savedBox2.map((savedBox2) => {
       return (
         <div key={savedBox2.id}>
           <img src={savedBox2.src} />
         </div>
       );
     })}
   </>
 );
}


export default SaveHighlight;


