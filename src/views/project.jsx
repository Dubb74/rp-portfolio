import pic from "./img2/landing page.jpg"
import pic1 from "./img2/portfolio.jpg"
import pic2 from "./img2/profile.jpg"
import pic3 from "./img2/survey copy.jpg"
import pic4 from "./img2/technical.jpg"
import pic5 from "./img2/tribute.jpg"
import { useState,useRef } from "react"
import emailjs from "@emailjs/browser";

const Project = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_u9t1y9p", "template_g4k4z9a", form.current, {
        publicKey: "MO0meLyMFB79rwywe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("")
  })}
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
          <img src={pic} alt="" className="picsiz" />
          <img src={pic1}alt="" className="picsiz" />
          <img src={pic2} alt="" className="picsiz" />
        </div>
        <div className="img5">
          <img src={pic3} alt="" className="picsiz" />
          <img src={pic4} alt="" className="picsiz" />
          <img
            src={pic5}
            alt=""
            className="
       picsiz"
          />
        </div>
      </section>
        
        <form ref={form} onSubmit={sendEmail} className="elabel">
        <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input"
                required
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea"
                rows="4"
                required
              />
              <button type="submit" className="btn border-none self-center">
                Send
              </button>








       
          </form>
    </>
  );
};
export default Project