var invertToggle = false;
var bkgdColor, foreColor;
var discoColor = [];
var coreScaler = 1;

var invertToggleIndex = 0;

var baseDindex = 0;
var baseDcount = 6;
var baseDtoggle = true;

var discoDindex = 0;
var discoDcount = 11;
var discoDtoggle = true;

var inlineToggle = true;
var inlineDindex = 0;
var inlineDcount = 2;

var dotColorIndex = 0;
var dotColor = [];
var overlapColor = [];

var puncIndex = 0;
var puncCount = 10;
var puncToggle = true;

var outlineIndex = 3;
var outlineMode = 0;
var outlineCount = 4;
var outlineToggle = true;

var lockupToggle = true;
var lockupChromeToggle = true;
var lockupIndex = 0;
var lockupCount = 3;

var discoColorIndex = 0;
var discoColorCount = 11;

var discoAlignToggle = true;
var discoAlignRan = 0;
var monochromeToggle = false;

var saveMode = 0;
var alphaOn = false;

var overlayToggle = false;

var radioVibe = 0;

function setup(){
  var container = document.getElementById("logoGen");
  let canvas = createCanvas(container.offsetHeight, container.offsetHeight, SVG);
  canvas.parent("logoGen");
  windowResized();

  bkgdColor = color('#ffffff');
  foreColor = color('#000000');
  
  setColors();

}

function draw(){
  clear();

  if(radioVibe == 0){
    drawBlackTie();
  } else if(radioVibe == 1){
    drawDisco();
  }

  noLoop();
}

function drawBlackTie(){     ////////////////////////////////////////////////////////////  BLACK TIE
  if(lockupToggle){                /////////////// LOCK UP INFO, CIRCLE
    if(lockupIndex == 0){
      if(alphaOn == false){
        background(foreColor);
      }

      noStroke();
      fill(bkgdColor);
      ellipse(width/2, height/2, width, height);
    }
  } else {
    if(alphaOn == false){
      background(bkgdColor);    
    }
  }

  scale(coreScaler);

  if(lockupToggle && lockupIndex > 0){    /////////////// LOCK UP INFO, TEXT
    translate(width/2, height/2);
    scale(882/1000);
    translate(-width/2, -height/2);

    if(lockupIndex == 1){
      drawLockupStanford();
    } else {
      drawLockupHasso();
    }

    translate(0, -80);
  }

  noStroke();                     /////////////// DOT
  fill(dotColor[dotColorIndex]);
  drawDot();

  noStroke();                     /////////////// BASE D
  if(monochromeToggle){
    fill(dotColor[dotColorIndex]);
  } else {
    fill(foreColor);
  }
  drawBaseD(baseDindex);

  if(monochromeToggle){           /////////////// OVERLAP INFO
    fill(bkgdColor);
    drawOverlaySlice();
  } else if(overlayToggle){
    fill(overlapColor[dotColorIndex]);
    drawOverlaySlice();
  }

  if(inlineToggle){               /////////////// INLINE D
    fill(bkgdColor);
    drawInlineD(inlineDindex);
  }
}

function drawDisco(){     ////////////////////////////////////////////////////////////  DISCO
  if(alphaOn == false){
    background(bkgdColor);
  }

  scale(coreScaler);

  if(discoAlignToggle == false){
    if(discoAlignRan == 0){ // TL
      translate(-15,-15);
    } else if(discoAlignRan == 1){  // TR
      translate(15,-15);
    } else if(discoAlignRan == 2){  // BR
      translate(15,15);
    } else if(discoAlignRan == 3){  // BL
      translate(-15,15);
    } 
  }

  if(puncToggle && overlayToggle == false){
    push();
      if(outlineToggle){
        translate(0, 11.344);
      }
      if(outlineMode == 1){
        translate(12.6109, -9.1826);
      }
      noStroke();                            /////////////// PUNCTUATION
      fill(discoColor[discoColorIndex][invertToggleIndex][2]);
      drawPunc(puncIndex);
    pop();
  }

  if(puncToggle && puncIndex == 7){
    translate(-89.03493, 0);
  }

  if(outlineToggle){   /////////////// OUTLINE BOT
    fill(discoColor[discoColorIndex][invertToggleIndex][3]);
    drawOutlineD(outlineMode, outlineIndex);
  }

  if(discoAlignToggle == false){
    if(discoAlignRan == 0){ // TL
      translate(30,30);
    } else if(discoAlignRan == 1){  // TR
      translate(-30,30);
    } else if(discoAlignRan == 2){  // BR
      translate(-30,-30);
    } else if(discoAlignRan == 3){  // BL
      translate(30,-30);
    } 
  }

  if(baseDtoggle){                          /////////////// BASE D
    fill(discoColor[discoColorIndex][invertToggleIndex][0]);
    drawDiscoD(discoDindex);
  }

  // if(outlineToggle && outlineIndex != 3){   /////////////// OUTLINE TOP
  //   fill(discoColor[discoColorIndex][invertToggleIndex][3]);
  //   drawOutlineD(outlineMode, outlineIndex);
  // }

  if(inlineToggle){                           /////////////// INLINE D
    fill(discoColor[discoColorIndex][invertToggleIndex][1]);
    drawInlineD(inlineDindex);
  }

  if(puncToggle && overlayToggle){
    push();
      if(outlineToggle){
        translate(0, 11.344);
      }
      if(outlineMode == 1){
        translate(12.6109, -9.1826);
      }
      push();
        if(puncToggle && puncIndex == 7){
          translate(89.03493, 0);
        }
        noStroke();                            /////////////// PUNCTUATION
        fill(discoColor[discoColorIndex][invertToggleIndex][2]);
        drawPunc(puncIndex);
      pop();

      if(inlineToggle == false &&
        outlineToggle == false &&
        baseDtoggle ) {
        if(discoDindex == 0 || discoDindex == 1 || discoDindex == 2){
          if(discoColor[discoColorIndex][invertToggleIndex][2] == "#ee272a"){
            fill("#b1040e");
            drawPuncOverlay(puncIndex);
          } else if(discoColor[discoColorIndex][invertToggleIndex][2] == "#ffffff" && discoColor[discoColorIndex][invertToggleIndex][0] == "#ffffff"){
            fill(0);
            drawPuncOverlay(puncIndex);
          } else if(discoColor[discoColorIndex][invertToggleIndex][2] == "#000000" && discoColor[discoColorIndex][invertToggleIndex][0] == "#000000"){
            fill(255);
            drawPuncOverlay(puncIndex);
          }
        }
      }
    pop();
  }
}

function windowResized(){
  let container = document.getElementById("logoGen");
  var coreS = container.offsetHeight;
  resizeCanvas(coreS, coreS, SVG);

  coreScaler = width/600;

  console.log("Width: " + width + " and Height: " + height + " and coreScaler is: " + coreScaler);

  loop();
}

function resizeForSave(){
  let container = document.getElementById("logoGen");
  resizeCanvas(1500, 1500, SVG);

  coreScaler = width/600;

  console.log("FOR SAVE! Width: " + width + " and Height: " + height + " and coreScaler is: " + coreScaler);

  loop();
}

function setColors(){
  dotColor = [
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

  overlapColor = [
    "#b1040e", // "#ee272a",  // d.School Red
    "#ababa9", // "#000000",  //  ????
    "#767674", // "#ababa9",  // dark gray
    "#3d0000", // "#8c1515",  // cardinal red // ????
    "#b1040e", // "#ff5e00",  // orange
    "#bf4d00", // "#f99200",  //
    "#ff5e00", // "#fbb03b",  //
    "#f99200", // "#ffd600",  //
    "#8c6239", // "#d8a300",  // gold
    "#db6b85", // "#ffa89e",  // light pink
    "#d8007d", // "#ff85c2",  //
    "#b1040e", // "#ff3399",  //
    "#8500b9", // "#c14cff",  //
    "#8500b9", // "#d700ff",  //
    "#a100bf", // "#e766ff",  //
    "#d700ff", // "#ff9dff",  //
    "#6027c9", // "#9c6bff",  //
    "#0050ff", // "#607cff",  // blue
    "#364ac5", // "#8da1ff",  //
    "#0050ff", // "#00c3ff",  //
    "#607cff", // "#66dbff",  //
    "#005f97", // "#00ffff",  //
    "#00696f", // "#00bf9d",  // green
    "#008100", // "#00b642",  //
    "#85e03b", // "#6ab300",  //
    "#6ab300", // "#85e03b",  //
    "#00b642", // "#00ff5c",  //
    "#8cc63f", // "#d8ff21",  //
    "#979694"  // "#d5d5d4"   // light gray
  ]


  //// DISCO COLOR [PALETTE #][INVERT][COLORS]
  discoColor[0] = [];       // COLOR SET 1
  discoColor[0][0] = [
    '#000000',
    '#000000',
    "#ee272a",
    '#000000'
  ];
  discoColor[0][1] = [  // Invert
    '#ffffff',
    '#ffffff',
    "#ee272a",
    '#ffffff'
  ]

  discoColor[1] = [];       // COLOR SET 2
  discoColor[1][0] = [
    '#000000',
    '#000000',
    "#000000",
    '#000000'
  ];
  discoColor[1][1] = [  // Invert
    '#ffffff',
    '#ffffff',
    "#ffffff",
    '#ffffff'
  ]

  discoColor[2] = [];       // COLOR SET 3
  discoColor[2][0] = [
    '#ee272a',
    '#ffffff',    // outline
    "#000000",
    '#000000'
  ];
  discoColor[2][1] = [  // Invert
    '#ee272a',
    '#000000',    // outline
    "#ffffff",
    '#ffffff'
  ]

  discoColor[3] = [];       // COLOR SET 4
  discoColor[3][0] = [
    '#fdc9c3',
    '#a47c52',
    "#a47c52",
    '#7c4a1a'
  ];
  discoColor[3][1] = [  // Invert
    '#7c4a1a',
    '#a47c52',
    "#a47c52",
    '#fdc9c3'
  ]

  discoColor[4] = [];       // COLOR SET 5
  discoColor[4][0] = [
    '#79d0de',
    '#ffffff',    // outline
    "#a4e183",
    '#565b39'
  ];
  discoColor[4][1] = [  // Invert
    '#565b39',
    '#ffffff',
    "#a4e183",
    '#79d0de'
  ]

  discoColor[5] = [];       // COLOR SET 6
  discoColor[5][0] = [
    '#fdc9c3',
    '#07bd9b',
    "#07bd9b",
    '#006b70'
  ];
  discoColor[5][1] = [  // Invert
    '#006b70',
    '#07bd9b',
    "#07bd9b",
    '#fdc9c3'
  ]

  discoColor[6] = [];       // COLOR SET 7
  discoColor[6][0] = [
    '#fdc9c3',
    '#c2a4fd',
    "#c2a4fd",
    '#006b70'
  ];
  discoColor[6][1] = [  // Invert
    '#006b70',
    '#c2a4fd',
    "#c2a4fd",
    '#fdc9c3'
  ]

  discoColor[7] = [];       // COLOR SET 8
  discoColor[7][0] = [
    '#ded1fd',
    '#8b9ffd',
    "#8b9ffd",
    '#001db2'
  ];
  discoColor[7][1] = [  // Invert
    '#001db2',
    '#8b9ffd',
    "#8b9ffd",
    '#ded1fd'
  ]

  discoColor[8] = [];       // COLOR SET 9
  discoColor[8][0] = [
    '#fdcaca',
    '#c2a4fd',
    "#c2a4fd",
    '#7d008a'
  ];
  discoColor[8][1] = [  // Invert
    '#7d008a',
    '#c2a4fd',
    "#c2a4fd",
    '#fdcaca'
  ]

  discoColor[9] = [];       // COLOR SET 10
  discoColor[9][0] = [
    '#fdcaca',
    '#bf4dfd',
    "#bf4dfd",
    '#001db2'
  ];
  discoColor[9][1] = [  // Invert
    '#001db2',
    '#bf4dfd',
    "#bf4dfd",
    '#fdcaca'
  ]

  discoColor[10] = [];       // COLOR SET 11
  discoColor[10][0] = [
    '#f3aa37',
    '#efcfac',
    "#ee272a",
    '#0b9ca8'
  ];
  discoColor[10][1] = [  // Invert
    '#0b9ca8',
    '#efcfac',
    "#ee272a",
    '#f3aa37'
  ]
}