import React, { useState } from 'react'
// import React, { useState } from 'react'
import './App.css';
const Calculator_advance = () => {
  const [val, setval] = useState('');
  const [val1, setVAL1] = useState('');
  const [total, setTOTAL] = useState('');

  const ans = () => {
    if (total == '+') {
      setval(parseInt(val) + parseInt(val1))
    } else if (total == '-') {
      setval(parseInt(val1) - parseInt(val))
    } else if (total == '*') {
      setval(parseInt(val) * parseInt(val1))
    } else if (total == '/') {
      setval(parseInt(val1) / parseInt(val))
    }
  }
  const action = (total) => {
    setVAL1(val);
    setval('');
    setTOTAL(total)
  }

  const NO = (e) => {
    setval((prevval) => prevval + e.target.value);
  }

  const clear = () => {
    setval('')
  }
  return (
    <div>

      <div className="container">
        <div className="main">
          <input type="text" className='screen' value={val} placeholder='0' readOnly />
          <div>
            <input type="button" className='button' value="Ac" onClick={clear} />
          </div>
          <div className="cal_1">
            <input type="button" className='button'  value="1" onClick={NO} />
            <input type="button" className='button' value="2" onClick={NO} />
            <input type="button" className='button' value="3" onClick={NO} />
            <input type="button"  className='btn button' value="+" onClick={() => { action('+') }} />
          </div>
          <div className="cal_1">
            <input type="button" className='button' value="4" onClick={NO} />
            <input type="button" className='button' value="5" onClick={NO} />
            <input type="button" className='button' value="6" onClick={NO} />
            <input type="button" className='btn button' value="-" onClick={() => { action('-') }} />
          </div>
          <div className="cal_1">
            <input type="button" className='button' value="7" onClick={NO} />
            <input type="button" className='button' value="8" onClick={NO} />
            <input type="button" className='button' value="9" onClick={NO} />
            <input type="button" className='btn button' value="*" onClick={() => { action('*') }} />
          </div>
          <div className="cal_1">
            <input type="button" className='button' value="0" onClick={NO} />
            <input type="button" className='button' value="." onClick={NO} />
            <input type="button" className='btn button' value="/" onClick={() => { action('/') }} />
            <input type="button" className='btn button' value="=" onClick={() => { ans('=') }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator_advance
