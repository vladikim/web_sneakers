import './index.scss'
import Card from './Card';
import Header from './Header';
import Drawer from './Drawer';


function App() {
  return <div className='wrapper'>
    <Drawer />
    <Header />
    <div className='content'>
      <div className='search-title'>
        <h1>Все кроссовки</h1>
        <div className='search-block'>
          <img src='img/search.svg' alt='Search' />
          <input placeholder='Поиск' />
        </div>
      </div>


      <div className='catalog'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div >
}

export default App;
