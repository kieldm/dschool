var modeToggle = true;

var vibeToggle = true;

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

var swatchCount = 28;
var swatch = [];

var swatchOverCount = 30;
var swatchOver = [];
var swatchOverAlt = [];
var dotSolidBlack, dotSolidWhite;
var dotSolidBlack_Overlay, dotSolidWhite_Overlay;

var saveToggle = 0;
var discoSaveToggle = 0;

var discoOffsetX = [];
var discoOffsetY = [];

var nameBump;
var nameOnToggle = false;

/// 0 = Standford
/// 1 = Hazzo
/// 2 = Design
var wordMarkB = [];
var wordMarkW = [];

var coreS;

/////// DISCO TOGGLES
var puncToggle = true;
var discoOverlay = false;
var discoOffset = false;

var alphaToggle = false;
var discoCol = [];

var bkgdColor;

function preload(){
  for(var m = 0; m < baseDcount; m++){
    var thisOne = m;
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

    wordMarkB[m] = [];
    wordMarkW[m] = [];
    wordMarkB[m][0] = loadSVG('resources/svgs/wordMarkBstan_' + thisOne + '.svg');
    wordMarkW[m][0] = loadSVG('resources/svgs/wordMarkWstan_' + thisOne + '.svg');
    wordMarkB[m][1] = loadSVG('resources/svgs/wordMarkBhasso_' + thisOne + '.svg');
    wordMarkW[m][1] = loadSVG('resources/svgs/wordMarkWhasso_' + thisOne + '.svg');
    wordMarkB[m][2] = loadSVG('resources/svgs/wordMarkBdesign_' + thisOne + '.svg');
    wordMarkW[m][2] = loadSVG('resources/svgs/wordMarkWdesign_' + thisOne + '.svg');
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

  drawDiscoColors();
}

function setup(){
  canvasDiv = document.getElementById("logoGen");
  
  // canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, SVG);
  canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetWidth, SVG);
  canvas.parent("logoGen");

  coreS = canvasDiv.offsetWidth;
  nameBump = -coreS * 0.1286;

  bkgdColor = color('#FFFFFF');
}

function draw(){
  clear();
  
  if(alphaToggle == false){
    fill(bkgdColor);
    noStroke();
    rect(0, 0, width, height);
  }

  // DEBUG CANVAS
  // noFill();
  // stroke(0);
  // line(0,0,width,height);

  // textSize(15);
  // text("SwatchIndex: " + swatchIndex, 30, 30);
  // text("swatchOverlayIndex: " + swatchOverlayIndex, 30, 60);

  // DEBUG SIZE
  // stroke(0,0,255);
  // rect(0, height/2 - coreS/2, coreS, coreS);

  if(vibeToggle){     // BLACK TIE MODE ACTIVE
    blackTie();

  } else {            // DISCO MODE ACTIVE
    disco();
  
  }
  noLoop();
}

function blackTie(){
  push();

    translate(width/2, height/2);

    if(nameOnToggle){
      scale(0.85);
    }

    // WORD MARK
    if(nameOnToggle){
      if(modeToggle){   //// WHITE BACKGROUND
        image(wordMarkB[swatchIndex][wordMarkIndex], -coreS/2, -coreS/2, coreS, coreS);
      } else {          //// BLACK BACKGROUND
        image(wordMarkW[swatchIndex][wordMarkIndex], -coreS/2, -coreS/2, coreS, coreS);
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
}

function disco(){
  var sizer = width/591.107;

  push();
    translate(0, height/2 - coreS/2);
    
    if(puncToggle && puncIndex == 9){     ///// IF PUNCTUATION IS ON AND THE AMPERSAND      
      translate(width/2, height/2);
      scale(0.85);
      translate(-width/2, -height/2);
      
      // var ampBump = -coreS * 92.8499/591.107;
      var ampBump = -coreS * 80/591.107;

      translate(ampBump, 0);
    }
    
    scale(sizer);
    
    if(discoOverlay == false){     ///// IF PUNCTUATION IS ON AND THE AMPERSAND
      if(puncToggle){
        noStroke();
        fill(discoCol[discoColIndex][1]);
  
        if(discoOffset){ translate(discoOffsetX[0], discoOffsetY[0])};                  ////// RANDOM OFFSET

        drawPunc();
      }
    }

    if(outlineToggle){
      noFill();
      stroke(discoCol[discoColIndex][0]);

      if(discoOffset){ translate(discoOffsetX[1], discoOffsetY[1])};                  ////// RANDOM OFFSET

      if(outlineIndex == 0){              ////// THICK OUTLINE AND FILL
        strokeWeight(coreS * 40/591.107);
        fill(discoCol[discoColIndex][0]);
        drawBase(false); 
      } else if(outlineIndex == 1){      ////// THIN OUTLINE
        if(baseToggle == false){
          strokeWeight(coreS * (15/591.107)/2);
        } else {
          strokeWeight(coreS * 15/591.107);
        }
        drawBase(true);
      } else if(outlineIndex == 2){      ////// THICK OUTLINE
        if(baseToggle == false){
          strokeWeight(coreS * (40/591.107)/2);
        } else {
          strokeWeight(coreS * 40/591.107);
        }
        drawBase(true);
      }
    }

    if(baseToggle){
      if(discoOffset){ translate(discoOffsetX[2], discoOffsetY[2])};                  ////// RANDOM OFFSET

      fill(discoCol[discoColIndex][2]);
      noStroke();
      drawBase(true);
    }

    if(inlineToggle){
      if(discoOffset){ translate(discoOffsetX[3], discoOffsetY[3])};                  ////// RANDOM OFFSET

      noStroke();
      fill(discoCol[discoColIndex][1]);

      drawInline();
    }
    if(discoOverlay && puncToggle){
      if(discoOffset){ translate(discoOffsetX[4], discoOffsetY[4])};                  ////// RANDOM OFFSET

      noStroke();
      fill(discoCol[discoColIndex][1]);

      drawPunc();
    }

  pop();

  noLoop();
}

function windowResized(){
  canvasDiv = document.getElementById("logoGen");
  coreS = canvasDiv.offsetWidth;

  resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
}

