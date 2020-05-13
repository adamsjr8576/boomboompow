import React from 'react';
import './SketchesContainer.scss';
import SketchCard from '../SketchCard/SketchCard.js';

const SketchesContainer = ({ sketches }) => {
  const sketchCards = sketches.map(sketch => {
    return (
      <SketchCard key={sketch.id} gif={sketch.gif} id={sketch.id} title={sketch.title}/>
    )
  });
  return (
    <section className='sketches-container'>
      {sketchCards}
    </section>
  )
}

export default SketchesContainer;
