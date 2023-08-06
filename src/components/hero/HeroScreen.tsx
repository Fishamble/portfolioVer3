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
            John Paul <br />
            Larkin
          </h1>
          <p>Sailing the full stack.</p>
        </div>
        <div className="blurb-wrapper">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 1, ease: "easeOut" } }}>
            Im excited by the idea of transforming business processes into working software solutions.
          </motion.div>
        </div>
      </div>
      
      <div className="sailboat-wrapper">
        <DevIcons />
        <div className="sailboat">
          <RiSailboatFill />
        </div>
        <div className="projects-arrow">
          <motion.span initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:2}}}>
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
