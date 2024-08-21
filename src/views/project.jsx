import pic from "./img2/landing page.jpg"
import pic1 from "./img2/portfolio.jpg"
import pic2 from "./img2/profile.jpg"
import pic3 from "./img2/survey copy.jpg"
import pic4 from "./img2/technical.jpg"
import pic5 from "./img2/tribute.jpg"


const Project = () => {
  return (
    <>
      <section id="projects">
        <div className="project-tile">
          <h1 style={{ marginLeft: "40%" }}>
            <u>These are some of my projects</u>
          </h1>
          <a href="http://www.w3schools.com" target="_blank" />
        </div>
      </section>
      <br />
      <section id="prof">
        <div className="img5">
          <img src={pic} alt="" class="picsiz" />
          <img src={pic1}alt="" class="picsiz" />
          <img src={pic2} alt="" class="picsiz" />
        </div>
        <div className="img5">
          <img src={pic3} alt="" class="picsiz" />
          <img src={pic4} alt="" class="picsiz" />
          <img
            src={pic5}
            alt=""
            class="
       picsiz"
          />
        </div>
      </section>
    </>
  );
};
export default Project