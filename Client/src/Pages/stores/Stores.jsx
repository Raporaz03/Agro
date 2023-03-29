import "./stores.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../../Components/product/Product";
export default function Stores() {

  const [stores, setStores] = useState([]);
  const host = process.env.REACT_APP_HOST;
  useEffect(()=>{
    const fetchStores = async()=>{
      try{
        const res = await axios.get(`${host}/stores`);
        setStores(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchStores();
  }, [])

  return (
    <div className="storesWrapper row">
      <h2>Agricultural Products Store</h2>
      {stores.map(s=>{
        return <div className="col mb-4"><Product key={s._id} features={s}/></div>;
      })}
    </div>
  )
}
