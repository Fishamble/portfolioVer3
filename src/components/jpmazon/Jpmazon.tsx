import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import JpMazon from "../../assets/images/JpMazon.webp";
import { animate, initialLeft } from "../../misc/animateValues";
import "./jpmazon.css";

// import TextScrollHighlight from "../MainProject/TextScrollHighlight";
export default function Jpmazon() {
  return (
    <motion.section initial={initialLeft} whileInView={animate} viewport={{ once: true }} className="other-projects-container jpmazon">
      <h2>JPMazon</h2>
      <div className="op-flex-wrap">
        <div className="op-description-wrapper">
          <p>
            This amazon clone was my first React project. I learned the fundamentals of building dynamic user interfaces using React components,
            state, and props.
          </p>
          <p>
            I used dummyjson.com, which provides fake product data and images through REST endpoints, to create responsive product pages and a basic
            shopping cart.
          </p>

          <div className="link-icons-wrapper">
            <div>
              <a
                href="https://jpmazon.netlify.app/"
                className="op-link-icon"
                target="_blank"
                aria-label="link to live version of point of jpmazon app"
              >
                <FaArrowUpRightFromSquare />
              </a>
              <a
                href="https://github.com/Fishamble/jpmazonV2"
                className="op-link-icon"
                target="_blank"
                aria-label="link to github of jpmazon project"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="op-img-wrapper">
          <img width="500" height="406" src={JpMazon} alt="landing page for the jpmazon project" />
        </div>
      </div>
    </motion.section>
  );
}
