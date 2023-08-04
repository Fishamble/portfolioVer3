import { motion } from "framer-motion";
import posMove from "../../assets/images/posMove.webp";
import { animate, initialRight } from "../../misc/animateValues";

import "./css/posImage.css";

export default function PosImage() {
  return (
    <motion.div initial={initialRight} whileInView={animate} viewport={{ once: true }} className="pos-container">
      <div className="img-btn-container">
        <img width="412" height="912" src={posMove} className="pos-image" alt="animated image of the point of sale app in action" />

        <div className="overlay"></div>
        <div className="overlay-text">
          <h4>POS App</h4>
          <p>this app is the point of sale</p>
        </div>

        <div className="btn-island">
          <form name="gitPos" target="_blank">
            <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/kitchenpos">
              GitHub
            </button>
          </form>
          <form name="livePos" target="_blank">
            <button className="highlight-btn live-btn" type="submit" formAction="https://kitchenpos.netlify.app/">
              Live
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
