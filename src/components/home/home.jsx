import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Крутить вниз</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Моя миссия:</span> <br />
        <p>
          Уже десять лет я занимаюсь продажей и монтажом теплых полов, систем антиобледенения и снеготаяния. Наиболее важным этапом является грамотный подбор теплого пола под конкретные задачи,
            выбор его вида и мощности.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
