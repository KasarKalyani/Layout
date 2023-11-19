import { useEffect, useState } from "react";


function fetchSaved() {
 const [name, setName] = useState("");
 const [getSaved, setGetSaved] = useState();


const Get=async()=>{




   const data = await fetch(`/api/SaveFunctionality/${name}`);
   const res= await data.json();
   setGetSaved(res);
   console.log("res",res)


}


 return (
   <>
     <input
         value={name}
         onChange={(e) => {
           setName(e.target.value);
         }}
       />
       <button onClick={()=>{Get()}}>Checked your saved</button>
     {getSaved && (<img src={getSaved.imgsrc}/>)}
   </>


 );
}


export default fetchSaved;
