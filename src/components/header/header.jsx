import './header.css';

const date = new Date();
let timezone = () => {
    try {
        const gh = date.getHours();
        if (gh < 5) return 'Доброй ночи';
        if ((gh > 5) && (gh < 10)) return 'Доброе утро';
        if ((gh > 10) && (gh < 18)) return 'Добрый день';
        if (gh > 18) return 'Добрый вечер';
    }
    catch (e) {
        return 'Здравствуйте';
    }
}
function Header() {
  return (
    <div id='home' className='container header-container'>
      <h2>
            {timezone()}
        <p>
            Меня зовут Богдан
        </p>

      </h2>
      <h1>
          <p>
              <span>
                  Добро пожаловать в авторскую студию теплого пола
              </span>


          </p>
          </h1>
    </div>
  );
}
export default Header;
