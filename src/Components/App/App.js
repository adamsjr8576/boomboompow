import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import SketchesContainer from '../SketchesContainer/SketchesContainer.js';
import SketchDisplay from '../SketchDisplay/SketchDisplay.js';
import arrayOfSketches from '../../Sketches/sketches.js';

const App = () => {
  const [sketches, setSketches] = useState(arrayOfSketches);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [selectedSketch, setSelectedSketch] = useState({});

  const findSketch = id => {
    const sketch = sketches.find(sketch => sketch.id === id);
    setSelectedSketch(sketch);
  }
  
  let p5Display;
  if (isDisplayed) {
    p5Display = <SketchDisplay sketch={selectedSketch}/>
  }

  return (
    <div className='App'>
      <Header />
      <SketchesContainer sketches={sketches} setIsDisplayed={setIsDisplayed}
      findSketch={findSketch}/>
      {p5Display}
    </div>
  );
}

export default App;
