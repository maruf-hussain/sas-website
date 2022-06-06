
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
import Approch from './Component/Development/Approch';
import Patrons from './Component/Development/Patrons';
import Strategy from './Component/Development/Starategy';
import Donate from './Component/Donate/Donate';
import Goal from './Component/Mission/Goal';
import Learnmore from './Component/Mission/Learnmore';
import Objective from './Component/Mission/Objective';
import Vision from './Component/Mission/Vision';
import Economic from './Component/Program/Economic';
import Enviroment from './Component/Program/Enviroment';
import Health from './Component/Program/Health';
import Training from './Component/Program/Training';
import Finance from './Component/Who We Are/Finance';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Routes>
     <Route path="donate" element={<Donate />} />
     </Routes>
     <Routes>
     <Route path="contact" element={<Contact />} />
     </Routes>
     <Routes>
     <Route path="approch" element={<Approch />} />
     </Routes>
     <Routes>
     <Route path="patrons" element={<Patrons />} />
     </Routes>
     <Routes>
     <Route path="strategy" element={<Strategy />} />
     </Routes>
     <Routes>
     <Route path="finance" element={<Finance />} />
     </Routes>
     <Routes>
     <Route path="health" element={<Health />} />
     </Routes>
     <Routes>
     <Route path="economic" element={<Economic />} />
     </Routes>
     <Routes>
     <Route path="enviroment" element={<Enviroment />} />
     </Routes>
     <Routes>
     <Route path="training" element={<Training />} />
     </Routes>
     <Routes>
     <Route path="learnmore" element={<Learnmore />} />
     </Routes>
     <Routes>
     <Route path="vision" element={<Vision />} />
     </Routes>
     <Routes>
     <Route path="objective" element={<Objective />} />
     </Routes>
     <Routes>
     <Route path="goal" element={<Goal />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
