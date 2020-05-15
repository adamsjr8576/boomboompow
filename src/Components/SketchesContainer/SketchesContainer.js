import React from 'react';
import './SketchesContainer.scss';
import SketchCard from '../SketchCard/SketchCard.js';

const SketchesContainer = ({ sketches, setIsDisplayed, findSketch }) => {
  const sketchCards = sketches.map(sketch => {
    return (
      <SketchCard key={sketch.id} gif={sketch.gif} id={sketch.id} title={sketch.title}
      setIsDisplayed={setIsDisplayed} findSketch={findSketch}/>
    )
  });
  return (
    <section className='sketches-container'>
      {sketchCards}
    </section>
  )
}

export default SketchesContainer;
