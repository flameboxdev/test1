import "./contact.css";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Позвоните или напишите для консультации</h1>
      <div className="contact-links">
        <a
          href="tel:+79183429569"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlinePhone className="icon" />
          <h2>
            Позвонить <span>+79183429569</span>
          </h2>
        </a>

        <a
          href="https://wa.me/79183429569"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Написать <span>+79183429569</span>
          </h2>
        </a>

        <a href="https://instagram.com/tepliy_pol_23" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            Посмотреть <span>tepliy_pol_23</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
