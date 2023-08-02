import { motion } from "framer-motion";
import "./css/devIcons.css";

export default function DevIcons() {
  return (
    <ul className="dev-icons">
      <li>
        <i className="devicon-html5-plain "></i>
        <span>HTML</span>
      </li>
      <li>
        <i className="devicon-css3-plain "></i>
        <span>CSS</span>
      </li>
      <li>
        <i className="devicon-vscode-plain "></i>
        <span>VSCode</span>
      </li>

      <li>
        <i className="devicon-javascript-plain"></i>
        <span>Javascript</span>
      </li>
      <li>
        <i className="devicon-redux-original "></i>
        <span>Redux</span>
      </li>
      <li>
        <i className="devicon-firebase-plain "></i>
        <span>Firebase</span>
      </li>
      <li>
        <i className="devicon-react-original "></i>
        <span>React</span>
      </li>
      <li>
        <motion.i initial={{y:0}} animate={{y:'-2rem', transition:{duration:2,delay:1,repeat: Infinity, repeatType: "reverse"}}} className="devicon-mysql-plain "></motion.i>
        <span>MySQL</span>
      </li>
      <li>
        <i className="devicon-typescript-plain "></i>
        <span>Typescript</span>
      </li>
      <li>
        <i className="devicon-nodejs-plain "></i>
        <span>Node</span>
      </li>
      <li>
        <i className="devicon-github-original "></i>
        <span>Github</span>
      </li>
      <li>
        <i className="devicon-git-plain "></i>
        <span>Git</span>
      </li>
    </ul>
  );
}
