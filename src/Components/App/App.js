import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import SketchesContainer from '../SketchesContainer/SketchesContainer.js';
import SketchDisplay from '../SketchDisplay/SketchDisplay.js';
import arrayOfSketches from '../../Sketches/sketches.js';

const App = () => {
  const [sketches, setSketches] = useState(arrayOfSketches);

  return (
    <div className='App'>
      <Header />
      <SketchesContainer sketches={sketches}/>
    </div>
  );
}

export default App;
