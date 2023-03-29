import FinanceBox from "../../Components/financeBox/FinanceBox";
import "./finance.css";
import { useEffect, useState } from "react";
import axios from 'axios'
export default function Finance() {
  const [finance, setFinances] = useState([]);
  const host = process.env.REACT_APP_HOST;
  useEffect(()=>{
    const fetchFinances = async()=>{
      try{
        const res = await axios.get(`${host}/finance`);
        setFinances(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchFinances();
  }, [])

  return (
    <div className="financeWrapper row p-4">
      {finance.map(f=>{
        return <div className="col"><FinanceBox key={f._id} schemes={f}/></div>;
      })}
    </div>
  )
}
