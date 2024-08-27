var bkgdColor, foreColor;
var bkgdMode = 1;

var modeToggle = true;

var coreS;

var xCount, yCount;

var xSpaceFac = 0.33;
var xSpace = 165;
var ySpaceFac = 0.33;
var ySpace = 170;

var baseIndex = 0;
var baseCount = 6;
var baseIndexSet = [];
var baseIndexToggles = [];
var noBaseToggles = false;

var inlineOn = true;
var inlineIndex = 0;
var inlineCount = 2;

var puncOn = true;
var puncIndex = 0;
var puncCount = 11;

var outlineIndex = 4;

var markScale = 1;
var offsetToggle = true;
var flipToggle = false;

var unitRot = 0;

var widthFac = 150;//140;
var heightFac = 150;

var gridAngFac = 0;
var gridAng = 0;
var coreAng = 0;

var saveToggle = 1;

function preload(){

}

function setup(){
  canvasDiv = document.getElementById("patternGen");
  
  canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, SVG);
  // canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
  canvas.parent("patternGen");

  bkgdColor = color('#ffffff');
  foreColor = color('#000000');

  strokeJoin()

  pixelDensity(2);
  smooth();

  coreS = canvasDiv.offsetWidth;

  baseIndexSet[0] = 0;

  baseIndexToggles[0] = true;
  for(var m = 1; m < baseIndex; m++){
    baseIndexToggles[m] = false;
  }

  figurePattern();
}

function draw(){
  // clear();
  background(bkgdColor);

  if(flipToggle){
    drawPatternFlip();
  } else {
    drawPattern();
  }

  noLoop();
}

function figurePattern(){
  xSpace = map(xSpaceFac, 0, 1, markScale * 0.5 * widthFac, markScale * 2 * widthFac);
  ySpace = map(ySpaceFac, 0, 1, markScale * 0.5 * heightFac, markScale * 2 * heightFac);

  xCount = floor(width/xSpace) + 3;
  yCount = floor(height/ySpace) + 3;

  gridAng = map(gridAngFac, -1, 1, -ySpace/4, ySpace/4);

  if(coreAng > PI/16 || coreAng < -PI/16){
    yCount = xCount;
  }

  if(gridAng > ySpace/8 || gridAng < -ySpace/8){
    yCount += 2;
  }

  if(flipToggle){
    yCount += 3;
  }
}

function drawPattern(){
  for(var m = 0; m < yCount; m++){
    for(var n = 0; n < xCount; n++){
    // for(var m = 0; m < 5; m++){
    //   for(var n = 0; n < 5; n++){

      push();
        translate(width/2, height/2);
        rotate(coreAng);

        // fill(125);
        // ellipse(0, 0, 10, 10);

        translate(-xCount * xSpace/2, -yCount * ySpace/2);

        translate(n * xSpace, m * ySpace);

        translate(0, xCount * -gridAng/2);
        translate(0, n * gridAng);

        if(offsetToggle){
          translate(0, (n%2) * ySpace/2);
        }

        translate(widthFac/2, heightFac/2);
        rotate(unitRot)
        translate(-widthFac/2, -heightFac/2);

        /// DEBUG MARKERS
        // fill(0,0,255);
        // ellipse(0, 0, 5, 5);
        // noFill();
        // stroke(0,255,0);
        // rect(0, 0, xSpace, ySpace);
        // stroke(255,0,255);
        // rect(0, 0, widthFac, heightFac);

        /// DRAW Ds
        scale(0.4);
        scale(markScale);

        noStroke();
        fill(foreColor);
        drawBase(n%baseIndexSet.length, true);
        
        if(inlineOn){
          if(noBaseToggles){
            fill(foreColor);
          } else {
            fill(bkgdColor);
          }
          drawInline();
        }

        fill(255,0,0);
        if(puncOn){
          drawPunc();
        }
      pop();
    }
  }
}

function drawPatternFlip(){
  for(var m = 0; m < yCount; m++){
    for(var n = 0; n < xCount; n++){
    // for(var m = 0; m < 6; m++){
    //   for(var n = 0; n < 6; n++){

      push();
        translate(width/2, height/2);
        rotate(coreAng);

        // fill(125);
        // ellipse(0, 0, 10, 10);

        translate(-xCount * xSpace/2, -yCount * ySpace/2);

        translate(n * xSpace, m * ySpace);

        translate(0, xCount * -gridAng/2);
        translate(0, n * gridAng);

        if(offsetToggle){
          translate(0, (n%2) * ySpace/2);
        }

        translate(widthFac/2, heightFac/2);
        rotate(unitRot)
        translate(-widthFac/2, -heightFac/2);

        /// DEBUG MARKERS
        // fill(0,0,255);
        // ellipse(0, 0, 5, 5);
        // noFill();
        // stroke(0,255,0);
        // rect(0, 0, xSpace, ySpace);
        // stroke(255,0,255);
        // rect(0, 0, widthFac, heightFac);

        /// DRAW Ds
        scale(0.4);
        scale(markScale);

        if(m%2 == 0){
          // translate(widthFac/2, heightFac/2);
          rotate(PI);
          translate(-widthFac * 0.95, -heightFac * 3.45);
        }

        // if(outlineIndex == 0){
        //   stroke(0,0,255);
        //   strokeWeight(coreS * 40/591.107);
        //   fill(foreColor);
        //   drawBase(false); 
        // }

        noStroke();
        fill(foreColor);
        drawBase(n%baseIndexSet.length, true);
        
        fill(bkgdColor);
        if(inlineOn){
          drawInline();
        }
        fill(255,0,0);
        
        if(puncOn){
          drawPunc();
        }
      pop();
    }
  }
}

function windowResized(){
  canvasDiv = document.getElementById("patternGen");
  coreS = canvasDiv.offsetWidth;

  resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);

  figurePattern();

  loop();
}

