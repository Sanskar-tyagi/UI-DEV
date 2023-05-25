import "./App.css";
import CTA from "./components/CTA";
import CTAA from "./components/CTAA";
import Hero from "./components/Hero";
import Meet from "./components/Meet";
import Slider from "./components/Slider";
import Milestones from "./components/TimeLine";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <CTA></CTA>
      <Slider></Slider>
      <Meet></Meet>
      <Milestones></Milestones>
      <CTAA></CTAA>
    </>
  );
}

export default App;
