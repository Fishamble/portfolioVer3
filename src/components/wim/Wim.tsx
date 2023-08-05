import { motion } from "framer-motion";
import { animate, initialLeft } from "../../misc/animateValues";

import wim from "../../assets/images/wim.webp";
import wim2 from "../../assets/images/wim2.webp";

import "./otherProjects.css";
import "./wim.css";

export default function Wim() {
  return (
    <motion.aside initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="other-projects-container wim">
      <div className="op-description">
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

        <div className="additional-text">
          <p>An app for tracking stock on hand. An essential undertaking for any profitable business</p>
        </div>

        <div className="learn-button-wrapper">
          <motion.button className="learn-button" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}>
            Learn more
          </motion.button>
        </div>
      </div>

      <div className="project-img-wrapper img-btn-container">
        <img width="500" height="406" src={wim} alt="landing page for the wim project" />
        <img width="500" height="406" src={wim2} alt="landing page for the wim project" />
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

// <div className="overlay"></div>
// <div className="overlay-text">
//   <h4>WIM</h4>
//   <p>A tool for logging and tracking stock levels</p>
// </div>
// <div className="btn-island">
//   <form name="gitWim" target="_blank">
//     <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/wim">
//       GitHub
//     </button>
//   </form>
//   <form name="liveWim" target="_blank">
//     <button className="highlight-btn live-btn" type="submit" formAction="https://wim-front-end.netlify.app/">
//       Live
//     </button>
//   </form>
// </div>
