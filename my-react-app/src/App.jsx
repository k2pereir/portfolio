import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {About} from './Pages/About.jsx';
import {Education} from './Pages/Education.jsx';
import {Career} from './Pages/Career.jsx';
import {Projects} from './Pages/Projects.jsx';

function App() {
  return(
   <Router>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
   </Router>

  ); 
}

export default App
