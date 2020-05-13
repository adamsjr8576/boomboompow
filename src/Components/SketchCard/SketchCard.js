import React, { useState } from 'react';
import './SketchCard.scss';

const SketchCard = ({ gif, id, title }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <article className='sketch-article' id={id} style={{backgroundImage: `url(${gif})`}}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p className='sketch-title' hidden={!isHovered}>{title}</p>
    </article>
  )
}

export default SketchCard;
