import { useState } from 'react'

import './App.css'
import MyButton from './MyButton/MyButton.jsx'

function App() {
  let [numbers, setNumbers] = useState('')

  const BG_1 = '#333'
  const BG_2 = 'orange'
  const BG_3 = '#ccc'
  const BG_4 = '#fff'
  const BG_5 = '#000'

  const buttonSymbols = [
    { text: 'ac', background: BG_3, color: BG_5 },
    { text: 'del', background: BG_3, color: BG_5 },
    { text: '%', background: BG_3, color: BG_5 },
    { text: '/', background: BG_2, color: BG_4 },
    { text: '7', background: BG_1, color: BG_4 },
    { text: '8', background: BG_1, color: BG_4 },
    { text: '9', background: BG_1, color: BG_4 },
    { text: '*', background: BG_2, color: BG_4 }, 
    { text: '4', background: BG_1, color: BG_4 }, 
    { text: '5', background: BG_1, color: BG_4 }, 
    { text: '6', background: BG_1, color: BG_4 }, 
    { text: '-', background: BG_2, color: BG_4 }, 
    { text: '1', background: BG_1, color: BG_4 }, 
    { text: '2', background: BG_1, color: BG_4 }, 
    { text: '3', background: BG_1, color: BG_4 }, 
    { text: '+', background: BG_2, color: BG_4 }, 
    { text: '0', background: BG_1, color: BG_4 }, 
    { text: '.', background: BG_1, color: BG_4 }, 
    { text: '=', background: BG_2, color: BG_4 }
  ]

  const handler = (button) => {
    if (button === 'ac') {
      if (!numbers.length) { return }

      let result = numbers.slice(0, numbers.length - 1)
      setNumbers(result)
      return
    }

    if (button === '=') {
      const plusArr = numbers.split('+')
      const result = plusArr.reduce((accumulate, number) => accumulate += +number, 0)
      setNumbers(result)
      return
    }

    setNumbers(numbers + button)
  }

  return (
    <>
    <div className='calculator'>
      <div className='calculator__input-block'>
        <p className="input">{ numbers }</p>
      </div>
      <div className='calculator__buttons'>
        { buttonSymbols.map((bsymbol, index) => {
          return <MyButton 
                key={index}
                text={bsymbol.text}
                width={(bsymbol.text === '0' ? '100%' : 70)}
                height={70}
                color={bsymbol.color}
                borderRadius={(bsymbol.text === '0' ? '40px' : '50%')}
                textTransform={'uppercase'}
                background={bsymbol.background}
                onClick={handler}
              />
        }) }
      </div>
    </div>
    </>
  )
}

export default App
