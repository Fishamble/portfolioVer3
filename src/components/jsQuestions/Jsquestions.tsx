import { motion } from "framer-motion";
import jsQuestions from "../../assets/images/questionsApp.webp";
import { animate, initialRight } from "../../misc/animateValues";

export default function Jsquestions() {
  return (
    <motion.aside initial={initialRight} whileInView={animate} viewport={{ once: true }} className="other-projects-container jsquestions">
      <div className="op-description">
        <h3>Coding questions</h3>
        <p>
          An app for testing coding related questions. I used react for the front end and firestore for the back. Aloing the way I implemented the
          react context API for state management and the intersection observer API for infinite scrolling.
        </p>
      </div>
      <div>
        <img width="500" height="406" src={jsQuestions} alt="landing page for the coding questions app" />
      </div>
    </motion.aside>
  );
}

// <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/QuestionApp">
// <button className="highlight-btn live-btn" type="submit" formAction="https://jsqapp.netlify.app/">
