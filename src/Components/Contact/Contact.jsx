import "./contact.css";
import Adobe from "../../assets/adobe.png";
import Walmart from "../../assets/walmart.png";
import Facebook from "../../assets/facebook.png";
import Microsoft from "../../assets/microsoft.png";
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nemo maxime fugit, quaerat a porro aut odit! Vero voluptas esse in,
          libero vitae quia praesentium hic, tenetur dolorem doloribus quod.
        </p>
        <div className="clientImgs">
          <img src={Adobe} alt="" className="clientImg" />
          <img src={Walmart} alt="" className="clientImg" />
          <img src={Facebook} alt="" className="clientImg" />
          <img src={Microsoft} alt="" className="clientImg" />
        </div>
      </div>
      
      <div id="contact">
        <h1 className="contactPageTitle"></h1>
        <span className="contactDescription">
          Please fill out the form below to discuss any work opportuities.
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YoutubeIcon} alt="" className="link" />
            <img src={InstagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
