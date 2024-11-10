import React from "react";
import Profile from "./components/info";
import NavBar from "./components/navBar";
import About from "./components/about";
import Resume from "./components/resume";
import AnimationEffect from "./components/AnimationEffect";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <AnimationEffect />

      <NavBar />
      <Profile />
      <About />
      <Resume />
      <Contact />
      <Footer/>
    </>
  );
}
export default App;
