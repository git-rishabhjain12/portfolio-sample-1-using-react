import "./intro.css";
import { Link } from "react-scroll";

import bgImg from "../../assets/intro_image.png";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I&apos;m <span className="introName">Rishabh</span> <br />
            Frontend Developer
          </span>
          <p className="introPara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            maiores <br />
            dolore laudantium ducimus repellat.
          </p>
          <Link to="#">
            <button className="btn">
              <img src={btnImg} alt="" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
        <div className="mainImage">
          <img src={bgImg} alt="" className="bg" />
        </div>
      </section>
    </>
  );
};
export default Intro;
