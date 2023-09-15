


### Exercise 1

App.js
import { useState } from 'react';
import './App.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputText, setOutputText] = useState('soo boring');
  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (event) => {
    const newInputValue = event.target.value.toLowerCase();
    setInputValue(newInputValue);

    if (newInputValue.includes('dog')) {
      setOutputText('I LOVE DOGS');
      setTextColor('red');
    } else if (newInputValue.includes('cat')) {
      setOutputText('I LOVE CATS');
      setTextColor('blue');
    } else {
      setOutputText('soo boring');
      setTextColor('black');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p id="outputText" style={{ color: textColor }}>
        {outputText}
      </p>
    </div>
  );
}



App.css
#outputText {
  color: black;
}
.red {
  color: red;
}
.blue {
  color: blue;
}

### Exercise 2
import { useState } from 'react';
import './App.css';

export default function App() {

  const [textInput, setTextInput] = useState('');

  return (
    <>
      <label for="textbox">Type something here : </label>
      <input type="text" id="textbox" onChange={e => setTextInput(e.target.value)}></input>

      {textInput.length < 5 && <p>So short</p>}
      {(textInput.length >= 5 && textInput.length < 10) && <p>Kinda long</p>}
      {textInput.length >= 10 && <p>Very long</p>}
    </>
  );
}









### Exercise 3
import { useState } from 'react';

function IncrementComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    const inputValueAsNumber = Number(inputValue);

    if (!isNaN(inputValueAsNumber)) {
      setCount(count + inputValueAsNumber);
      setInputValue('');
    }
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default IncrementComponent;



