import "./App.css";
import Navbar from "./components/Navbar";
import Header1 from "./components/Header1";
import FirstShadowHeading from "./components/FirstShadowHeading";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Slider5 from "./components/Slider5";
import SecondShadowHeading from "./components/SecondShadowHeading";
import OlympicExperience from "./components/OlympicExperience";
import ThirdShadowHeading from "./components/ThirdShadowHeading";
import Questions from "./components/Questions";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wholeWebsite">
        <Navbar />
        <Header1 />
        <FirstShadowHeading />
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <SecondShadowHeading />
        <OlympicExperience />
        <Slider4 />
        <ThirdShadowHeading heading="Meet the hosts" />
        <Slider5 />
        <Booking />
        <ThirdShadowHeading heading="Frequently asked questions" />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default App;
