import React from 'react';
import './SketchDisplay.scss';
import P5Wrapper from 'react-p5-wrapper';


const SketchDisplay = ({ sketch, setIsDisplayed }) => {
  return (
    <section className='sketch-display-section'>
      <div className='button-container'>
        <button className='close-button' onClick={() => setIsDisplayed(false)}>X</button>
      </div>
      <P5Wrapper sketch={sketch.sketch}></P5Wrapper>
    </section>
  )
}

export default SketchDisplay;
