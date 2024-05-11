
import { BrowserRouter } from "react-router-dom";
import {About, Contact,Navbar,Hero,Works,Team,Sessions,StarsCanvas, Experience} from "./components";
import {Robo} from "./components/canvas";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          </div>
          <div className="relative z-0">
          <About />
          <StarsCanvas/>
          </div>
          <div className="relative z-0">
          <Experience />
          <StarsCanvas/>
          </div>
          <div className="relative z-0">
          <Works />
          <StarsCanvas/>
          </div>
          <div className="relative z-0">
          <Team />
          <StarsCanvas/>
          </div>
          <Robo />
          
          <div className="relative z-0">
          <Contact />
          <StarsCanvas/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
