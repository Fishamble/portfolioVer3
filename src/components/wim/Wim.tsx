import { motion } from "framer-motion";
import { animate, initialLeft } from "../../misc/animateValues";

import stockTake from "../../assets/images/stockTake.webp";
import wim from "../../assets/images/wim.webp";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import "./otherProjects.css";
import "./wim.css";

export default function Wim() {
  return (
    <motion.aside initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="other-projects-container wim">
      <div className="background"></div>
      <div className="quote-wrapper">
        <blockquote className="quote-box">
          <p className="quotation-mark">“</p>
          <p className="quote-text">If you can't measure it, you can't manage it.</p>
          <hr />
          <div>
            <p className="peter-name">Peter Drucker</p>
          </div>
        </blockquote>
      </div>

      <div className="text-1">
        <p> Stock taking is an essential undertaking for any profitable business.</p>
        <p>This app helps simplify the process.</p>
        <div className="learn-more-wrapper">
          <motion.button className="learn-button" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}>
            Learn more
          </motion.button>
        </div>
      </div>

      <div className="wim-image-wrapper img-btn-wrapper">
        <div className="wim-inner-img-wrapper">
          <img className="wim-image" width="500" height="406" src={wim} alt="landing page for the wim project" />
          <div className="links-wrapper">
            <a href="https://wim-front-end.netlify.app/" className="link" aria-label="link to live version of warehouse inventory app">
              <FaArrowUpRightFromSquare />
            </a>
            <a href="https://github.com/Fishamble/wim" className="link" aria-label="link to github of warehouse inventory project">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="stock-img-wrapper">
        <img className="stock-img" width="640" height="427" src={stockTake} alt="men with clipboard counting stock" />
      </div>
    </motion.aside>
  );
}
