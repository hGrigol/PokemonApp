import './App.css';
import React from 'react';
import TableComponent from "./Components/TableComponent";
import pokemon from "./pokemon.json"
import PokemonCardComponent from './Components/ComparerComponents/PokemonCardComponent';
import { CSSProperties } from 'react';
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
      <h1 className='title'> GOTTA KNOW 'EM ALL</h1>
    </div>
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <PokemonCardComponent pokemon={pokemon[0]}/>
        <PokemonCardComponent pokemon={pokemon[1]}/>
        </div>
        <div style={styles.vs}>VS</div>

    </div>
    

    </div>
    
  );
}
const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative', // Stelle den Container relativ, um die absolute Positionierung des VS-Divs zu ermöglichen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh', // Volle Höhe des Viewports
    backgroundColor: '#f0f0f0', // Optionale Hintergrundfarbe
  },
  cardContainer: {
    display: 'flex', // Ändere display zu flex, um die Karten nebeneinander anzuordnen
    alignItems: 'center', // Zentriere die Karten vertikal
    justifyContent: 'center', // Zentriere die Karten horizontal
    position: 'relative', // Stelle den Karten-Container relativ, um das VS-Div absolut positionieren zu können
  },
  vs: {
    position: 'absolute', // Positioniere das VS-Div absolut innerhalb des Container-Divs
    top: '50%', // Zentriere das VS-Div vertikal
    left: '50%', // Zentriere das VS-Div horizontal
    transform: 'translate(-50%, -50%)', // Zentriere das VS-Div genau in der Mitte des Containers
    fontSize: '24px', // Ändere die Schriftgröße nach Bedarf
    fontWeight: 'bold', // Mache den Text fett
    backgroundColor: 'white', // Hintergrundfarbe des VS-Divs
    padding: '8px 16px', // Innenabstand des VS-Divs
    borderRadius: '8px', // Runde die Ecken des VS-Divs
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Füge einen Schatten hinzu
  },
};



export default App;
