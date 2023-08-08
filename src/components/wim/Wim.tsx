import { motion } from "framer-motion";
import { animate, initialLeft } from "../../misc/animateValues";

import stockTake from "../../assets/images/stockTake.webp";
import wim from "../../assets/images/wim.webp";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import "./otherProjects.css";
import "./wim.css";

export default function Wim() {
  return (
    <>
      <h2 className="wh-heading">Warehouse inventory</h2>
      <motion.aside initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="wim">
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

        <div className="text">
          <p> Stock taking is an essential undertaking for any profitable business.</p>
          <p className="text-inner-1">This app aims to simplify the process.</p>
          <p className="text-inner-2">
            This app allows for the monitoring of individual inventory items. Users input sales and purchases and stock levels are automatically
            adjusted as orders are placed, picked and delivered.
          </p>

          <p className="text-inner-3">
            My objectives for this project were to build a Node.js API that integrated with a MySQL database, and ultimately deploy it to a Linux
            server.
          </p>
          <div className="learn-more-wrapper">
            <a href="https://wim-front-end.netlify.app/" className="op-link-icon" aria-label="link to live version of warehouse inventory app">
              <FaArrowUpRightFromSquare />
            </a>
            <a href="https://github.com/Fishamble/wim" className="op-link-icon" aria-label="link to github of warehouse inventory project">
              <FaGithub />
            </a>
            <motion.button className="learn-button" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}>
              Learn more
            </motion.button>
          </div>
        </div>

      
        <div className="wim-image-wrapper">
          <img className="wim-image" width="500" height="406" src={wim} alt="landing page for the wim project" />
        </div>
        <div className="stock-img-wrapper">
          <img className="stock-img" width="640" height="427" src={stockTake} alt="men with clipboard counting stock" />
        </div>
      </motion.aside>
    </>
  );
}
