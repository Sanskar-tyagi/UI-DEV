import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import CTAA from "./components/CTAA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Meet from "./components/Meet";
import Privacy from "./components/Privacy";
import Slider from "./components/Slider";
import Milestones from "./components/TimeLine";
import Vacancy from "./components/Vacancy";
import VerticalLine from "./components/VerticalLine";
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
      <VerticalLine></VerticalLine>
      <Privacy></Privacy>
      <About></About>
      <Vacancy></Vacancy>
      <Footer></Footer>
    </>
  );
}

export default App;
