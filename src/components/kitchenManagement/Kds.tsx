import { motion } from "framer-motion";
import kitchenDisplay from "../../assets/images/kitchenDisplay.webp";
import { animate, initialLeft } from "../../misc/animateValues";

import "./css/kitchenDisplayImage.css";

export default function KitchenDisplayImage() {
  return (
    <motion.div initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="kitchen-display-container img-btn-container">
      <div>
        <img width="500" height="253" src={kitchenDisplay} alt="kitchen display system screenshot, with five orders open on screen" />
        <div className="overlay">
          <div className="overlay-text">
            <h4>Kitchen display system</h4>
            <p>This app is heads up display in the kitchen</p>
            <p>Orders are displayed from left to right</p>
            <p>Note - requires you run the pos app first</p>
          </div>
        </div>

        <div className='btn-island'>
          <form name="gitKd" target="_blank">
            <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/kitchen_back_end">
              GitHub
            </button>
          </form>
          <form name="liveKd" target="_blank">
            <button className="highlight-btn live-btn" type="submit" formAction="https://kitchendisplay.netlify.app/">
              Live
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
