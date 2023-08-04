import { motion } from "framer-motion";
import { animate, initialLeft } from "../../misc/animateValues";

import wim from "../../assets/images/wim.webp";
import "./otherProjects.css";
import "./wim.css";

export default function Wim() {
  return (
    <motion.aside initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="other-projects-container wim">
      {/* <div className="op-description">
        <p>If you can't measure it, you can't manage it.” Peter Drucker.</p>
      </div> */}

      <div>
        <blockquote className="quote-box">
          <p className="quotation-mark">“</p>
          <p className="quote-text">If you can't measure it, you can't manage it.</p>
          <hr />
          <div>
            <p className="peter-name">Peter Drucker</p>
          </div>
        </blockquote>
      </div>

      <div className="project-img-wrapper img-btn-container">
        <img width="500" height="406" src={wim} alt="landing page for the wim project" />

        <div className="overlay"></div>
        <div className="overlay-text">
          <h4>WIM</h4>
          <p>A tool for logging and tracking stock levels</p>
        </div>
        <div className="btn-island">
          <form name="gitWim" target="_blank">
            <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/wim">
              GitHub
            </button>
          </form>
          <form name="liveWim" target="_blank">
            <button className="highlight-btn live-btn" type="submit" formAction="https://wim-front-end.netlify.app/">
              Live
            </button>
          </form>
        </div>
      </div>
    </motion.aside>
  );
}

{
  /* <h3>WIM</h3> */
}
{
  /* <p>WIM is an inventory tool, which allows for the tracking of sales, purchases and realtime stock levels for products.</p> */
}
{
  /* <p>The front end is built using react, typescript and react-table and is hosted on netlify.</p> */
}
{
  /* <p>The back end utilises Node/Express.js and a mySQL relational database and is hosted on a digital ocean VPS. </p> */
}
