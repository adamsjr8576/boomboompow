import sketch1 from './Sketch1.js';
import sketch1Gif from './sketch1.gif';
import sketch2 from './Sketch2';
import sketch2Gif from './sketch2.gif';
import sketch3 from './Sketch3';
import sketch3Gif from './sketch3.gif';
import sketch4 from './Sketch4';
import sketch4Gif from './sketch4.gif';
import sketch5 from './Sketch5';
import sketch5Gif from './sketch5.gif';
import sketch6 from './Sketch6';
import sketch6Gif from './sketch6.gif';
import sketch7 from './Sketch7';
import sketch7Gif from './sketch7.gif';
import sketch8 from './Sketch8';
import sketch8Gif from './sketch8.gif';

const arrayOfGifs = [sketch1Gif, sketch2Gif, sketch3Gif, sketch4Gif, sketch5Gif, sketch6Gif, sketch7Gif, sketch8Gif]
const arrayOfSketches = [sketch1, sketch2, sketch3, sketch4, sketch5, sketch6, sketch7, sketch8];

export const sketchesArray = arrayOfSketches.map((sketch, index) => {
  return {
    sketch: sketch,
    id: index + 1,
    gif: arrayOfGifs[index]
  }
})
