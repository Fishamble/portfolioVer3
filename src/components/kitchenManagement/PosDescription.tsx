import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { animate, initialLeft } from "../../misc/animateValues";
import annoyedCustomer from "./../../assets/images/annoyedCustomer.jpg";
import "./css/posDescription.css";

export default function PosDescription() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="pos-description-container">
      <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="description">
        <div className="waiter-img-wrapper">
          <p className="sml-question">What's taking so long?</p>
          <img
            width="640"
            height="427"
            src={annoyedCustomer}
            className="waiter-img"
            alt="waiter standing over annoyed customer, both gesturing towards food"
          />
        </div>

        <div className="img-text-container">
          <p className="lrg-question">
            What's taking so <span>long?</span>
          </p>
          <div className="inner-text">
            <p>In a busy restaurant kitchen, speed and efficiency are the key to success.</p>
            <p>
              These apps facilitate communication and clarity.
              {/* <br /> Faster service, happier customers. */}
            </p>
            <div className="learn-button-wrapper">
            <a href="https://kitchenpos.netlify.app/" className="link" aria-label="link to live version of point of sale app">
              <FaArrowUpRightFromSquare />
            </a>
            <a href="https://github.com/Fishamble/kitchenpos" className="link" aria-label="link to github of POS project">
              <FaGithub />


            </a>
           

            <a href="https://kitchendisplay.netlify.app/" className="link" aria-label="link to live version of kitchen display app">
              <FaArrowUpRightFromSquare />
            </a>

              <motion.button className="learn-button" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}>
                Learn more
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
