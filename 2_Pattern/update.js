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
    for(var m = 0; m < outlineCount; m++){
      document.getElementById("o"+m).style.filter = "invert(0)";
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
    for(var m = 0; m < outlineCount; m++){
      document.getElementById("o"+m).style.filter = "invert(1)";
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

function setOverlayToggle(val){
  overlayToggle = val;

  console.log("overlay toggle is now: " + overlayToggle);

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
    document.getElementById("monochromSelector").style.opacity = "100%";
    document.getElementById("monochromSelector").style.pointerEvents = "auto";
    document.getElementById("discoColorSelector").style.opacity = "25%";
    document.getElementById("discoColorSelector").style.pointerEvents = "none";
  } else {
    document.getElementById("discoColorSelector").style.opacity = "100%";
    document.getElementById("discoColorSelector").style.pointerEvents = "auto";
    document.getElementById("monochromSelector").style.opacity = "25%";
    document.getElementById("monochromSelector").style.pointerEvents = "none";
  }

  loop();
}

function setDiscoColIndex(val){
  discoColIndex += val;

  if(discoColIndex < 0){
    discoColIndex = discoColSetCount - 1;
  } else if(discoColIndex > discoColSetCount - 1){
    discoColIndex = 0;
  }

  document.getElementById("colorSet0").style.backgroundColor = discoCol[discoColIndex][bkgdIndex][0];
  document.getElementById("colorSet1").style.backgroundColor = discoCol[discoColIndex][bkgdIndex][1];
  document.getElementById("colorSet2").style.backgroundColor = discoCol[discoColIndex][bkgdIndex][2];

  console.log("DiscoColIndex: " + discoColIndex)

  loop();
}

function setSwatchIndex(val){
  swatchIndex += val;

  if(swatchIndex < 0){
    swatchIndex = swatchCol.length - 1;
  } else if(swatchIndex >= swatchCol.length){
    swatchIndex = 0;
  }

  document.getElementById("colorSetMono").style.backgroundColor = swatchCol[swatchIndex];

  console.log("swatchIndex: " + swatchIndex)

  loop();
}

// function runRandomColorPlace(){
//   var test0 = discoCol[discoColIndex][0];
//   var test1 = discoCol[discoColIndex][1];

//   while(test0 == discoCol[discoColIndex][0] && test1 == discoCol[discoColIndex][1]){
//     for (let i = discoCol[discoColIndex].length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [discoCol[discoColIndex][i], discoCol[discoColIndex][j]] = [discoCol[discoColIndex][j], discoCol[discoColIndex][i]]; // Swap elements
//     }
//   }
//   console.log("RANDOM COLOR RUN PLACEMENT");

//   loop();
// }

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
    resetPickDselections();
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
    resetPickDselections();
    console.log("YES OUTLINE INDEXES");
    noOutlineToggles = false;
  }

  console.log(outlineIndexSet);
  console.log(outlineIndexToggles);

  loop();
}

function setPdIndex(val){
  pdIndexToggles[val] = !pdIndexToggles[val];

  if(pdIndexToggles[val]){
    document.getElementById("pd"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  } else {
    if(modeToggle){
      document.getElementById("pd"+val).style.filter = "invert(1)";
    } else {
      document.getElementById("pd"+val).style.filter = "invert(0)";
    }
  }

  pdIndexSet = [];
  for(var m = 0; m < pdCount; m++){
    if(pdIndexToggles[m]){
      pdIndexSet[pdIndexSet.length] = m;
    }
  }

  if(pdIndexSet.length < 1){
    console.log("NO PD INDEXES");
    pickDmode = false;
  } else {
    resetOtherDselections();
    console.log("YES PD INDEXES");
    pickDmode = true;
  }

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
    resetPickDselections();
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
    resetPickDselections();
    inlineOn = true;
    inlineIndex = val;
    document.getElementById("i"+val).style.filter = "invert(1) sepia(1) hue-rotate(-60deg) saturate(100000%) brightness(1.0)";
  }

  loop();
}

function setBkgdColor(val){
  bkgdIndex += val;

  if(bkgdIndex < 0){
    bkgdIndex = bkgdCount - 1;
  } else if(bkgdIndex > bkgdCount - 1){
    bkgdIndex = 0;
  }

  if(bkgdIndex == 0){
    bkgdColor = color("#ffffff");
    foreColor = color("#000000");
  } else if(bkgdIndex == 1){
    bkgdColor = color("#000000");
    foreColor = color("#ffffff");    
  }

  document.getElementById("bkgdColor").style.backgroundColor = bkgdColor;
  console.log("BkgdIndex is: " + bkgdIndex);

  loop();
}

function runPatternSave(){
  console.log("RUN PATTERN SAVE");

  resizeForSave();

  if(saveToggle == 0){
    console.log("SAVE SVG!")
    save('dschool_pattern.svg');

  } else if(saveToggle == 1){
    console.log("SAVE PNG!")
    save('dschool_pattern.png');

  }

  windowResized();

  loop();
}

function setSaveToggle(val){
  saveToggle = val;

  console.log("saveToggle: " + saveToggle);

  loop();
}

// function setSaveMode(val){
//   saveMode = val;
// }

// function runExport(){
//   if(saveMode == 1 || saveMode == 3){
//     alphaOn = true;
//   }

//   resizeForSave();

//   if(saveMode == 0 || saveMode == 1){
//     console.log("SAVE SVG!")
//     save('dschool_logo.svg');

//   } else if(saveMode == 2 || saveMode == 3){
//     console.log("SAVE PNG!")
//     save('dschool_logo.png');
//   }

//   windowResized();

//   alphaOn = false;
//   loop();
// }