import './App.css';
import {useState} from 'react';


function App() {
 const [Age, setAge] = useState(0)
 const [Upper, setUpper] = useState(120)
 const [Lower, setLower] = useState(90)

 
 function calculate() {
  const result1 = (220-Age)*0.85
  setUpper(result1)
  const result2 = (220-Age)*0.65
  setLower(result2)
  

 }
    return(
      <div id="content">
        <h3> Heart Rate Calculator</h3>
        <form>
          <div>
            <label>Age:</label>
            <input type="number" value ={Age} onChange={e=> setAge(e.target.value)}/>


      </div>
      <div>
        
          <label>Heart Rate:</label>
      <output>{Lower.toFixed(0)}-{Upper.toFixed(0)}</output>

      </div>
      <button id="calculate" type="button" onClick={calculate}>Calculate</button>

      </form>
      </div>
    );
    }
      


export default App;
