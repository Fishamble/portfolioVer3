import { motion } from "framer-motion";
import { animate, initialLeft } from "../../misc/animateValues";
import annoyedCustomer from "./../../assets/images/annoyedCustomer.jpg";
import "./css/posDescription.css";

export default function PosDescription() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="description-container">
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
              These apps facilitate communication.
              <br /> Happy customers, happy staff.
            </p>
            <div className="learn-button-wrapper">
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
