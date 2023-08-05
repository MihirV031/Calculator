import './App.css';
import { useState } from 'react';
import Calculator_advance from './Calculator_advance';

function App() {

  var [val, setval] = useState("hello")
  var [name, setname] = useState("")

  const changevalue = () => {
    setval("welcome raj")
    console.log(name)
  }
  return (
    <div className="App">
      {/* <h1>{val} </h1>
      <h1>{val} </h1>
      <h1>{val} </h1>
      <h1>{name} </h1>

      <input type="button" value="change value" onClick={changevalue} /> <br />
      <input type="text" onChange={(e) => {setname (e.target.value)}} /> */}


      {/* <Counter></Counter> */}

      {/* <Calculator></Calculator> */}

      <Calculator_advance></Calculator_advance>

      {/* <Tic_tok></Tic_tok> */}

      {/* <Tic_tok2></Tic_tok2> */}

      {/* <Pazal></Pazal> */}
    </div>
  );
}



export default App;
