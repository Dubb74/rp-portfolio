import img1 from "../img/logo.jpg"
import{Link} from "react-router-dom"
function Nav() {
    return(
        <nav id="nav-bar">
      
<img  className="pic1"src={img1} alt="pic"/>

    <div>
        <h1>W.Howard</h1>
    </div>
    
    <div> web Developer</div>
    <a href='About' className='nav-link'>About</a>
    <a href='Skills' className='nav-link'>Skills</a>
    

    {/* <a href='project' className='nav-link'>Project 
    </a> */}
    <Link to= "/project">
    
    projects
    </Link>
    <a href='contact' className='nav-link'>Contact
    </a>
    <a href='Linkedin' className='nav-link'><i class="fa-brands fa-linkedin"></i></a>

    <a href='github' className='nav-link'><i class="fa-brands fa-square-github"></i>
    </a>
    <a href='email' className='nav-link'><i class="fa-regular fa-envelope"></i>
    </a>
</nav>
    )

}
 export default Nav;    

