import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import SketchesContainer from '../SketchesContainer/SketchesContainer.js';
import SketchDisplay from '../SketchDisplay/SketchDisplay.js';
import { sketchesArray } from '../../Sketches/sketches.js';

const App = () => {
  const [sketches, setSketches] = useState(sketchesArray);
  console.log(sketches);
  return (
    <div className='App'>
      <Header />
      <main>
      </main>
    </div>
  );
}

export default App;
