import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Approch from "./Component/Development/Approch";
import Patrons from "./Component/Development/Patrons";
import Strategy from "./Component/Development/Starategy";
import Donate from "./Component/Donate/Donate";
import Payment from "./Component/Donate/Payment";
import Home from "./Component/Home";
import Goal from "./Component/Mission/Goal";
import Learnmore from "./Component/Mission/Learnmore";
import Objective from "./Component/Mission/Objective";
import Vision from "./Component/Mission/Vision";
import Economic from "./Component/Program/Economic";
import Enviroment from "./Component/Program/Enviroment";
import Health from "./Component/Program/Health";
import Training from "./Component/Program/Training";
import Commite from "./Component/We Do/Commite";
import Financee from "./Component/We Do/Financee";
import Legal from "./Component/We Do/Legal";
import Transport from "./Component/We Do/Transport";
import WorkingArea from "./Component/We Do/WorkingArea";
import WorkingTeam from "./Component/We Do/WorkingTeam";

export default function App() {
  return ( <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />}>
    
  </Route>
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="aproch" element={<Approch />} />
  <Route path="patrons" element={<Patrons />} />
  <Route path="finance" element={<Financee />} />
  <Route path="commiti" element={<Commite />} />
  <Route path="legal" element={<Legal />} />
  <Route path="transport" element={<Transport />} />
  <Route path="strategy" element={<Strategy />} />
  <Route path="team" element={<WorkingTeam />} />
  <Route path="area" element={<WorkingArea />} />
  <Route path="training" element={<Training />} />
  <Route path="health" element={<Health />} />
  <Route path="enviroment" element={<Enviroment />} />
  <Route path="economic" element={<Economic />} />
  <Route path="donate" element={<Donate />} />
  <Route path="payment" element={<Payment />} />
  <Route path="goal" element={<Goal />} />
  <Route path="vision" element={<Vision />} />
  <Route path="objective" element={<Objective />} />
  <Route path="learnmore" element={<Learnmore />} />
</Routes>
  </BrowserRouter>
    
  );
}