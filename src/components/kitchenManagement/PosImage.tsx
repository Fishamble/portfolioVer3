import { motion } from "framer-motion";
import posMove from "../../assets/images/posMove.webp";
import { animate, initialRight } from "../../misc/animateValues";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import "./css/posImage.css";

export default function PosImage() {
  return (
    <motion.div initial={initialRight} whileInView={animate} viewport={{ once: true }} className="pos-container">
      <div className="img-btn-wrapper">
        <img width="412" height="912" src={posMove} className="pos-image" alt="animated image of the point of sale app in action" />
        <div className="links-wrapper">
          <a href="https://kitchenpos.netlify.app/" className="link" aria-label="link to live version of point of sale app">
            <FaArrowUpRightFromSquare />
          </a>

          <a href="https://github.com/Fishamble/kitchenpos" className="link" aria-label="link to github of POS project">
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
