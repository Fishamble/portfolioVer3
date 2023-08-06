import { motion } from "framer-motion";
import JpMazon from "../../assets/images/JpMazon.webp";
import { animate, initialLeft } from "../../misc/animateValues";
import "./jpmazon.css";

// import TextScrollHighlight from "../MainProject/TextScrollHighlight";
export default function Jpmazon() {
  return (
    <motion.aside initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="other-projects-container jpmazon">
      <div className="op-description">
        <h3 className="project-heading">JPMazon</h3>
        <p>
          An amazon clone built using react. I used dummyjson.com, which provides fake product data and images through REST endpoints, to create
          responsive product pages and a basic shopping cart.
        </p>
      </div>
      <div>
        <img width="500" height="406" src={JpMazon} alt="landing page for the jpmazon project" />
      </div>
    </motion.aside>
  );
}

// <button className="highlight-btn live-btn" type="submit" formAction="https://jpmazon.netlify.app/">
// <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/jpmazonV2">
