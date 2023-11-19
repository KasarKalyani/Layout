import { proData } from "../../data/proData";


export default function handler(req,res){
   const {proDataId} = req.query;


   const data = proData.find(proData=>proData.id===parseInt(proDataId));


   res.status(200).json(data);
}
