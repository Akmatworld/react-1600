import './App.css'
import MyButton from './MyButton/MyButton.jsx'

function App() {

  return (
    <>
    <div className="container">
      <header className='header'>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'>Item 1</li>
            <li className='header__li'>Item <span className='header__span-red'>2</span></li>
            <li className='header__li'>Item 3</li>
            <li className='header__li'>Item 4</li>
          </ul>
        </nav>
      </header>
    </div>
    </>
  )
}

export default App
