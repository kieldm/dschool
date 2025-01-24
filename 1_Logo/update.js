function setInvertToggle(){
  invertToggle = !invertToggle;

  const root = document.documentElement;
  const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color').trim();
  const currentSecondary = getComputedStyle(root).getPropertyValue('--secondary-color').trim();

  // Swap the values
  root.style.setProperty('--primary-color', currentSecondary);
  root.style.setProperty('--secondary-color', currentPrimary);

  if(invertToggle){
    bkgdColor = color('#000000');
    foreColor = color('#ffffff');
    invertToggleIndex = 1;
    document.getElementById('img_baseD').style.backgroundColor = "#ffffff";
    document.getElementById('img_inlineD').style.backgroundColor = "#ffffff";

    document.getElementById('overlay_L').style.fill = "#ffffff";
    document.getElementById('lockup_circle').style.filter = "invert(100)";
    
    document.getElementById('lockup_stanford').setAttribute('fill', 'white');
    document.getElementById('lockup_hasso').setAttribute('fill', 'white');

  } else {
    bkgdColor = color('#ffffff');
    foreColor = color('#000000');
    invertToggleIndex = 0;
    document.getElementById('img_baseD').style.backgroundColor = "#000000";
    document.getElementById('img_inlineD').style.backgroundColor = "#000000";

    document.getElementById('overlay_L').style.fill = "#000000";
    document.getElementById('lockup_circle').style.filter = "invert(0)";

    document.getElementById('lockup_stanford').setAttribute('fill', 'black');
    document.getElementById('lockup_hasso').setAttribute('fill', 'black');
  }

  setLockupChromeToggle(lockupChromeToggle);

  if(radioVibe == 1){
    setDiscoColorIndex(0);
  }

  if(monochromeToggle){
    document.getElementById('img_baseD').style.backgroundColor = dotColor[dotColorIndex];
  }

  loop();
}

function setRadioVibe(val){
  if(val != radioVibe){
    document.getElementById('overlay').style.display = "flex";
  }
  
  radioVibe = val;

  
  if(radioVibe == 0){
    document.getElementById('img_baseD').style.backgroundColor = foreColor;
    document.getElementById('img_inlineD').style.backgroundColor = foreColor;

    document.getElementById('baseDtoggleSet').style.display = "none";
    document.getElementById('botRow_bot').style.display = "none";
    document.getElementById('disco_overlap').style.display = "none";
    document.getElementById('blackTie_overlap').style.display = "flex";
    document.getElementById('disco_baseD').style.display = "none";
    document.getElementById('blackTie_baseD').style.display = "flex";    
    document.getElementById('disco_unit3').style.display = "none";
    document.getElementById('blackTie_unit3').style.display = "flex";
    document.getElementById('disco_unit4').style.display = "none";
    document.getElementById('blackTie_unit4').style.display = "flex";

  } else {
    setDiscoColorIndex(0);

    document.getElementById('baseDtoggleSet').style.display = "flex";
    document.getElementById('botRow_bot').style.display = "flex";
    document.getElementById('disco_overlap').style.display = "flex";
    document.getElementById('blackTie_overlap').style.display = "none";
    document.getElementById('disco_baseD').style.display = "flex";
    document.getElementById('blackTie_baseD').style.display = "none";   
    document.getElementById('disco_unit3').style.display = "flex";
    document.getElementById('blackTie_unit3').style.display = "none";
    document.getElementById('disco_unit4').style.display = "flex";
    document.getElementById('blackTie_unit4').style.display = "none";

  }

  loop();
}

function setOverlayToggle(val){
  overlayToggle = val;

  if(overlayToggle){
    document.getElementById('inlineToggle1').checked = true;
    document.getElementById('inlineToggleSet').style.opacity = "25%";
    document.getElementById('inlineToggleSet').style.pointerEvents = "none";    

    setInlineToggle(false);
  } else {
    document.getElementById('inlineToggleSet').style.opacity = "100%";
    document.getElementById('inlineToggleSet').style.pointerEvents = "auto";    
  }

  loop();
}

function setBaseDindex(val){                 //////// BASE D
  if(radioVibe == 0){                 //////// BLACK TIE
    baseDindex += val;

    if(baseDindex < 0){
      baseDindex = baseDcount - 1;
    } else if(baseDindex >= baseDcount){
      baseDindex = 0;
    }
    var newURL = "resources/images/base_" + baseDindex + ".png";
    document.getElementById('img_baseD').style.webkitMask = `url('${newURL}') no-repeat center`;
    document.getElementById('img_baseD').style.webkitMaskSize = "contain";
    document.getElementById('img_baseD').style.mask = `url('${newURL}') no-repeat center`;
    document.getElementById('img_baseD').style.maskSize = "contain";
  
    console.log("BASEDINDEX IS NOW: " + baseDindex);

  } else {                           //////// DISCO
    discoDindex += val;

    if(discoDindex < 0){
      discoDindex = discoDcount - 1;
    } else if(discoDindex >= discoDcount){
      discoDindex = 0;
    }

    if(discoDindex < 5){
      outlineMode = 0;
    } else {
      outlineMode = 1;
    }
    setOutlineIndex(0);

    if(discoDindex == 3 || discoDindex == 4 || discoDindex == 8 || discoDindex == 9 || discoDindex == 10){
      document.getElementById('inlineToggleSet').style.opacity = "25%";
      document.getElementById('inlineToggleSet').style.pointerEvents = "none";
      setInlineToggle(false);
      document.getElementById('inlineToggle1').checked = "true";

    } else {
      document.getElementById('inlineToggleSet').style.opacity = "100%";
      document.getElementById('inlineToggleSet').style.pointerEvents = "auto";
    }

    var newURL = "resources/images/disco_" + discoDindex + ".png";
    document.getElementById('img_discoD').style.webkitMask = `url('${newURL}') no-repeat center`;
    document.getElementById('img_discoD').style.webkitMaskSize = "contain";
    document.getElementById('img_discoD').style.mask = `url('${newURL}') no-repeat center`;
    document.getElementById('img_discoD').style.maskSize = "contain";
  
    console.log("DISCODINDEX IS NOW: " + discoDindex);

  }


  loop();
}

function setDiscoAlignToggle(val){
  discoAlignToggle = val;
  discoAlignRan = int(random(4));
  console.log("RANDOM NUMBER GENERATED: " + discoAlignRan);

  loop();
}

function setBaseDtoggle(val){
  baseDtoggle = val;

  // if(outlineIndex != 3){
  //   console.log("ACTIVATED");
  //   setOutlineToggle(false);
  //   document.getElementById('outlineToggle1').checked = "true";
  // }
  

  if(baseDtoggle){
    document.getElementById('baseD_selector').style.opacity = "100%";
    document.getElementById('baseD_selector').style.pointerEvents = "auto";
  } else {
    document.getElementById('baseD_selector').style.opacity = "25%";
    document.getElementById('baseD_selector').style.pointerEvents = "none";
    
    document.getElementById('inlineToggleSet').style.opacity = "100%";
    document.getElementById('inlineToggleSet').style.pointerEvents = "auto";
  }

  loop();
}

function setInlineToggle(val){
  inlineToggle = val;

  if(inlineToggle){
    document.getElementById('inlineDselector').style.opacity = "100%";
    document.getElementById('inlineDselector').style.pointerEvents = "auto";

  } else {
    document.getElementById('inlineDselector').style.opacity = "25%";
    document.getElementById('inlineDselector').style.pointerEvents = "none";

  }

  console.log("INLINETOGGLE IS NOW: " + inlineToggle);

  loop();
}

function setInlineDindex(val){
  inlineDindex += val;

  if(inlineDindex < 0){
    inlineDindex = inlineDcount - 1;
  } else if(inlineDindex >= inlineDcount){
    inlineDindex = 0;
  }

  var newURL = "resources/images/inline_" + inlineDindex + ".png";
  document.getElementById('img_inlineD').style.webkitMask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_inlineD').style.webkitMaskSize = "contain";
  document.getElementById('img_inlineD').style.mask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_inlineD').style.maskSize = "contain";

  // document.getElementById('img_inlineD').src = "resources/images/inline_" + inlineDindex + ".png";

  console.log("INLINEDINDEX IS NOW: " + inlineDindex);

  loop();
}

function setDotColorIndex(val){
  dotColorIndex += val;

  if(dotColorIndex < 0){
    dotColorIndex = dotColor.length - 1;
  } else if(dotColorIndex >= dotColor.length){
    dotColorIndex = 0;
  }
  document.getElementById('dotColor').style.backgroundColor = dotColor[dotColorIndex];
  document.getElementById('dotColorOverlay').style.backgroundColor = dotColor[dotColorIndex];

  if(monochromeToggle){
    document.getElementById('img_baseD').style.backgroundColor = dotColor[dotColorIndex];

    document.getElementById('overlay_L').style.fill = dotColor[dotColorIndex];
    document.getElementById('overlay_C').style.fill = bkgdColor;
    document.getElementById('overlay_R').style.fill = dotColor[dotColorIndex];
  } else {
    document.getElementById('overlay_L').style.fill = foreColor;
    document.getElementById('overlay_C').style.fill = overlapColor[dotColorIndex];
    document.getElementById('overlay_R').style.fill = dotColor[dotColorIndex];
  }

  setLockupChromeToggle(lockupChromeToggle);

  console.log("DOTCOLORINDEX IS NOW: " + dotColorIndex);

  loop();
}

function setMonochromeToggle(val){
  monochromeToggle = val;

  if(monochromeToggle){
    document.getElementById('img_baseD').style.backgroundColor = dotColor[dotColorIndex];

    document.getElementById('inlineToggle1').checked = true;
    document.getElementById('inlineToggleSet').style.opacity = "25%";
    document.getElementById('inlineToggleSet').style.pointerEvents = "none";    
    setInlineToggle(false);

    document.getElementById('overlayToggle0').checked = true;
    document.getElementById('overlay_right').style.opacity = "25%";
    document.getElementById('overlay_right').style.pointerEvents = "none";    
    setOverlayToggle(true);

  } else {
    document.getElementById('img_baseD').style.backgroundColor = "#000000";

    if(overlayToggle == false){
      document.getElementById('inlineToggleSet').style.opacity = "100%";
      document.getElementById('inlineToggleSet').style.pointerEvents = "auto";    
    }

    document.getElementById('overlay_right').style.opacity = "100%";
    document.getElementById('overlay_right').style.pointerEvents = "auto";
  }

  setDotColorIndex(dotColorIndex);

  loop();
}

function setPuncIndex(val){
  puncIndex += val;

  if(puncIndex < 0){
    puncIndex = puncCount - 1;
  } else if(puncIndex >= puncCount){
    puncIndex = 0;
  }

  var newURL = "resources/images/punc_" + puncIndex + ".png";
  document.getElementById('img_punc').style.webkitMask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_punc').style.webkitMaskSize = "contain";
  document.getElementById('img_punc').style.mask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_punc').style.maskSize = "contain";

  console.log("PUNC INDEX IS NOW: " + puncIndex);

  loop();
}

function setPuncToggle(val){
  puncToggle = val;

  if(puncToggle){
    document.getElementById('punc_selector').style.opacity = "100%";
    document.getElementById('punc_selector').style.pointerEvents = "auto";

  } else {
    document.getElementById('punc_selector').style.opacity = "25%";
    document.getElementById('punc_selector').style.pointerEvents = "none";

  }

  loop();
}

function setLockupToggle(val){
  lockupToggle = val;

  if(lockupToggle){
    document.getElementById('lockup_selector').style.opacity = "100%";
    document.getElementById('lockup_selector').style.pointerEvents = "auto";

  } else {
    document.getElementById('lockup_selector').style.opacity = "25%";
    document.getElementById('lockup_selector').style.pointerEvents = "none";

  }

  loop();
}

function setLockupIndex(val){
  lockupIndex += val;

  if(lockupIndex < 0){
    lockupIndex = lockupCount - 1;
  } else if(lockupIndex >= lockupCount){
    lockupIndex = 0;
  }

  document.getElementById('lockup_circle').style.display = "none";
  document.getElementById('lockup_stanford').style.display = "none";
  document.getElementById('lockup_hasso').style.display = "none";

  if(lockupIndex == 0){
    document.getElementById('lockup_circle').style.display = "block";
    document.getElementById('lockup_chrome0').style.opacity = "25%";
    document.getElementById('lockup_chrome0').style.pointerEvents = "none";
    document.getElementById('lockup_chrome1').style.opacity = "25%";
    document.getElementById('lockup_chrome1').style.pointerEvents = "none";

  } else if(lockupIndex == 1){
    document.getElementById('lockup_stanford').style.display = "block";
    document.getElementById('lockup_chrome0').style.opacity = "100%";
    document.getElementById('lockup_chrome0').style.pointerEvents = "auto";
    document.getElementById('lockup_chrome1').style.opacity = "100%";
    document.getElementById('lockup_chrome1').style.pointerEvents = "auto";

  } else if(lockupIndex == 2){
    document.getElementById('lockup_hasso').style.display = "block";
    document.getElementById('lockup_chrome0').style.opacity = "100%";
    document.getElementById('lockup_chrome0').style.pointerEvents = "auto";
    document.getElementById('lockup_chrome1').style.opacity = "100%";
    document.getElementById('lockup_chrome1').style.pointerEvents = "auto";

  }

  loop();
}

function setLockupChromeToggle(val){
  lockupChromeToggle = val;

  if(lockupChromeToggle){
    document.getElementById('stanford_0').style.fill = dotColor[dotColorIndex];
    document.getElementById('stanford_1').style.fill = dotColor[dotColorIndex];
    document.getElementById('hasso_0').style.fill = dotColor[dotColorIndex];
    document.getElementById('hasso_1').style.fill = dotColor[dotColorIndex];

  } else {
    document.getElementById('stanford_0').style.fill = foreColor;
    document.getElementById('stanford_1').style.fill = foreColor;
    document.getElementById('hasso_0').style.fill = foreColor;
    document.getElementById('hasso_1').style.fill = foreColor;

  }

  loop();
}

function setDiscoColorIndex(val){
  discoColorIndex += val;

  if(discoColorIndex < 0){
    discoColorIndex = discoColorCount - 1;
  } else if(discoColorIndex >= discoColorCount){
    discoColorIndex = 0;
  }

  for(var m = 0; m < 4; m++){
    document.getElementById('disco'+m).style.backgroundColor = discoColor[discoColorIndex][invertToggleIndex][m];
  }

  if(discoColorIndex == 2){
    if(invertToggle){
      document.getElementById('disco1').style.border = "1px solid white";

    } else {
      document.getElementById('disco1').style.border = "1px solid black";

    }
  } else if(discoColorIndex == 4 && invertToggle == false){
    document.getElementById('disco1').style.border = "1px solid black";
  } else {
    document.getElementById('disco1').style.border = "none";
  }

  document.getElementById('img_inlineD').style.background = "none";


  document.getElementById('img_discoD').style.backgroundColor = discoColor[discoColorIndex][invertToggleIndex][0];
  document.getElementById('img_inlineD').style.backgroundColor = discoColor[discoColorIndex][invertToggleIndex][1];
  document.getElementById('img_punc').style.backgroundColor = discoColor[discoColorIndex][invertToggleIndex][2];
  document.getElementById('img_outline').style.backgroundColor = discoColor[discoColorIndex][invertToggleIndex][3];

  if(discoColorIndex == 2){
    document.getElementById('img_inlineD').style.background = "linear-gradient(to top, black, white)";
  } else if(discoColorIndex == 4 && invertToggle == false){
    document.getElementById('img_inlineD').style.background = "linear-gradient(to top, black, white)";

  }

  loop();
}

function setOutlineIndex(val){
  outlineIndex += val;

  if(outlineIndex < 0){
    outlineIndex = outlineCount - 1;

  } else if(outlineIndex >= outlineCount){
    outlineIndex = 0;
  }

  if(outlineIndex == 3){
    document.getElementById('baseDtoggleSet').style.opacity = "100%";
    document.getElementById('baseDtoggleSet').style.pointerEvents = "auto";   
    
  } else {
    // document.getElementById('baseDtoggleSet').style.opacity = "25%";
    // document.getElementById('baseDtoggleSet').style.pointerEvents = "none";
    setBaseDtoggle(false);
    document.getElementById('baseDtoggle1').checked = "true";

  }

  var newURL;
  if(outlineMode == 0){
    newURL = "resources/images/outline_A" + outlineIndex + ".png";
  } else {
    newURL = "resources/images/outline_B" + outlineIndex + ".png";

  }
  document.getElementById('img_outline').style.webkitMask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_outline').style.webkitMaskSize = "contain";
  document.getElementById('img_outline').style.mask = `url('${newURL}') no-repeat center`;
  document.getElementById('img_outline').style.maskSize = "contain";

  console.log("OUTLINE INDEX IS NOW: " + outlineIndex);

  loop();
}

function setOutlineToggle(val){
  outlineToggle = val;

  if(outlineToggle){
    document.getElementById('outline_selector').style.opacity = "100%";
    document.getElementById('outline_selector').style.pointerEvents = "auto";
  } else {
    document.getElementById('outline_selector').style.opacity = "25%";
    document.getElementById('outline_selector').style.pointerEvents = "none";
  }

  loop();
}

function setSaveMode(val){
  saveMode = val;
}

function runExport(){
  if(saveMode == 1 || saveMode == 3){
    alphaOn = true;
  }

  resizeForSave();

  if(saveMode == 0 || saveMode == 1){
    console.log("SAVE SVG!")
    save('dschool_logo.svg');

  } else if(saveMode == 2 || saveMode == 3){
    console.log("SAVE PNG!")
    save('dschool_logo.png');
  }

  windowResized();

  alphaOn = false;
  loop();
}