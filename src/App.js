import './index.css';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
// import { Router } from "react-dom";

function App() {
  return (
    <div className="wrapper w-full m-0">
      <div className="sticky top-0 z-[500]">
        <Navbar />
      </div>
      <div className='relative wrapperForParallax flex justify-center'>
        <div className='absolute w-[1550px] h-[3200px] top-[0px] bg-cover bg-scroll boop-bg'></div>
        <div className='absolute w-[250px] h-[250px] top-[-200px] left-[-435px] bg-cover bg-scroll bg-no-repeat moon'></div>
        <div className='absolute w-[250px] h-[250px] top-[725px] right-[-245px] bg-cover bg-scroll bg-no-repeat rocket'></div>
        <div className='absolute w-[250px] h-[250px] top-[1150px] left-[-255px] bg-cover bg-scroll bg-no-repeat spaceman'></div>
        <div className='absolute w-[250px] h-[250px] top-[1925px] right-[-160px] bg-cover bg-scroll bg-no-repeat tele'></div>
        <div className='absolute w-[250px] h-[250px] top-[2450px] left-[-475px] bg-cover bg-scroll bg-no-repeat planet'></div>
        <div className='foreground'>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
