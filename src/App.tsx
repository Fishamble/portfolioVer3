import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import About from "./components/aboutMe/About";
import HeroScreen from "./components/hero/HeroScreen";
import Jpmazon from "./components/jpmazon/Jpmazon";
import Jsquestions from "./components/jsQuestions/Jsquestions";
import KitchenManagement from "./components/kitchenManagement/KitchenManagement";
import Wim from "./components/wim/Wim";

import "./misc/imageOverlay.css";

function App() {
  return (
    <>
      <main>
        <HeroScreen />
        <section className="section-container">
          <KitchenManagement />
          <hr />
          <div className="other-projects-wrapper">
            <Wim />
            <hr className="wim-hr" />
            <Jpmazon />
            <hr />
            <Jsquestions />
          </div>
        </section>
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
