function setRadioVibe(val){
  console.log("Vibe set: " + val);
}

function setRadioMode(val){
  console.log("Mode set: " + val);
}

function runRandomCombo(){
  console.log("Random Combo");
}

function runLogoSave(){
  console.log("RUN LOGO SAVE");

  if(saveToggle == 0){
    console.log("SAVE SVG!")
    save();

  } else if(saveToggle == 1){
    console.log("SAVE PNG!")
    save('dschool_logo.png');

  }
}

function setRadioMode(val){
  console.log("RUN SWAP COLORS");

  var holdToggle = modeToggle;

  if(val == 0){
    modeToggle = true;
    document.getElementById('baseCenter').style.filter = "invert(0)";
    document.getElementById('inlineCenter').style.filter = "invert(0)";
    document.getElementById('blackDotOverlaySet').style.display = "flex";
    document.getElementById('whiteDotOverlaySet').style.display = "none";

  } else if(val == 1){
    modeToggle = false;
    document.getElementById('baseCenter').style.filter = "invert(100)";
    document.getElementById('inlineCenter').style.filter = "invert(100)";
    document.getElementById('blackDotOverlaySet').style.display = "none";
    document.getElementById('whiteDotOverlaySet').style.display = "flex";
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

function setInlineToggle(val){
  if(val == 0){
    inlineToggle = true;
    document.getElementById('inlineSelector').style.opacity = "100%";
    document.getElementById('inlineSelector').style.pointerEvents = "auto";

  } else if(val == 1){
    inlineToggle = false;
    document.getElementById('inlineSelector').style.opacity = "25%";
    document.getElementById('inlineSelector').style.pointerEvents = "none";

  }

  console.log("inlineToggle: " + inlineToggle);

  loop();
}

function setBaseToggle(val){
  if(val == 0){
    baseToggle = true;
    document.getElementById('baseSelector').style.opacity = "100%";
    document.getElementById('baseSelector').style.pointerEvents = "auto";

  } else if(val == 1){
    baseToggle = false;
    document.getElementById('baseSelector').style.opacity = "25%";
    document.getElementById('baseSelector').style.pointerEvents = "none";

  }

  console.log("baseToggle: " + baseToggle);

  loop();
}

function setDotColorToggle(val){
  if(val == 0){
    dotColorToggle = true;
    document.getElementById('dotColorSelector').style.opacity = "100%";
    document.getElementById('dotColorSelector').style.pointerEvents = "auto";


  } else if(val == 1){
    dotColorToggle = false;
    document.getElementById('dotColorSelector').style.opacity = "25%";
    document.getElementById('dotColorSelector').style.pointerEvents = "none";

  }

  console.log("dotColorToggle: " + dotColorToggle);

  loop();
}

function setOverlayToggle(val){
  if(val == 0){
    overlayToggle = true;
    document.getElementById('overlayActive').style.display = "flex";
    document.getElementById('noOverlayActive').style.display = "none";

  } else if(val == 1){
    overlayToggle = false;
    document.getElementById('overlayActive').style.display = "none";
    document.getElementById('noOverlayActive').style.display = "flex";

  }

  console.log("overlayToggle: " + overlayToggle);

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

  console.log("saveToggle: " + saveToggle);

  loop();
}