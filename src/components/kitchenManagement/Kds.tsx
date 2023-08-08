import { motion } from "framer-motion";
import kitchenDisplay from "../../assets/images/kitchenDisplay.webp";
import { animate, initialLeft } from "../../misc/animateValues";

import "./css/kitchenDisplayImage.css";

export default function KitchenDisplayImage() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="kitchen-display-container">
      <div className="img-btn-wrapper">
        <div className="img-container">
          <img width="500" height="253" src={kitchenDisplay} alt="kitchen display system screenshot, with five orders open on screen" />
        </div>
      </div>
    </motion.div>
  );
}
