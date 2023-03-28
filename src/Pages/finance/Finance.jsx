import FinanceBox from "../../Components/financeBox/FinanceBox";
import "./finance.css";
import {finance} from "../../dummyData";
export default function Finance() {
  return (
    <div className="financeWrapper row p-4">
      {finance.map(f=>{
        return <div className="col"><FinanceBox key={f._id} schemes={f}/></div>;
      })}
    </div>
  )
}
