import KitchenDisplayImage from "./Kds";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import YouTube from "./YouTube";

import "./css/km-grid.css";

export default function KitchenManagement() {
  return (
    <>
      <h2 id="kitchen-man">Kitchen Management</h2>
      <div className="kitchen-man" >
        <PosDescription />
        <PosImage />
        <KitchenDisplayImage />
        <YouTube />
      </div>
    </>
  );
}
