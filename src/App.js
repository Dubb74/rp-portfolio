
import './App.css';
import img1 from "./img/logo.jpg"
function App() {
  return (
   <>
    <div id="nav">
      
    <img  className="pic1"src={img1} alt="pic"/>
    
        <div>
            <h1>W.Howard</h1>
        </div>
        
        <div> web Developer</div>
        <a href='About' className='nav-link'>About</a>
        <a href='Skills' className='nav-link'>Skills</a>
        
   
        <a href='project' className='nav-link'>Project 
        </a>
        <a href='contact' className='nav-link'>Contact
        </a>
        <a href='Linkedin' className='nav-link'><i class="fa-brands fa-linkedin"></i></a>

        <a href='github' className='nav-link'><i class="fa-brands fa-square-github"></i>
        </a>
        <a href='email' className='nav-link'><i class="fa-regular fa-envelope"></i>
        </a>
 </div>

   </>
  );
}

export default App;
