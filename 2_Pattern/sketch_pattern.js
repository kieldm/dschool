var bkgdColor, foreColor;
var bkgdMode = 1;

var modeToggle = true;

var xCount, yCount;

var xSpaceFac = 0.33;
var xSpace = 165;
var ySpaceFac = 0.33;
var ySpace = 170;

var baseIndex = 0;
var baseCount = 8;
var baseIndexSet = [];
var baseIndexToggles = [];
var noBaseToggles = false;

var inlineOn = true;
var inlineIndex = 0;
var inlineCount = 2;

var puncIndex = 0;
var puncCount = 10;
var puncIndexSet = [];
var puncIndexToggles = [];
var noPuncToggles = false;

var outlineIndex = 0;
var outlineCount = 4;
var outlineIndexSet = [];
var outlineIndexToggles = [];
var noOutlineToggles = true;

var pdIndex = 0
var pdCount = 12
var pdIndexSet = [];
var pdIndexToggles = [];

var overlayToggle = false;

var pickDmode = false;

var swatchCol = [];

let swatchIndex = 0;
var swatchVisuals = [];
var swatchCount = 28;

var discoColVisual = [];
var discoColSetCount = 11;

var colMode = 0; // 0 = default, 1 = disco
var discoCol = [];
var discoColIndex = 4;

var bkgdIndex = 0;
var bkgdCount = 2;

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

var holdHeight;

function preload(){

}

function setup(){
  canvasDiv = document.getElementById("patternGen");
  
  holdHeight = canvasDiv.offsetHeight;

  canvas = createCanvas(canvasDiv.offsetWidth, holdHeight, SVG);
  // canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
  canvas.parent("patternGen");
  windowResized();

  pixelDensity(2);

  bkgdColor = color('#ffffff');
  foreColor = color('#000000');
  setColors();

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


  pdIndexSet[0] = null;
  for(var m = 0; m < pdCount; m++){
    pdIndexToggles[m] = false;
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

  console.log("CURRE NOOUTLINETOGGLE SET: " + noOutlineToggles)

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

        noStroke();

        if(pickDmode){        //////////// PICK D MODE
          if(colMode == 0){
            fill(swatchCol[swatchIndex]);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n)%3]);
          }
          drawPickD(n%pdIndexSet.length);

        } else {             //////////// REGULAR D MODE
     
          ////////////////// DRAW PUNC, On top
          if(overlayToggle == false){
            if(colMode == 0){
              fill(swatchCol[swatchIndex]);
            } else {
              fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
            }
            push();
              if(noOutlineToggles == false){
                movePunc(n%puncIndexSet.length);
              } 
              drawPunc(n%puncIndexSet.length);
            pop();
          }

          noStroke();
          if(colMode == 0){
            fill(swatchCol[swatchIndex]);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n+2)%3]);
          }
          drawOutlineD(0, n%outlineIndexSet.length);

          ////////////////// DRAW BASEs    
          if(colMode == 0){
            fill(foreColor);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n+0)%3]);
          }
          drawBase(n%baseIndexSet.length);

          noStroke();
          if(inlineOn){
            if(noBaseToggles){
              if(colMode == 0){
                fill(foreColor);
              } else {
                fill(discoCol[discoColIndex][bkgdIndex][(n+0)%3]);
              }
            } else {
              if(colMode == 0){
                fill(bkgdColor);
              } else {
                fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
              }
            }
            drawInline();
          }

          ////////////////// DRAW PUNC, On top
          if(overlayToggle){
            if(colMode == 0){
              fill(swatchCol[swatchIndex]);
            } else {
              fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
            }
            push();
              if(noOutlineToggles == false){
                movePunc(n%puncIndexSet.length);
              } 
              drawPunc(n%puncIndexSet.length);
            pop();
          }
        }

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

        if(m%2 == 0){
          rotate(PI);
          translate(-widthFac * 0.95, -heightFac * 3.45);
        }

        noStroke();
        if(pickDmode){        //////////// PICK D MODE
          if(colMode == 0){
            fill(swatchCol[swatchIndex]);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n)%3]);
          }
          drawPickD(n%pdIndexSet.length);

        } else {            //////////// REGULAR D MODE    
          if(overlayToggle == false){
            noStroke();
            if(colMode == 0){
              fill(swatchCol[swatchIndex]);
            } else {
              fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
            }
            push();
              if(noOutlineToggles == false){
                movePunc(n%puncIndexSet.length);
              } 
              drawPunc(n%puncIndexSet.length);
            pop();
          }

          noStroke();
          if(colMode == 0){
            fill(swatchCol[swatchIndex]);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n+2)%3]);
          }
          drawOutlineD(0, n%outlineIndexSet.length);

          ////////////////// DRAW BASEs   
          if(colMode == 0){
            fill(foreColor);
          } else {
            fill(discoCol[discoColIndex][bkgdIndex][(n+0)%3]);
          }
          drawBase(n%baseIndexSet.length);
          ////////////////// DRAW INLINEs        
  
          noStroke();
          if(inlineOn){
            if(noBaseToggles){
              if(colMode == 0){
                fill(foreColor);
              } else {
                fill(discoCol[discoColIndex][bkgdIndex][(n+0)%3]);
              }
            } else {
              if(colMode == 0){
                fill(bkgdColor);
              } else {
                fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
              }
            }
            drawInline();
          }
  
          if(overlayToggle){
            noStroke();
            if(colMode == 0){
              fill(swatchCol[swatchIndex]);
            } else {
              fill(discoCol[discoColIndex][bkgdIndex][(n+1)%3]);
            }
            push();
              if(noOutlineToggles == false){
                movePunc(n%puncIndexSet.length);
              }             
              drawPunc(n%puncIndexSet.length);
            pop();
          }
        }

      pop();
    }
  }
}

function windowResized(){
  canvasDiv = document.getElementById("patternGen");
  
  console.log("CANVAS WIDTH: " + canvasDiv.offsetWidth);
  console.log("CANVAS HEIGHT: " + canvasDiv.offsetHeight);

  // resizeCanvas(canvasDiv.offsetWidth, holdHeight, SVG);
  resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, SVG);

  figurePattern();

  console.log("RESIZED FOR PREVIEW");
  console.log("THIS WIDTH: " + width);
  console.log("THIS HEIGHT: " + height);

  loop();
}

function resizeForSave(){
  canvasDiv = document.getElementById("patternGen");

  resizeCanvas(canvasDiv.offsetWidth * 2, canvasDiv.offsetHeight * 2, SVG);

  figurePattern();

  console.log("RESIZED FOR SAVE");
  console.log("THIS WIDTH: " + width);
  console.log("THIS HEIGHT: " + height);
  
  loop();
}

function setColors(){
  swatchCol = [
    "#ee272a",  // d.School Red
    "#000000",  //
    "#ababa9",  // dark gray
    "#8c1515",  // cardinal red
    "#ff5e00",  // orange
    "#f99200",  //
    "#fbb03b",  //
    "#ffd600",  //
    "#d8a300",  // gold
    "#ffa89e",  // light pink
    "#ff85c2",  //
    "#ff3399",  //
    "#c14cff",  //
    "#d700ff",  //
    "#e766ff",  //
    "#ff9dff",  //
    "#9c6bff",  //
    "#607cff",  // blue
    "#8da1ff",  //
    "#00c3ff",  //
    "#66dbff",  //
    "#00ffff",  //
    "#00bf9d",  // green
    "#00b642",  //
    "#6ab300",  //
    "#85e03b",  //
    "#00ff5c",  //
    "#d8ff21",  //
    "#d5d5d4"   // light gray
  ]

  discoCol[0] = [];       // COLOR SET 1
  discoCol[0][0] = [
    '#000000',
    '#000000',
    "#ee272a",
  ];
  discoCol[0][1] = [  // Invert
    '#ffffff',
    '#ffffff',
    "#ee272a",
  ]

  discoCol[1] = [];       // COLOR SET 2
  discoCol[1][0] = [
    '#000000',
    '#000000',
    '#000000'
  ];
  discoCol[1][1] = [  // Invert
    '#ffffff',
    '#ffffff',
    '#ffffff'
  ]

  discoCol[2] = [];       // COLOR SET 3
  discoCol[2][0] = [
    '#ee272a',
    '#ffffff',    // outline
    '#000000'
  ];
  discoCol[2][1] = [  // Invert
    '#ee272a',
    '#000000',    // outline
    '#ffffff'
  ]

  discoCol[3] = [];       // COLOR SET 4
  discoCol[3][0] = [
    '#fdc9c3',
    '#a47c52',
    '#7c4a1a'
  ];
  discoCol[3][1] = [  // Invert
    '#7c4a1a',
    '#a47c52',
    '#fdc9c3'
  ]

  discoCol[4] = [];       // COLOR SET 5
  discoCol[4][0] = [
    '#79d0de',
    "#a4e183",
    '#565b39'
  ];
  discoCol[4][1] = [  // Invert
    '#565b39',
    "#a4e183",
    '#79d0de'
  ]

  discoCol[5] = [];       // COLOR SET 6
  discoCol[5][0] = [
    '#fdc9c3',
    '#07bd9b',
    '#006b70'
  ];
  discoCol[5][1] = [  // Invert
    '#006b70',
    '#07bd9b',
    '#fdc9c3'
  ]

  discoCol[6] = [];       // COLOR SET 7
  discoCol[6][0] = [
    '#fdc9c3',
    '#c2a4fd',
    '#006b70'
  ];
  discoCol[6][1] = [  // Invert
    '#006b70',
    '#c2a4fd',
    '#fdc9c3'
  ]

  discoCol[7] = [];       // COLOR SET 8
  discoCol[7][0] = [
    '#ded1fd',
    '#8b9ffd',
    '#001db2'
  ];
  discoCol[7][1] = [  // Invert
    '#001db2',
    '#8b9ffd',
    '#ded1fd'
  ]

  discoCol[8] = [];       // COLOR SET 9
  discoCol[8][0] = [
    '#fdcaca',
    '#c2a4fd',
    '#7d008a'
  ];
  discoCol[8][1] = [  // Invert
    '#7d008a',
    '#c2a4fd',
    '#fdcaca'
  ]

  discoCol[9] = [];       // COLOR SET 10
  discoCol[9][0] = [
    '#fdcaca',
    '#bf4dfd',
    '#001db2'
  ];
  discoCol[9][1] = [  // Invert
    '#001db2',
    '#bf4dfd',
    '#fdcaca'
  ]

  discoCol[10] = [];       // COLOR SET 11
  discoCol[10][0] = [
    '#f3aa37',
    "#ee272a",
    '#0b9ca8'
  ];
  discoCol[10][1] = [  // Invert
    '#0b9ca8',
    "#ee272a",
    '#f3aa37'
  ]
}