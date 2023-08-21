import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { RiSailboatFill } from "react-icons/ri";
import Clouds from "./Clouds";
import DevIcons from "./DevIcons";
import "./css/heroScreen.css";

export default function HeroScreen() {
  return (
    <section className="hero-wrapper">
      <Clouds />
      <div className="hero">
        <div className="name">
          <h1>
            <span>John Paul</span>
            <br />
            <span>Larkin</span>
          </h1>
          <div className="blurb">
            <p>Transforming business processes into working software solutions.</p>
            <div className="btn-contact-wrap">
              <a className="button-53"  href='mailto:johnplarkin@gmail.com'>
                Email me
              </a>
            </div>
          </div>
        </div>

        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }} className="sailing">
          Sailing the full stack.
        </motion.p>
      </div>

      <div className="sailboat-wrapper">
        <DevIcons />
        <div className="sailboat">
          <RiSailboatFill />
        </div>
        <div className="projects-arrow">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 2 } }}>
            Featured projects
            <motion.span initial={{ y: -5 }} animate={{ y: 5, transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }}>
              <FaArrowDown />
            </motion.span>
          </motion.span>
        </div>
      </div>
      <div className="decorative"></div>
    </section>
  );
}
