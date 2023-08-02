import KitchenDisplayImage from "./Kds";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import YouTube from "./YouTube";

import "./css/km-grid.css";

export default function KitchenManagement() {
  return (
    <div className="kitchen-man">
      <PosDescription />
      <PosImage />
      <KitchenDisplayImage />
      <YouTube />
    </div>
  );
}
