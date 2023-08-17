import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import jsQuestions from "../../assets/images/questionsApp.webp";
import { animate, initialRight } from "../../misc/animateValues";
import "./jsQuestions.css";

export default function Jsquestions() {
  return (
    <motion.aside initial={initialRight} whileInView={animate} viewport={{ once: true }} className="other-projects-container js-questions">
      <h2>Coding questions</h2>
      <div className="op-flex-wrap">
        <div className="op-description-wrapper">
          <p>
            I built this app to test my coding knowledge. I expanded my understanding of React, implementing the React context API for state
            management and the intersection observer API for infinite scrolling.
          </p>
          <p>I opted for Firestore for the backend due to its user-friendly nature and efficient real-time synchronization.</p>

          <div className="link-icons-wrapper">
            <div>
              <a
                href="https://jsqapp.netlify.app/"
                className="op-link-icon"
                target="_blank"
                aria-label="link to live version of point of js questions app"
              >
                <FaArrowUpRightFromSquare />
              </a>

              <a
                href="https://github.com/Fishamble/QuestionApp"
                className="op-link-icon"
                target="_blank"
                aria-label="link to github of js questions project"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="op-img-wrapper">
          <img width="500" height="406" src={jsQuestions} alt="landing page for the coding questions app" />
        </div>
      </div>
    </motion.aside>
  );
}

// <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/QuestionApp">
// <button className="highlight-btn live-btn" type="submit" formAction="https://jsqapp.netlify.app/">
