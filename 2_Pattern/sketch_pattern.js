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

var puncIndex = 0;
var puncCount = 11;
var puncIndexSet = [];
var puncIndexToggles = [];
var noPuncToggles = false;

var outlineIndex = 0;
var outlineCount = 3;
var outlineIndexSet = [];
var outlineIndexToggles = [];
var noOutlineToggles = false;

var swatchCol = [];

var colMode = 0; // 0 = default, 1 = disco
var discoCol = [];
var discoColIndex = 0;
// fill(discoCol[discoColIndex][1]);

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
  drawDiscoColors();
  drawSwatchColors();

  pixelDensity(2);
  smooth();

  coreS = canvasDiv.offsetWidth;

  baseIndexSet[0] = 0;
  baseIndexToggles[0] = true;
  for(var m = 1; m < baseCount; m++){
    baseIndexToggles[m] = false;
  }

  outlineIndexSet[0] = null;
  for(var m = 0; m < outlineCount; m++){
    outlineIndexToggles[m] = false;
  }

  puncIndexSet[0] = 0;
  puncIndexToggles[0] = true;
  for(var m = 1; m < puncCount; m++){
    puncIndexToggles[m] = false;
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

      push();
        translate(width/2, height/2);
        rotate(coreAng);

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

        scale(0.4);
        scale(markScale);

        ////////////////// DRAW Ds        
        ////////////////// DRAW BASEs        
        noStroke();
        if(colMode == 0){
          fill(foreColor);
        } else {
          fill(discoCol[discoColIndex][(n+0)%3]);
        }
        if(colMode == 1){
          if(noOutlineToggles){
            noStroke();
            fill(discoCol[discoColIndex][(n+0)%3]);
            drawBase(n%baseIndexSet.length, true);

          } else {
            fill(discoCol[discoColIndex][(n+2)%3]);
            stroke(discoCol[discoColIndex][(n+2)%3]);

            if(outlineIndexSet[n%outlineIndexSet.length] == 0){
              strokeWeight(5 * markScale);
              drawBase(n%baseIndexSet.length, true);
  
            } else if(outlineIndexSet[n%outlineIndexSet.length] == 1){
              strokeWeight(14 * markScale);
              drawBase(n%baseIndexSet.length, true);
  
            } else if(outlineIndexSet[n%outlineIndexSet.length] == 2){
              strokeWeight(14 * markScale);
              drawBase(n%baseIndexSet.length, false);
  
            }
            noStroke();
            fill(discoCol[discoColIndex][(n+0)%3]);
            drawBase(n%baseIndexSet.length, true);
          }

        } else if(colMode == 0){
          drawBase(n%baseIndexSet.length, true);
        }
        
        ////////////////// DRAW INLINEs        

        noStroke();
        if(inlineOn){
          if(noBaseToggles){
            if(colMode == 0){
              fill(foreColor);
            } else {
              fill(discoCol[discoColIndex][(n+0)%3]);
            }
          } else {
            if(colMode == 0){
              fill(bkgdColor);
            } else {
              fill(discoCol[discoColIndex][(n+1)%3]);
            }
          }
          drawInline();
        }

        if(colMode == 0){
          fill(swatchCol[swatchIndex]);
        } else {
          fill(discoCol[discoColIndex][(n+1)%3]);
        }
        drawPunc(n%puncIndexSet.length);
      pop();
    }
  }
}

function drawPatternFlip(){
  for(var m = 0; m < yCount; m++){
    for(var n = 0; n < xCount; n++){

      push();
        translate(width/2, height/2);
        rotate(coreAng);

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

        scale(0.4);
        scale(markScale);

        ////////////////// DRAW Ds        
        ////////////////// DRAW BASEs   

        if(m%2 == 0){
          // translate(widthFac/2, heightFac/2);
          rotate(PI);
          translate(-widthFac * 0.95, -heightFac * 3.45);
        }

        noStroke();
        if(colMode == 0){
          fill(foreColor);
        } else {
          fill(discoCol[discoColIndex][(n+0)%3]);
        }
        if(colMode == 1){
          if(noOutlineToggles){
            noStroke();
            fill(discoCol[discoColIndex][(n+0)%3]);
            drawBase(n%baseIndexSet.length, true);

          } else {
            fill(discoCol[discoColIndex][(n+2)%3]);
            stroke(discoCol[discoColIndex][(n+2)%3]);

            if(outlineIndexSet[n%outlineIndexSet.length] == 0){
              strokeWeight(5 * markScale);
              drawBase(n%baseIndexSet.length, true);
  
            } else if(outlineIndexSet[n%outlineIndexSet.length] == 1){
              strokeWeight(14 * markScale);
              drawBase(n%baseIndexSet.length, true);
  
            } else if(outlineIndexSet[n%outlineIndexSet.length] == 2){
              strokeWeight(14 * markScale);
              drawBase(n%baseIndexSet.length, false);
  
            }
            noStroke();
            fill(discoCol[discoColIndex][(n+0)%3]);
            drawBase(n%baseIndexSet.length, true);
          }

        } else if(colMode == 0){
          drawBase(n%baseIndexSet.length, true);
        }
        
        ////////////////// DRAW INLINEs        


        noStroke();
        if(inlineOn){
          if(noBaseToggles){
            if(colMode == 0){
              fill(foreColor);
            } else {
              fill(discoCol[discoColIndex][(n+0)%3]);
            }
          } else {
            if(colMode == 0){
              fill(bkgdColor);
            } else {
              fill(discoCol[discoColIndex][(n+1)%3]);
            }
          }
          drawInline();
        }
        
        if(colMode == 0){
          fill(swatchCol[swatchIndex]);
        } else {
          fill(discoCol[discoColIndex][(n+1)%3]);
        }
        drawPunc(n%puncIndexSet.length);

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

