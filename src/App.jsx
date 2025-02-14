import React, { useState } from 'react';

import Header from "./components/Header"
import InputArea from "./components/InputArea"
import OutputArea from "./components/OutputArea"

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5,
    duration: 10
  });

  const inputIsValid = () => {
    return Object.values(inputs).every((value) => value > 0);
  };

  const handleInputChange = (name, value) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: +value
      };
    });
  };

  return <>
    <h1>React Investment Project</h1>
    <Header />
    <InputArea inputs={inputs} handleInputChange={handleInputChange} />
    {!inputIsValid && <p>Enter Valid Input Data</p>}
    {inputIsValid && <OutputArea inputs={inputs} />}
  </>
}

export default App
