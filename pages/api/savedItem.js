import {SavedItemsData} from '../data/SavedItemsData';


export default function handler(req,res){


   if(req.method==='POST'){
       const newEntry={
           id: req.body.id,
           src: req.body.src
       }
       SavedItemsData.push(newEntry);
       res.status(201).json(newEntry);
   }
   else if(req.method==='GET'){
       res.status(200).json(SavedItemsData);
   }
}
