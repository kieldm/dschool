function setRadioMode(val){
  var holdToggle = modeToggle;

  if(val == 0){              /////////////// BLACK BKGD
    modeToggle = false;
    for(var m = 0; m < baseCount; m++){
      if(baseIndexToggles[m]){
        document.getElementById("d"+m).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
      } else {
        document.getElementById("d"+m).style.filter = "invert(0)";
      }
    }

    for(var m = 0; m < puncCount; m++){
      document.getElementById("p"+m).style.filter = "invert(0)";
    }
    for(var m = 0; m < inlineCount; m++){
      document.getElementById("i"+m).style.filter = "invert(0)";
    }
  } else {                    /////////////// WHITE BKGD
    modeToggle = true;
  
    for(var m = 0; m < baseCount; m++){
      if(baseIndexToggles[m]){
        document.getElementById("d"+m).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
      } else {
        document.getElementById("d"+m).style.filter = "invert(1)";
      }
    }
    for(var m = 0; m < puncCount; m++){
      document.getElementById("p"+m).style.filter = "invert(1)";
    }
    for(var m = 0; m < inlineCount; m++){
      document.getElementById("i"+m).style.filter = "invert(1)";
    }
  }

  if(puncIndex != null){
    document.getElementById("p"+puncIndex).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  }
  if(inlineIndex != null){
    document.getElementById("i"+inlineIndex).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  }

  if(holdToggle != modeToggle){
    const root = document.documentElement;
    const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    const currentSecondary = getComputedStyle(root).getPropertyValue('--secondary-color').trim();
  
    // Swap the values
    root.style.setProperty('--primary-color', currentSecondary);
    root.style.setProperty('--secondary-color', currentPrimary);
  }

  loop();
}

function setHorzSpace(val){
  xSpaceFac = map(val, 0, 100, 0, 1);

  console.log("HORZ val: " + val + "and xSpaceFac: " + xSpaceFac);

  figurePattern();

  loop();
}

function setVertSpace(val){
  ySpaceFac = map(val, 0, 100, 0, 1);

  console.log("Vert val: " + val + "and ySpaceFac: " + ySpaceFac);

  figurePattern();
  
  loop();
}

function setMarkScale(val){
  markScale = map(val, 0, 100, 0.5, 2.5);

  console.log("unitSize val: " + val + "and markScale: " + markScale);

  figurePattern();
  
  loop();
}

function setUnitRot(val){
  unitRot = map(val, 0, 100, -PI, PI);
  
  console.log("unitRotation val: " + val + "and unitRot: " + unitRot);

  loop();
}

function setRadioOffset(val){
  if(val == 0){
    offsetToggle = true;

  } else if(val == 1){
    offsetToggle = false;

  }

  loop();
}

function setGridAng(val){
  gridAngFac = map(val, 0, 100, -1, 1);

  console.log("gridOffset val: " + val + "and gridAngFac: " + gridAngFac);

  figurePattern();

  loop();
}

function setCoreAng(val){
  coreAng = map(val, 0, 100, -PI/4, PI/4);

  console.log("gridAngle val: " + val + "and coreAng: " + coreAng);

  figurePattern();

  loop();
}

function setRadioFlip(val){
  if(val == 0){
    flipToggle = false;
    // widthFac = 140;
    // heightFac = 150;

  } else if(val == 1){
    flipToggle = true;
    // widthFac = 150;
    // heightFac = 150;

  }

  figurePattern();

  loop();
}

function setColMode(val){
  colMode = val;

  if(colMode == 0){
    document.getElementById("defaultColMode").style.display = "block";
    document.getElementById("discoColMode").style.display = "none";
    document.getElementById("discoButton").style.display = "none";
    document.getElementById("discoOutlineMode").style.display = "none";
    
  } else {
    document.getElementById("defaultColMode").style.display = "none";
    document.getElementById("discoColMode").style.display = "block";
    document.getElementById("discoButton").style.display = "block";
    document.getElementById("discoOutlineMode").style.display = "block";

  }

  loop();
}

function setDiscoColIndex(val){
  discoColIndex += val;

  if(discoColIndex < 0){
    discoColIndex = 18;
  } else if(discoColIndex > 18){
    discoColIndex = 0;
  }

  console.log("DiscoColIndex: " + discoColIndex)
  showDiscoColVisual(discoColIndex);

  loop();
}

function setSwatchIndex(val){
  swatchIndex += val;

  if(swatchIndex < 0){
    swatchIndex = 27;
  } else if(swatchIndex > 27){
    swatchIndex = 0;
  }

  console.log("swatchIndex: " + swatchIndex)
  showColorVisual(swatchIndex);

  loop();
}

function runRandomColorPlace(){
  var test0 = discoCol[discoColIndex][0];
  var test1 = discoCol[discoColIndex][1];

  while(test0 == discoCol[discoColIndex][0] && test1 == discoCol[discoColIndex][1]){
    for (let i = discoCol[discoColIndex].length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [discoCol[discoColIndex][i], discoCol[discoColIndex][j]] = [discoCol[discoColIndex][j], discoCol[discoColIndex][i]]; // Swap elements
    }
  }
  console.log("RANDOM COLOR RUN PLACEMENT");

  loop();
}

function setBaseIndex(val){
  baseIndexToggles[val] = !baseIndexToggles[val];

  if(baseIndexToggles[val]){
    document.getElementById("d"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  } else {
    if(modeToggle){
      document.getElementById("d"+val).style.filter = "invert(1)";
    } else {
      document.getElementById("d"+val).style.filter = "invert(0)";
    }
  }

  baseIndexSet = [];
  for(var m = 0; m < baseCount; m++){
    if(baseIndexToggles[m]){
      baseIndexSet[baseIndexSet.length] = m;
    }
  }

  if(baseIndexSet.length < 1){
    console.log("NO BASE INDEXES");
    noBaseToggles = true;
  } else {
    console.log("YES BASE INDEXES");
    noBaseToggles = false;
  }

  console.log("BASE INDEX:");
  console.log(baseIndexSet);

  loop();
}

function setOutlineIndex(val){
  outlineIndexToggles[val] = !outlineIndexToggles[val];

  if(outlineIndexToggles[val]){
    document.getElementById("o"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  } else {
    if(modeToggle){
      document.getElementById("o"+val).style.filter = "invert(1)";
    } else {
      document.getElementById("o"+val).style.filter = "invert(0)";
    }
  }

  outlineIndexSet = [];
  for(var m = 0; m < outlineCount; m++){
    if(outlineIndexToggles[m]){
      outlineIndexSet[outlineIndexSet.length] = m;
    }
  }

  if(outlineIndexSet.length < 1){
    console.log("NO OUTLINE INDEXES");
    noOutlineToggles = true;
  } else {
    console.log("YES OUTLINE INDEXES");
    noOutlineToggles = false;
  }

  console.log(outlineIndexSet);
  console.log(outlineIndexToggles);

  loop();
}

function setPuncIndex(val){
  puncIndexToggles[val] = !puncIndexToggles[val];

  if(puncIndexToggles[val]){
    document.getElementById("p"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  } else {
    if(modeToggle){
      document.getElementById("p"+val).style.filter = "invert(1)";
    } else {
      document.getElementById("p"+val).style.filter = "invert(0)";
    }
  }

  puncIndexSet = [];
  for(var m = 0; m < puncCount; m++){
    if(puncIndexToggles[m]){
      puncIndexSet[puncIndexSet.length] = m;
    }
  }

  if(puncIndexSet.length < 1){
    console.log("NO PUNC INDEXES");
    noPuncToggles = true;
  } else {
    console.log("YES PUNC INDEXES");
    noPuncToggles = false;
  }

  console.log(puncIndexSet);

  loop();
}

function setInlineIndex(val){
  for(var m = 0; m < inlineCount; m++){
    if(modeToggle){
      document.getElementById("i"+m).style.filter = "invert(1)";
    } else {
      document.getElementById("i"+m).style.filter = "invert(0)";
    }
  }

  if(val == inlineIndex){
    inlineOn = false;
    inlineIndex = null;
  } else {
    inlineOn = true;
    inlineIndex = val;
    document.getElementById("i"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  }

  loop();
}

function setBkgdColor(val){
  if(val == bkgdMode){
    //////// DO NOTHING
  } else {
    bkgdMode = val;
    if(val == 0){
      document.getElementById("bkgd0").style.display = "block";
      document.getElementById("bkgd1").style.display = "none";
      bkgdColor = color('#000000');
      foreColor = color('#ffffff');

    } else if(val == 1){
      document.getElementById("bkgd0").style.display = "none";
      document.getElementById("bkgd1").style.display = "block";
      bkgdColor = color('#ffffff');
      foreColor = color('#000000');
    }
  }

  loop();
}

function runPatternSave(){
  console.log("RUN PATTERN SAVE");

  if(saveToggle == 0){
    console.log("SAVE SVG!")
    save('dschool_pattern.svg');

  } else if(saveToggle == 1){
    console.log("SAVE PNG!")
    save('dschool_pattern.png');

  }
}

function setSaveToggle(val){
  saveToggle = val;

  console.log("saveToggle: " + saveToggle);

  loop();
}

// function setPatternPreset(val){
//   resetPattern();

//   if(val == 1){                           //////////// PRESET 1
//     ySpaceFac = 0.1;
//     offsetToggle = false;
//     flipToggle = true;

//     document.getElementById("vertSpace").value = 10;
//     document.getElementById("radioOffset0").checked = false;
//     document.getElementById("radioOffset1").checked = true;
//     document.getElementById("radioFlip0").checked = false;
//     document.getElementById("radioFlip1").checked = true;

//   } else if(val == 2){                    //////////// PRESET 2
//     ySpaceFac = 0.1;
//     markScale = 1.7
//     offsetToggle = false;
//     flipToggle = true;

//     baseIndexSet[0] = 2;   
//     baseIndexToggles[0] = false;
//     baseIndexToggles[2] = true;
//     document.getElementById("d2").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";

//     inlineOn = false;
//     puncOn = false;

//     if(modeToggle){
//       document.getElementById("d0").style.filter = "invert(1)";
//       document.getElementById("i0").style.filter = "invert(1)";
//       document.getElementById("p0").style.filter = "invert(1)";
//     } else {
//       document.getElementById("d0").style.filter = "invert(0)";
//       document.getElementById("i0").style.filter = "invert(0)";
//       document.getElementById("p0").style.filter = "invert(0)";
//     }

//     document.getElementById("vertSpace").value = 10;
//     document.getElementById("markScale").value = 60;
//     document.getElementById("radioOffset0").checked = false;
//     document.getElementById("radioOffset1").checked = true;
//     document.getElementById("radioFlip0").checked = false;
//     document.getElementById("radioFlip1").checked = true;

//     document.getElementById("bkgd0").style.display = "block";
//     document.getElementById("bkgd1").style.display = "none";
//     bkgdColor = color('#000000');
//     foreColor = color('#ffffff');

//   } else if(val == 3){                    //////////// PRESET 3
//     ySpaceFac = 0.38;
//     document.getElementById("vertSpace").value = 38;

//     xSpaceFac = 0.21;
//     document.getElementById("horzSpace").value = 21;

//     markScale = 1.72
//     document.getElementById("markScale").value = 61;

//     gridAngFac = 1;
//     document.getElementById("gridAng").value = 100;

//     baseIndexSet[0] = 0;
//     baseIndexSet[1] = 2;
//     baseIndexToggles[0] = true;
//     baseIndexToggles[2] = true;
//     document.getElementById("d2").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
//     inlineOn = false;
//     puncIndex = 7;
//     document.getElementById("p7").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";

//     if(modeToggle){
//       document.getElementById("i0").style.filter = "invert(1)";
//       document.getElementById("p0").style.filter = "invert(1)";
//     } else {
//       document.getElementById("i0").style.filter = "invert(0)";
//       document.getElementById("p0").style.filter = "invert(0)";
//     }

//     document.getElementById("bkgd0").style.display = "block";
//     document.getElementById("bkgd1").style.display = "none";
//     bkgdColor = color('#000000');
//     foreColor = color('#ffffff');
//   } else if(val == 4){                    //////////// PRESET 4
//     ySpaceFac = 0.0;
//     document.getElementById("vertSpace").value = 0;

//     markScale = 1.66;
//     document.getElementById("markScale").value = 58;

//     flipToggle = true;
//     document.getElementById("radioFlip0").checked = false;
//     document.getElementById("radioFlip1").checked = true;

//     baseIndexSet[1] = 5;
//     baseIndexToggles[5] = true;
//     document.getElementById("d5").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";

//     puncOn = false;
//     if(modeToggle){
//       document.getElementById("p0").style.filter = "invert(1)";
//     } else {
//       document.getElementById("p0").style.filter = "invert(0)";
//     }
//   } else if(val == 5){                    //////////// PRESET 5
//     ySpaceFac = 0.0;
//     document.getElementById("vertSpace").value = 0;

//     markScale = 1.66;
//     document.getElementById("markScale").value = 58;

//     flipToggle = true;
//     document.getElementById("radioFlip0").checked = false;
//     document.getElementById("radioFlip1").checked = true;

//     baseIndexSet[1] = 5;
//     baseIndexToggles[5] = true;
//     document.getElementById("d5").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";

//     puncOn = false;
//     if(modeToggle){
//       document.getElementById("p0").style.filter = "invert(1)";
//     } else {
//       document.getElementById("p0").style.filter = "invert(0)";
//     }
//   }

//   figurePattern();

//   loop();
// }

// function resetPattern(){
//   bkgdMode = 1;

//   modeToggle = true;

//   xSpaceFac = 0.33;
//   xSpace = 165;
//   ySpaceFac = 0.33;
//   ySpace = 170;

//   baseIndex = 0;
//   baseIndexSet = [];
//   baseIndexToggles = [];
//   noBaseToggles = false;
  
//   inlineOn = true;
//   inlineIndex = 0;
  
//   puncOn = true;
//   puncIndex = 0;
  
//   outlineIndex = 4;
  
//   markScale = 1;
//   offsetToggle = true;
//   flipToggle = false;
  
//   unitRot = 0;
  
//   gridAngFac = 0;
//   gridAng = 0;
//   coreAng = 0;
  
//   saveToggle = 1;

//   document.getElementById("d0").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
//   for(var m = 1; m < baseCount; m++){
//     if(modeToggle){
//       document.getElementById("d"+m).style.filter = "invert(1)";
//     } else {
//       document.getElementById("d"+m).style.filter = "invert(0)";
//     }
//   }

//   document.getElementById("i0").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
//   for(var m = 1; m < inlineCount; m++){
//     if(modeToggle){
//       document.getElementById("i"+m).style.filter = "invert(1)";
//     } else {
//       document.getElementById("i"+m).style.filter = "invert(0)";
//     }
//   }

//   document.getElementById("p0").style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
//   for(var m = 1; m < puncCount; m++){
//     if(modeToggle){
//       document.getElementById("p"+m).style.filter = "invert(1)";
//     } else {
//       document.getElementById("p"+m).style.filter = "invert(0)";
//     }
//   }

//   baseIndexSet[0] = 0;
//   baseIndexToggles[0] = true;
//   for(var m = 1; m < baseIndex; m++){
//     baseIndexToggles[m] = false;
//   }

//   document.getElementById("horzSpace").value = 33;
//   document.getElementById("vertSpace").value = 33;
//   document.getElementById("markScale").value = 25;
//   document.getElementById("unitRot").value = 50;
//   document.getElementById("gridAng").value = 50;
//   document.getElementById("coreAng").value = 50;
//   document.getElementById("radioOffset0").checked = true;
//   document.getElementById("radioOffset1").checked = false;
//   document.getElementById("radioFlip0").checked = true;
//   document.getElementById("radioFlip1").checked = false;
//   document.getElementById("bkgd0").style.display = "none";
//   document.getElementById("bkgd1").style.display = "block";
//   bkgdColor = color('#ffffff');
//   foreColor = color('#000000');
// }
