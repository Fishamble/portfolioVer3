import "./App.css";
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
      <HeroScreen />
      <section className="section-container">
        <KitchenManagement />
        <hr />
        <Wim />
        <hr />
        <Jpmazon />
        <hr />
        <Jsquestions />
      </section>

      <About />
      <Footer />
    </>
  );
}

export default App;
