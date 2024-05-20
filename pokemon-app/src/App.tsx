import './App.css';
import React from 'react';
import TableComponent from "./Components/TableComponent";
import pokemon from "./pokemon.json"
const App: React.FC = () => {
  return (
    <div>
    <div 
      style = {{
        margin:'auto',
        width: 800,
        paddingTop: "1rem"
      }}
      >
      <h1 className='title'> Pokemon App</h1>
    </div>
    <div>
        <TableComponent data={pokemon}></TableComponent>
    </div>
    

    </div>
    
  );
}

export default App;
