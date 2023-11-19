import { useEffect, useState } from "react";
import Card from "./Card";
const { ParentWrapper, MenuBar } = require("../../styles/UI/ParentCard");


const ParentCard = () => {
 const [info, setInfo] = useState([]);


 useEffect(() => {
   const getData = async () => {
     try {
       const data = await fetch("/api/proDataApiRoute");
       if (data) {
         const res = await data.json();
         setInfo(res);
       }
     } catch (error) {
       console.log(error);
     }
   };
   getData();
 }, []);


 //let containerLayout = "";


 const [containerLayout, setContainerLayout] = useState("");
 const [layout, setLayout] = useState("");
 const [open, setOpen] = useState(false);


 const poptions = ["fullBleed", "40-60", "carousel", "nothing"];
 const coptions = ["Updown", "SideToSide", "Round"];


 return (
   <div style={{'background-image': `url('https://i.pinimg.com/564x/89/40/96/8940960435f699d285359f21a23797bf.jpg')`, 'background-size': 'cover',
   'background-repeat': 'no-repeat'}}>
     <MenuBar>
       <img
         style={{ height: "50px" }}
         src="https://template.canva.com/EAFFc6cEoX8/1/0/400w-GW1aASkHnkk.jpg"
       />


       <div
         onClick={() => {
           setOpen(!open);
         }}
       >
         parent layout
       </div>
       <div>
         {open && (
           <ul style={{ "list-style": "none" }}>
             {poptions.map((poptions, index) => {
               return (
                 <div key={index}>
                   <li
                     onClick={() => {
                       index === 0
                         ? setContainerLayout("fullBleed")
                         : index === 1
                         ? setContainerLayout("40-60")
                         : index === 2
                         ? setContainerLayout("carousel")
                         : setContainerLayout("");
                     }}
                   >
                     {poptions}
                   </li>
                 </div>
               );
             })}
           </ul>
         )}
       </div>


       <div
         onClick={() => {
           setOpen(!open);
         }}
       >
         Child layout
       </div>
       <div>
         {open && (
           <ul style={{ "list-style": "none" }}>
             {coptions.map((coptions, index) => {
               return (
                 <div key={index}>
                   <li
                     onClick={() => {
                       index === 0
                         ? setLayout("UpDown")
                         : index === 1
                         ? setLayout("SideToSide")
                         : setLayout("Round");
                     }}
                   >
                     {coptions}
                   </li>
                 </div>
               );
             })}
           </ul>
         )}
       </div>
     </MenuBar>
     <ParentWrapper containerLayout={containerLayout} layout={layout}>
       <Card info={info} containerLayout={containerLayout} layout={layout} />
     </ParentWrapper>
   </div>
 );
};


export default ParentCard;
