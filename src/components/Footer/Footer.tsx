import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./footer.css";

import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";

export default function Footer() {
  const quotes = [
    [["Details make perfection, and perfection is not a detail."], ["- Leonardo Da Vinci"]],
    [["Live as if you were to die tomorrow. Learn as if you were to live forever."], ["- Mahatma Gandhi"]],
    [["It does not matter how slowly you go as long as you do not stop."], ["- Confucius"]],
    [["It always seems impossible until it's done."], ["- Nelson Mandela"]],
    [["Perseverance is not a long race; it is many short races one after the other."], ["- Walter Elliot"]],
    [["Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."], ["- Samuel Beckett"]],
  ];

  const QuoteDisplay = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setQuoteIndex(() => {
          if (quoteIndex === quotes.length - 1) return 0;
          else return quoteIndex + 1;
        });
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }, [quoteIndex]);

    const quote = { animate: { transition: { staggerChildren: 2 } } };
    const author = { initial: { opacity: 0.5 }, animate: { opacity: 1, transition: { duration: 3 } } };
    const author2 = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 3 } } };

    return (
      <div className="quote-wrapper" key={quoteIndex}>
        <motion.div className="quote" initial="initial" animate="animate" variants={quote}>
          <motion.p variants={author}>{quotes[quoteIndex][0]}</motion.p>
          <motion.p className="author" variants={author2}>
            {quotes[quoteIndex][1]}
          </motion.p>
        </motion.div>
      </div>
    );
  };

  return (
    <footer className="footer">
      <QuoteDisplay />

      <ul className="icons">
        <li>
          <a href="https://github.com/Fishamble" aria-label="Github link">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Fishamble1" aria-label="Twitter link">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="mailto:johnplarkin@gmail.com" aria-label="Email address link">
            <FaEnvelope />
          </a>
        </li>
      </ul>

      <p className="hand-crafted">
        Handcrafted by JP
        <div className="digger">
          <FaPersonDigging />
        </div>
        in twentytwentythree
      </p>
    </footer>
  );
}
