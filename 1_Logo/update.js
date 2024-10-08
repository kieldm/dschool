function setRadioVibe(val){
  if(val == 0){           /////// BLACK TIE
    vibeToggle = true;

    document.getElementById('trBlackTieSet').style.display = "block";
    document.getElementById('trDiscoSet').style.display = "none";

    document.getElementById('b2BlackTieSet').style.display = "block";
    document.getElementById('b2DiscoSet').style.display = "none";

    document.getElementById('b3BlackTieSet').style.display = "block";
    document.getElementById('b3DiscoSet').style.display = "none";

  } else {                /////// DISCO
    vibeToggle = false;

    document.getElementById('trBlackTieSet').style.display = "none";
    document.getElementById('trDiscoSet').style.display = "block";

    document.getElementById('b2BlackTieSet').style.display = "none";
    document.getElementById('b2DiscoSet').style.display = "block";

    document.getElementById('b3BlackTieSet').style.display = "none";
    document.getElementById('b3DiscoSet').style.display = "block";

  }

  loop();
  console.log("Vibe set: " + val);
}

function runLogoSave(){
  console.log("RUN LOGO SAVE");

  if(saveToggle == 0 || saveToggle == 2){
    console.log("SAVE SVG!")
    save('dschool_logo.svg');

  } else if(saveToggle == 1 || saveToggle == 3){
    console.log("SAVE PNG!")
    save('dschool_logo.png');

  }
}

function runDiscoLogoSave(){
  console.log("RUN LOGO SAVE");

  if(discoSaveToggle == 0 || saveToggle == 2){
    console.log("DISCO SAVE SVG!")
    save('disco_dschool_logo.svg');

  } else if(discoSaveToggle == 1 || saveToggle == 3){
    console.log("DISCO SAVE PNG!")
    save('disco_dschool_logo.png');

  }
}

function setRadioMode(val){
  console.log("RUN SWAP COLORS");

  var holdToggle = modeToggle;

  if(val == 0){              /////////////// COLOR ON
    bkgdColor = color('#FFFFFF');

    modeToggle = true;
    document.getElementById('baseCenter').style.filter = "invert(0)";
    document.getElementById('inlineCenter').style.filter = "invert(0)";
    document.getElementById('punctuationCenter').style.filter = "invert(0)";
    document.getElementById('outlineCenter').style.filter = "invert(0)";

    document.getElementById('blackDotOverlaySet').style.display = "flex";
    document.getElementById('blackDotOverlaySet2').style.display = "flex";
    document.getElementById('whiteDotOverlaySet').style.display = "none";
    document.getElementById('whiteDotOverlaySet2').style.display = "none";

    document.getElementById('wordMarkCenterBstan').style.display = "block";
    document.getElementById('wordMarkCenterWstan').style.display = "none";
    document.getElementById('wordMarkCenterBhasso').style.display = "block";
    document.getElementById('wordMarkCenterWhasso').style.display = "none";
    document.getElementById('wordMarkCenterBdesign').style.display = "block";
    document.getElementById('wordMarkCenterWdesign').style.display = "none";

  } else if(val == 1){        /////////////// COLOR OFF
    bkgdColor = color('#000000');

    modeToggle = false;
    document.getElementById('baseCenter').style.filter = "invert(100)";
    document.getElementById('inlineCenter').style.filter = "invert(100)";
    document.getElementById('punctuationCenter').style.filter = "invert(100)";
    document.getElementById('outlineCenter').style.filter = "invert(100)";

    document.getElementById('blackDotOverlaySet').style.display = "none";
    document.getElementById('blackDotOverlaySet2').style.display = "none";
    document.getElementById('whiteDotOverlaySet').style.display = "flex";
    document.getElementById('whiteDotOverlaySet2').style.display = "flex";

    document.getElementById('wordMarkCenterBstan').style.display = "none";
    document.getElementById('wordMarkCenterWstan').style.display = "block";
    document.getElementById('wordMarkCenterBhasso').style.display = "none";
    document.getElementById('wordMarkCenterWhasso').style.display = "block";
    document.getElementById('wordMarkCenterBdesign').style.display = "none";
    document.getElementById('wordMarkCenterWdesign').style.display = "block";
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

function setBaseToggle(val){
  if(val == 0){        /////////////// BASE ON
    baseToggle = true;
    document.getElementById('baseCenter').style.opacity = "100%";
    document.getElementById('baseSelector').style.pointerEvents = "auto";

    if(dotColorToggle == false){        // IF BW MODE
      if(inlineToggle){           // IF INLINE TOGGLE IS ON
        setInlineToggle(1);
        document.getElementById('radioInlineToggle0').checked = false;
        document.getElementById('radioInlineToggle1').checked = true;

        setOverlayToggle(0);
        document.getElementById('radioOverlay0').checked = true;
        document.getElementById('radioOverlay1').checked = false;
      }

      document.getElementById('inlineToggle').style.opacity = "100%";
      document.getElementById('inlineToggle').style.pointerEvents = "auto";
    }

  } else if(val == 1){  /////////////// BASE OFF
    baseToggle = false;
    document.getElementById('baseCenter').style.opacity = "25%";
    document.getElementById('baseSelector').style.pointerEvents = "none";

    if(overlayToggle){
      console.log("OVERLAY TURNED TO OFF?");

      setOverlayToggle(1);
      document.getElementById('radioOverlay0').checked = false;
      document.getElementById('radioOverlay1').checked = true;
    }
  }

  console.log("baseToggle: " + baseToggle);

  loop();
}

function setInlineToggle(val){
  if(val == 0){        /////////////// INLINE ON
    inlineToggle = true;
    document.getElementById('inlineCenter').style.opacity = "100%";
    document.getElementById('inlineSelector').style.pointerEvents = "auto";

    if(dotColorToggle == false){        // IF BW MODE
      if(baseToggle){           // IF BASE TOGGLE IS ON
        setBaseToggle(1);
        document.getElementById('radioBaseToggle0').checked = false;
        document.getElementById('radioBaseToggle1').checked = true;

        setOverlayToggle(1);
        document.getElementById('radioOverlay0').checked = false;
        document.getElementById('radioOverlay1').checked = true;
      }

      document.getElementById('radioInlineToggle0').checked = true;
      document.getElementById('radioInlineToggle1').checked = false;
    }

  } else if(val == 1){  /////////////// INLINE OFF
    inlineToggle = false;
    document.getElementById('inlineCenter').style.opacity = "25%";
    document.getElementById('inlineSelector').style.pointerEvents = "none";

  }

  loop();
}

function setDotColorToggle(val){
  if(val == 0){             /////////////// COLOR
    dotColorToggle = true;
    document.getElementById('dotColorSelector').style.opacity = "100%";
    document.getElementById('dotColorSelector').style.pointerEvents = "auto";

    document.getElementById('dotColorSelector').style.opacity = "100%";
    document.getElementById('dotColorSelector').style.pointerEvents = "auto";

    document.getElementById('dotSettings').style.opacity = "100%";
    document.getElementById('dotSettings').style.pointerEvents = "auto";

  } else if(val == 1){      /////////////// B&W
    dotColorToggle = false;
    document.getElementById('dotColorSelector').style.opacity = "25%";
    document.getElementById('dotColorSelector').style.pointerEvents = "none";

    if(baseToggle && inlineToggle){
      document.getElementById('radioBaseToggle0').checked = true;
      document.getElementById('radioBaseToggle1').checked = false;
      setBaseToggle(0);
      document.getElementById('radioInlineToggle0').checked = false;
      document.getElementById('radioInlineToggle1').checked = true;
      setInlineToggle(1);

      document.getElementById('radioOverlay0').checked = true;
      document.getElementById('radioOverlay1').checked = false;
      setOverlayToggle(0);

    } else if(baseToggle){
      document.getElementById('radioOverlay0').checked = true;
      document.getElementById('radioOverlay1').checked = false;
      setOverlayToggle(0);

    } else if(inlineToggle){
      document.getElementById('radioOverlay0').checked = false;
      document.getElementById('radioOverlay1').checked = true;
      setOverlayToggle(1);

    }

    document.getElementById('inlineToggle').style.opacity = "100%";
    document.getElementById('inlineToggle').style.pointerEvents = "auto";

    document.getElementById('dotSettings').style.opacity = "25%";
    document.getElementById('dotSettings').style.pointerEvents = "none";

  }

  loop();
}

function setOverlayToggle(val){
  if(val == 0){             /////////////// OVERLAY ON
    overlayToggle = true;
    document.getElementById('overlayActive').style.display = "flex";
    document.getElementById('noOverlayActive').style.display = "none";

      setInlineToggle(1);
      document.getElementById('radioInlineToggle0').checked = false;
      document.getElementById('radioInlineToggle1').checked = true;

      document.getElementById('inlineToggle').style.opacity = "25%";
      document.getElementById('inlineToggle').style.pointerEvents = "none";

    if(inlineToggle == false && baseToggle == false){
      setBaseToggle(0);
      document.getElementById('radioBaseToggle0').checked = true;
      document.getElementById('radioBaseToggle1').checked = false;
    }

  } else if(val == 1){       /////////////// OVERLAY OFF
    overlayToggle = false;
    document.getElementById('overlayActive').style.display = "none";
    document.getElementById('noOverlayActive').style.display = "flex";

    document.getElementById('radioInlineToggle0').checked = false;
    document.getElementById('radioInlineToggle1').checked = true;

    document.getElementById('inlineToggle').style.opacity = "100%";
    document.getElementById('inlineToggle').style.pointerEvents = "auto";

  }

  console.log("overlayToggle: " + overlayToggle);

  loop();
}

function setPunctuationToggle(val){
  if(val == 0){
    puncToggle = true;
    document.getElementById('punctuationSelector').style.opacity = "100%";
    document.getElementById('punctuationSelector').style.pointerEvents = "auto";

  } else if(val == 1){
    puncToggle = false;
    document.getElementById('punctuationSelector').style.opacity = "25%";
    document.getElementById('punctuationSelector').style.pointerEvents = "none";
  }

  loop();
}

function setOutlineToggle(val){
  if(val == 0){
    outlineToggle = true;
    document.getElementById('outlineSelector').style.opacity = "100%";
    document.getElementById('outlineSelector').style.pointerEvents = "auto";

  } else if(val == 1){
    outlineToggle = false;
    document.getElementById('outlineSelector').style.opacity = "25%";
    document.getElementById('outlineSelector').style.pointerEvents = "none";
  }

  loop();
}

function setNameOnToggle(val){
  if(val == 0){
    nameOnToggle = true;
    document.getElementById('wordMarkSelector').style.opacity = "100%";
    document.getElementById('wordMarkSelector').style.pointerEvents = "auto";

  } else if(val == 1){
    nameOnToggle = false;
    document.getElementById('wordMarkSelector').style.opacity = "25%";
    document.getElementById('wordMarkSelector').style.pointerEvents = "none";
  }

  console.log("nameOnToggle: " + nameOnToggle);

  loop();
}

function setSaveToggle(val){
  saveToggle = val;

  if(val == 2 || val == 3){
    alphaToggle = true;
  } else {
    alphaToggle = false;
  }

  console.log("saveToggle: " + saveToggle + " and alphaToggle is: " + alphaToggle);

  loop();
}

function setDiscoOverlayToggle(val){
  if(val == 0){
    discoOverlay = true;
  } else if(val == 1){
    discoOverlay = false;
  }

  loop();
}

function setDiscoOffsetToggle(val){
  if(val == 0){
    discoOffset = true;

    var rs0 = random(60);
    var unit = random(5, 20);

    discoOffsetX[4] = random(-15, 15); discoOffsetY[4] = random(-15, 15); 
    discoOffsetX[0] = random(-15, 15); discoOffsetY[0] = random(-15, 15); 

    if(rs0 < 10){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = unit; discoOffsetY[2] = unit; 
      discoOffsetX[3] = unit; discoOffsetY[3] = unit;

    } else if(rs0 < 20){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = -unit; discoOffsetY[2] = -unit; 
      discoOffsetX[3] = -unit; discoOffsetY[3] = -unit; 

    } else if(rs0 < 30){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = 0; discoOffsetY[2] = -unit; 
      discoOffsetX[3] = 0; discoOffsetY[3] = -unit; 

    } else if(rs0 < 40){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = 0; discoOffsetY[2] = unit; 
      discoOffsetX[3] = 0; discoOffsetY[3] = unit; 

    } else if(rs0 < 50){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = unit; discoOffsetY[2] = 0; 
      discoOffsetX[3] = unit; discoOffsetY[3] = 0; 

    }  else if(rs0 < 60){
      discoOffsetX[1] = 0; discoOffsetY[1] = 0; 
      discoOffsetX[2] = -unit; discoOffsetY[2] = 0; 
      discoOffsetX[3] = -unit; discoOffsetY[3] = 0; 

    } 

    // for(var m = 0; m < 5; m++){
    //   discoOffsetX[m] = random(-20, 20);
    //   discoOffsetY[m] = random(-20, 20);
    // }
  } else if(val == 1){
    for(var m = 0; m < 5; m++){
      discoOffsetX[m] = 0;
      discoOffsetY[m] = 0;
    }

    discoOffset = false;
  }

  console.log("OFFSET RUN!");

  loop();
}


function setDiscoSaveToggle(val){
  discoSaveToggle = val;

  if(val == 2 || val == 3){
    alphaToggle = true;
  } else {
    alphaToggle = false;
  }

  console.log("Disco SaveToggle: " + discoSaveToggle + " and alphaToggle is: " + alphaToggle);

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