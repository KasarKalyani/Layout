import { SavedItemsData } from "../../data/SavedItemsData";


export default function handler(req,res){
     const {name} = req.query;


     const getName = SavedItemsData.find(SavedItemsData=>SavedItemsData.name===name);
     res.status(200).json(getName);
}
