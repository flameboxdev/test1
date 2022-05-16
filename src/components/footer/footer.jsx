import "./footer.css";
import { BsMouse } from "react-icons/bs";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Всегда рад помочь вам!{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - Крутить вверх -
          </h2>
        </a>
      </h1>
      
    </div>
  );
}
export default Footer;
