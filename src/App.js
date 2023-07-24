import './index.css';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from './components/Footer';
// import { Router } from "react-dom";

function App() {

  return (
    <div className="wrapper w-full m-0">
      <div className="sticky top-0 z-[500]">
        <Navbar />
      </div>
      <div className='relative wrapperForParallax flex justify-center'>
        {/* <div className='absolute w-[1550px] m-0 h-[3600px] top-[0px] bg-cover bg-scroll boop-bg'></div> */}
        <div className='absolute w-[650px] h-[450px] top-[-100px] right-[-700px] md:top-[50px] md:right-[-535px] lg:top-[-420px] lg:right-[-635px] opacity-60 bg-contain bg-blend-soft-light bg-scroll bg-no-repeat blobUno'></div>
        {/* <div className='absolute w-[450px] h-[450px] top-[3750px] right-[-135px] bg-contain bg-scroll bg-no-repeat line'></div> */}
        <div className='absolute w-[250px] h-[250px] top-[-150px] left-[-200px] lg:top-[-100px] lg:left-[-435px] bg-cover bg-scroll bg-no-repeat moon'></div>
        <div className='absolute w-[250px] h-[250px] top-[850px] right-[-125px] md:top-[1050px] md:right-[-145px] lg:top-[925px] lg:right-[-245px] bg-cover bg-scroll bg-no-repeat rocket'></div>
        <div className='absolute w-[250px] h-[250px] top-[1250px] left-[-125px] md:top-[1450px] md:left-[-185px] lg:top-[1550px] lg:left-[-255px] bg-cover bg-scroll bg-no-repeat spaceman'></div>
        <div className='absolute top-[1850px] right-[-250px] md:top-[2165px] md:left-[50px] lg:top-[1665px] lg:left-[165px] bg-gradient-to-br from-grad-uno via-grad-dos to-grad-tres w-[550px] h-[450px] blobBackground blur-3xl opacity-70'></div>
        <div className='absolute w-[250px] h-[250px] top-[2350px] right-[-110px] md:top-[2670px] md:right-[-125px] lg:top-[2225px] lg:right-[-160px] bg-cover bg-scroll bg-no-repeat tele'></div>
        <div className='absolute w-[250px] h-[250px] top-[3350px] left-[-200px] md:top-[3750px] md:left-[-225px] lg:top-[3250px] lg:left-[-475px] bg-cover bg-scroll bg-no-repeat planet'></div>
        <div className='foreground'>
          <Hero />
        </div>
      </div>
      <div className='md:mt-[3620px] lg:mt-[3400px] mt-[3400px] z-[500]'>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
