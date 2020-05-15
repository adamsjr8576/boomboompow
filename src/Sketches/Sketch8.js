const sketch8 = p => {
  let slider1;
  let slider2;
  let slider3;

  p.setup = () => {
    p.createCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
    p.background(50);
    slider1 = p.createSlider(.01, .50, .05, .02);
    slider1.position(200, 175);
    slider1.style('width', '120px');

    slider2 = p.createSlider(.05, .95, .45, .02);
    slider2.position(200, 195);
    slider2.style('width', '120px');

    slider3 = p.createSlider(.05, .75, .25, .02);
    slider3.position(200, 215);
    slider3.style('width', '120px');
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
    p.background(50);
  }

  p.draw = () => {
    p.background(50, 50, 50, 70);
    p.noFill();
    p.strokeWeight(5);
    p.stroke(230);

    const speed1 = slider1.value();
    const speed2 = slider2.value();
    const speed3 = slider3.value();

    const xCenter = p.width/2;
    const yCenter = p.height/2;

    const time = p.millis()/1000;
    const duration = speed1;
    const angle = time * duration * p.PI * 2;

    const u = Math.cos(angle);
    const v = Math.sin(angle);

    const duration2 = speed2;
    const angle2 = time * duration2 * p.PI * 2;
    const u2 = Math.cos(angle2);
    const v2 = Math.sin(angle2);

    const duration3 = speed3;
    const angle3 = time * duration3 * p.PI * 2;
    const u3 = Math.cos(angle3);
    const v3 = Math.sin(angle3);

    const ellipseX = xCenter + u * 175;
    const ellipseY = yCenter + v * 175;

    const ellipseX2 = ellipseX+u2*125;
    const ellipseY2 = ellipseY+v2*125;

    const ellipseX3 = ellipseX+u3*75;
    const ellipseY3 = ellipseY+v3*75;

    const ellipseX4 = xCenter + u2 * 3;
    const ellipseY4 = yCenter + v2 * 3;

    p.ellipse(ellipseX, ellipseY, 50);
    p.ellipse(ellipseX2, ellipseY2, 25);
    p.ellipse(ellipseX3, ellipseY3, 20);
    p.ellipse(ellipseX4, ellipseY4, 20);

  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    }
}

export default sketch8;
