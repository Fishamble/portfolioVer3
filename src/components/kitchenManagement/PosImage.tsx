import { motion } from "framer-motion";
import posMove from "../../assets/images/posMove.webp";
import { animate, initialRight } from "../../misc/animateValues";

import "./css/posImage.css";

export default function PosImage() {
  return (
    <motion.div initial={initialRight} whileInView={animate} viewport={{ once: true }} className="pos-container">
      <div className="img-btn-wrapper">
        <div className="img-container">
          <img width="412" height="912" src={posMove} className="pos-image" alt="animated image of the point of sale app in action" />
        </div>
      </div>
    </motion.div>
  );
}
