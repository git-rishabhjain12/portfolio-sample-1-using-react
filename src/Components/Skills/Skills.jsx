import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTtitle">What I do</span>
      <span className="skillDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        alias. Tempore molestiae illum quam quo minus, ea maiores! Nesciunt
        recusandae laboriosam placeat totam, harum iste cum culpa fuga. Nulla,
        sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        laudantium qui expedita harum quos perspiciatis porro.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>This is a demo text. You can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              This demo text can be changed while making the production ready
              website
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>You can write a text related to mobile app development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
