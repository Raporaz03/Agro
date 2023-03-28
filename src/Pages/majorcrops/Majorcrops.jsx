import "./majorcrops.css";
import Crop from "../../Components/crop/Crop";
import {crops} from "../../dummyData";
export default function Majorcrops() {
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
