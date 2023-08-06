import { motion } from "framer-motion";
import kitchenDisplay from "../../assets/images/kitchenDisplay.webp";
import { animate, initialLeft } from "../../misc/animateValues";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import "./css/kitchenDisplayImage.css";

export default function KitchenDisplayImage() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="kitchen-display-container">
      <div className="img-btn-wrapper">
        <img width="500" height="253" src={kitchenDisplay} alt="kitchen display system screenshot, with five orders open on screen" />
        <div className="links-wrapper">
          <a href="https://kitchendisplay.netlify.app/" className="link" aria-label='link to live version of kitchen display app'>
            <FaArrowUpRightFromSquare />
          </a>

          <a href="https://github.com/Fishamble/kitchen_back_end" className="link" aria-label='link to github of kitchen display project'>
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
