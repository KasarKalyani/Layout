import {proData} from '../../data/proData';


export default function handler(req,res){


   res.status(200).json(proData)
}
