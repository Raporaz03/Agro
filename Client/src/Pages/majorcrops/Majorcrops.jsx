import "./majorcrops.css";
import Crop from "../../Components/crop/Crop";
import { useEffect, useState } from "react";
import axios from 'axios';
export default function Majorcrops() {

  const [crops, setCrops] = useState([]);
  const host = process.env.REACT_APP_HOST;
  useEffect(()=>{
    const fetchCrops = async()=>{
      try{
        const res = await axios.get(`${host}/crops`);
        setCrops(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchCrops();
  }, [])

  return (
    <div className="majorcropsWrapper ml-2 px-4 mb-4">
      <div className="majorcropsWrapperCon row">
        {crops.map(c=>{
          return <div className="col mt-4"><Crop crop={c} /></div>
        })}
      </div>
    </div>
  );
}
