const sketch8 = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
  }

  p.draw = () => {
    p.background(200,200,250);
    p.noFill();
    p.strokeWeight(5);

    const xCenter = p.width/2;
    const yCenter = p.height/2;

    const time = p.millis()/1000;
    const duration = .10;
    const angle = time * duration * p.PI * 2;

    const u = Math.cos(angle);
    const v = Math.sin(angle);

    const duration2 = .30;
    const angle2 = time * duration2 * p.PI * 2;
    const u2 = Math.cos(angle2);
    const v2 = Math.sin(angle2);

    const ellipseX = xCenter + u * 200;
    const ellipseY = yCenter + v * 200;

    p.ellipse(ellipseX, ellipseY, 50);
    p.ellipse(ellipseX+u2*100, ellipseY+v2*100, 50);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    }
}

export default sketch8;
