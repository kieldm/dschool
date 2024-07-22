var modeToggle = true;

var baseDcount = 6;
var baseToggle = true;
var baseDB = [];
var baseDW = [];

var inlineCount = 2;
var inlineToggle = true;
var inlineB = [];
var inlineW = [];

var overlayToggle = false;

var dotColorToggle = true;

var swatchCount = 8;
var swatch = [];

var swatchOverCount = 30;
var swatchOver = [];
var swatchOverAlt = [];
var dotSolidBlack, dotSolidWhite;
var dotSolidBlack_Overlay, dotSolidWhite_Overlay;

var saveToggle = 0;

var nameBump;
var nameOnToggle = false;

var wordMarkCount = 2;
var wordMarkB = [];
var wordMarkW = [];

var coreS;

function preload(){
  for(var m = 0; m < baseDcount; m++){
    var thisOne = m + 1;
    baseDB[m] = loadSVG('resources/svgs/baseB_' + thisOne + '.svg');
    baseDW[m] = loadSVG('resources/svgs/baseW_' + thisOne + '.svg');
  }

  for(var m = 0; m < inlineCount; m++){
    var thisOne = m + 1;
    inlineB[m] = loadSVG('resources/svgs/inlineB_' + thisOne + '.svg');
    inlineW[m] = loadSVG('resources/svgs/inlineW_' + thisOne + '.svg');
  }  

  for(var m = 0; m < swatchCount; m++){
    var thisOne = m;
    swatch[m] = loadSVG('resources/svgs/color_' + thisOne + '.svg');
  }

  dotSolidWhite = loadSVG('resources/svgs/dotSolid_white.svg');
  dotSolidBlack = loadSVG('resources/svgs/dotSolid_black.svg');
  dotSolidWhite_Overlay = loadSVG('resources/svgs/dotSolidOverlay_white.svg');
  dotSolidBlack_Overlay = loadSVG('resources/svgs/dotSolidOverlay_black.svg');

  for(var m = 0; m < swatchOverCount; m++){
    var thisOne = m;
    swatchOver[m] = loadSVG('resources/svgs/colorOver_' + thisOne + '.svg');
    swatchOverAlt[m] = loadSVG('resources/svgs/colorOverAlt_' + thisOne + '.svg');
  }

  for(var m = 0; m < wordMarkCount; m++){
    var thisOne = m + 1;
    wordMarkB[m] = loadSVG('resources/svgs/wordMarkB_' + thisOne + '.svg');
    wordMarkW[m] = loadSVG('resources/svgs/wordMarkW_' + thisOne + '.svg');
  }
}

function setup(){
  canvasDiv = document.getElementById("logoGen");
  
  canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, SVG);
  canvas.parent("logoGen");

  coreS = canvasDiv.offsetWidth;
  nameBump = -coreS * 0.1286;
}

function draw(){
  clear();

  // DEBUG CANVAS
  // noFill();
  // stroke(0);
  // line(0,0,width,height);

  push();
    translate(width/2, height/2);

    // DEBUG SIZE
    // stroke(0,0,255);
    // line(-coreS/2, -coreS/2, coreS/2, coreS/2);

    // WORD MARK
    if(nameOnToggle){
      if(modeToggle){   //// WHITE BACKGROUND
        image(wordMarkB[wordMarkIndex], -coreS/2, -coreS/2, coreS, coreS);
      } else {
        image(wordMarkW[wordMarkIndex], -coreS/2, -coreS/2, coreS, coreS);
      }

      translate(0, nameBump);
    }

    // SWATCH UNDER
    if(!overlayToggle){
      if(dotColorToggle){       /////////// USE A COLOR SWATCH
        image(swatch[swatchIndex], -coreS/2, -coreS/2, coreS, coreS);
      } else {                   /////////// USE A BW SWATCH
        if(modeToggle){   //// WHITE BACKGROUND
          image(dotSolidBlack, -coreS/2, -coreS/2, coreS, coreS);
        } else {          //// BLACK BACKGROUND
          image(dotSolidWhite, -coreS/2, -coreS/2, coreS, coreS);
        }
      }
    }

    // BASE D
    if(baseToggle){
      if(modeToggle){
        image(baseDB[baseIndex], -coreS/2, -coreS/2, coreS, coreS);
      } else {
        image(baseDW[baseIndex], -coreS/2, -coreS/2, coreS, coreS);
      }
    }

    // INLINE
    if(inlineToggle){
      if(modeToggle){
        if(baseToggle){
          image(inlineW[inlineIndex], -coreS/2, -coreS/2, coreS, coreS);      
        } else {
          image(inlineB[inlineIndex], -coreS/2, -coreS/2, coreS, coreS);      
        }
      } else {
        if(baseToggle){
          image(inlineB[inlineIndex], -coreS/2, -coreS/2, coreS, coreS);      
        } else {
          image(inlineW[inlineIndex], -coreS/2, -coreS/2, coreS, coreS);
        }
      }
    }

    // SWATCH OVER
    if(overlayToggle){        /////// OVERLAY
      if(dotColorToggle){       /////////// USE A COLOR SWATCH
        if(baseIndex < 3){
          image(swatchOver[swatchOverlayIndex], -coreS/2, -coreS/2, coreS, coreS);
        } else {
          image(swatchOverAlt[swatchOverlayIndex], -coreS/2, -coreS/2, coreS, coreS);
        }
      } else {
        if(modeToggle){   //// WHITE BACKGROUND
          image(dotSolidBlack_Overlay, -coreS/2, -coreS/2, coreS, coreS);
        } else {          //// BLACK BACKGROUND
          image(dotSolidWhite_Overlay, -coreS/2, -coreS/2, coreS, coreS);
        }
      }
    }
  pop();

  noLoop();
}

function windowResized(){
  canvasDiv = document.getElementById("logoGen");
  coreS = canvasDiv.offsetWidth;

  resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
}




