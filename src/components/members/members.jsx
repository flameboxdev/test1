import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Преимущества сотрудничества</h1>

      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h2 className="name">Ответственность</h2>

          <h4 className="about">
            Все работы я выполняю лично или вместе со своей командой. Я всегда присутствую на объекте и контролирую
            ход выполнения работ.
            У меня нет практики перекладывания ответственности за работу на сотрудников.
          </h4>

        </div>
      </div>

      <div className="member member-2">
        <div className="member-img4"></div>
        <div className="member-info">
          <h1 className="name">Гарантия</h1>

          <h4 className="about">
            Профессиональное оборудование для диагностики и ремонта всех видов теплого пола,
            позволяет моим клиентам не беспокоиться за работоспособность установленного пола
          </h4>

        </div>
      </div>

      <div className="member member-3">
        <div className="member-img5"></div>
        <div className="member-info">
          <h1 className="name">Профессионализм</h1>

          <h4 className="about">
            Многолетний опыт работы, активное сотрудничество с производителями, позволяет дать клиентам
            максимально качественный продукт за разумные деньги
          </h4>

        </div>
      </div>
    </div>
  );
};

export default Members;
