import logo from './logo.svg';
import './App.css';


function App() {
  return <div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <img width={40} height={40} src='img/image 4.png' />
        <div className='headerInfo'>
          <h3>React sneakers</h3>
          <p>магазин лучших кроссовок</p>
        </div>
      </div>


      <ul className='headerRight'>
        <li >
          <img className='firstLi' src='img/cartNew.svg' width={18} height={18} />
          <span>1205p</span>
        </li>
        <li className='secondLi'>
          <img src='img/man.svg' width={18} height={18} />
        </li>
      </ul>

    </header>
    <div className='content'>
      <h1>Все кроссовки</h1>

      <div className='catalog'>
        <div className='card'>
          <img src='img/sneakers1.jpg' alt='sneakers' width={133} height={112} />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex-between'>
            <div className='d-flex'>
              <span>Цена:</span>
              <b>12999 руб</b>
            </div>
            <button className='buttonPlus'>
              <img src='img/plus.svg' alt='plus' width={11} height={11} />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src='img/sneakers2.jpg' alt='sneakers' width={133} height={112} />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex-between'>
            <div className='d-flex'>
              <span>Цена:</span>
              <b>12999 руб</b>
            </div>
            <button className='buttonPlus'>
              <img src='img/plus.svg' alt='plus' width={11} height={11} />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src='img/sneakers3.jpg' alt='sneakers' width={133} height={112} />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex-between'>
            <div className='d-flex'>
              <span>Цена:</span>
              <b>12999 руб</b>
            </div>
            <button className='buttonPlus'>
              <img src='img/plus.svg' alt='plus' width={11} height={11} />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src='img/sneakers4.jpg' alt='sneakers' width={133} height={112} />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex-between'>
            <div className='d-flex'>
              <span>Цена:</span>
              <b>12999 руб</b>
            </div>
            <button className='buttonPlus'>
              <img src='img/plus.svg' alt='plus' width={11} height={11} />
            </button>
          </div>
        </div>

      </div>



    </div>

  </div>
}

export default App;
