import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";


const {
 PopBlock,
 PageWrapper,
 Header,
 Block,
 IconWrapper,
 TitleBlock,
 PriceBlock,
} = require("../styles/proStyle");


function PopUp() {
 const [pop, setPop] = useState(false);
 const [proData, setProData] = useState([]);
 const [popInfo, setPopInfo] = useState([]);


 const blockFun = () => {
   useEffect(async () => {
     const res = await fetch("/api/proDataApiRoute");
     const data = await res.json();
     setProData(data);
   }, []);
 };


 const popFun = async (id) => {
   console.log("iidid::", id);
   const res = await fetch(`/api/${id}`);
   const data = await res.json();
   setPopInfo(data);
 };


 return (
   <>
     <Header>Special Arrivals</Header>
     <PageWrapper>
       {blockFun()}
       {proData.map((proData) => {
         return (
           <Block key={proData.id}>
             <img
               src={proData.src}
               alt="Click me to open the pop-up"
               onClick={() => {
                 popFun(proData.id);
                 setPop(true);
               }}
             />
             <TitleBlock>{proData.title}</TitleBlock>
             <PriceBlock>{proData.price}</PriceBlock>
           </Block>
         );
       })}
       {pop && (
         <PopBlock>
           <IconWrapper>
             <FaTimes
               onClick={() => {
                 setPop(false);
               }}
             />
           </IconWrapper>
           <div style={{ display: "flex", "flex-direction": "column" }}>
             <div style={{ display: "flex", "flex-direction": "row" }}>
               {popInfo.subsrc?.map((s) => {
                 return (
                   <div>
                     <img src={s.src} />
                   </div>
                 );
               })}
             </div>
             <h3>{popInfo?.title}</h3>
             <h3>{popInfo?.price}</h3>
           </div>
         </PopBlock>
       )}
     </PageWrapper>
   </>
 );
}


export default PopUp;
