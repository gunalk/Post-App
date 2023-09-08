import React, { useState } from 'react';
import "./App.css"
function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue!== '') {
      list.unshift(inputValue)
      setInputValue('');
      console.log(list.length)
    }
  };

  const handleAscendingSort = () => {
    const sortedList = [...list].sort();
    
    setList(sortedList);
  };
  const handleDescendingSort = () => {
    const sortedList1 = [...list].sort().reverse();
    
    setList(sortedList1);
  };
const generateButtons=()=>{
  if(list.length>1){
    return ( <><button className="btn btn-info button2" onClick={handleAscendingSort}>AscendingSort</button>
    <button  className="btn btn-warning button2" onClick={handleDescendingSort}>DescendingSort</button></>)
  }
  else{
    return(<></>)
  }
}

  return (
    <div>
     
      <h1>Post-App</h1>
      <div className='app'>
        <input
          className='form-control'
          id="input"
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button  className="btn btn-primary button2" onClick={handleAddClick}>Add</button>
        
        {
          generateButtons()
        }
      </div>
      <ul className='u-list'>
        {list.map((item, index) => (
          <li className="list-group-item list" key={index}>{item}</li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;
