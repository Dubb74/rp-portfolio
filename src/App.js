import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import img1 from "./img/logo.jpg"
import Nav from './views/Nav';
import Landing from './views/landing';
import Project from "./views/project";
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
    </Routes>

   </BrowserRouter>
   
 

    
   </>
  );
}

export default App;
