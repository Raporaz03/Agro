import "./majorcrops.css";
import Crop from "../../Components/crop/Crop";

export default function Majorcrops() {
  return (
    <div className="majorcropsWrapper">
      <div classname="col">
        <div classname="row-sm">
          <Crop/>
          </div>
        <div classname="row-sm">
          <Crop />
        </div>
        </div>
        <div classname="col">
        <div classname="row-sm">
          <Crop />
        </div>
        <div classname="row-sm">
          <Crop />
        </div>
      </div>
    </div>
  );
}
