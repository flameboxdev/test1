import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Мой профиль
      </a>
      <a href="#contact" className="btn sec">
        Заказать расчет
      </a>
    </div>
  );
}

export default Buttons;
