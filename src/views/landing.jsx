import img2 from "../img/backgroundimg.jpg";
import img3 from "../img/css (1).png";
import img4 from "../img/html (1).png";
import img5 from "../img/javascript (1).png";
import img6 from "../img/mongo (1).png";
import img7 from "../img/node (1).png";
import img8 from "../img/react (1) (1).png";
import img9 from "../img/boostrap.svg";
import img10 from "../img/android.svg";
import Nav from "./Nav"
function Landing() {
  return (
    <>
    <Nav/>
      <div className="mainBox">
        <div className="about">
          <h1 className="sayFlex">About</h1>
          <p className="ptag">
            I am a full stack junior software developer.I Graduated from
            Persevere coding camp.I have worked on JavaScript react projects.I
            am currently working on learning Tailwind.
          </p>
        </div>

        <div className="skills">
          <h1 className="sayFlex">Skills</h1>
          <div className="img22">
            <img className="pic2" src={img3} alt="pic" />
            <img className="pic2" src={img4} alt="pic" />
            <img className="pic2" src={img5} alt="pic" />
            <img className="pic2" src={img6} alt="pic" />
            <img className="pic2" src={img7} alt="pic" />
            <img className="pic2" src={img8} alt="pic" />
            <img className="pic2" src={img9} alt="pic" />
            <img className="pic2" src={img10} alt="pic" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
