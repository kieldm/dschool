function selectBase(val){
  baseIndex += val;

  if(baseIndex < 0){
    baseIndex = baseVisuals.length - 1;
  } else {
    baseIndex = baseIndex%baseVisuals.length;
  }

  showBaseVisual(baseIndex);

  loop();
}

function selectInline(val){
  inlineIndex += val;

  if(inlineIndex < 0){
    inlineIndex = inlineVisuals.length - 1;
  } else {
    inlineIndex = inlineIndex%inlineVisuals.length;
  }

  showInlineVisual(inlineIndex);

  loop();
}

function selectOverlayColor(val){
  swatchOverlayIndex += val;
  swatchOverlayIndex = swatchOverlayIndex%colorOverVisuals.length;

  var addToSwatch = true;
  if(val == 1){
    if(swatchOverlayIndex == 7 || swatchOverlayIndex == 9 || swatchOverlayIndex == 10 ){ addToSwatch = false; }
  } else if(val == -1){
    if(swatchOverlayIndex == 9 || swatchOverlayIndex == 8 || swatchOverlayIndex == 6){ addToSwatch = false; }
  }

  // DOUBLE SKIP
  if(val == 1 && swatchOverlayIndex == 25){ val *= 2; }
  if(val == -1 && swatchOverlayIndex == 25){ val *= 2; }

  if(addToSwatch){
    swatchIndex += val;
    swatchIndex = swatchIndex%colorVisuals.length;

    if(swatchIndex < 0){
      swatchIndex = colorVisuals.length - 1;
    }  
  }

  switchSwatch();
}

function selectColor(val){
  swatchIndex += val;
  swatchIndex = swatchIndex%colorVisuals.length;

  // DOUBLE, TRIPLE SKIP
  if(val == 1 && swatchOverlayIndex == 6){ val *= 2; }
  if(val == 1 && swatchOverlayIndex == 8){ val *= 3; }

  if(val == -1 && swatchOverlayIndex == 11){ console.log("SECOND JUMP"); val *= 3; }
  if(val == -1 && swatchOverlayIndex == 8){ console.log("FIRST JUMP"); val *= 2; }

  var addToOverlay = true;
  if(val == 1){
    if(swatchIndex == 23){ console.log("LAUNCHED FORWARD"); addToOverlay = false; }
  } else if(val == -1){
    if(swatchIndex == 22){ console.log("LAUNCHED"); addToOverlay = false; }
  }

  if(addToOverlay){
    swatchOverlayIndex += val;
    swatchOverlayIndex = swatchOverlayIndex%colorOverVisuals.length;

    if(swatchOverlayIndex < 0){
      swatchOverlayIndex = colorOverVisuals.length - 1;
    }
  }

  switchSwatch();
}

function selectDiscoColor(val){
  discoColIndex += val;

  if(discoColIndex < 0){
    discoColIndex = discoColSetCount - 1;
  } else {
    discoColIndex = discoColIndex%discoColSetCount;
  }

  showDiscoColVisual(discoColIndex);

  loop();
}

function switchSwatch(){
    /// OVERLAY
    var sL, sC, sR;
    if(swatchOverlayIndex == 0){
      sL = colorOverVisuals.length - 1;
      sC = swatchOverlayIndex;
      sR = swatchOverlayIndex + 1;
    } else if(swatchOverlayIndex == colorOverVisuals.length - 1){
      sL = swatchOverlayIndex - 1;
      sC = swatchOverlayIndex;
      sR = 0;
    } else if(swatchOverlayIndex < 0){
      swatchOverlayIndex = colorOverVisuals.length - 1;
      sL = swatchOverlayIndex - 1;
      sC = swatchOverlayIndex;
      sR = 0;
    } else {
      sL = swatchOverlayIndex - 1;
      sC = swatchOverlayIndex;
      sR = swatchOverlayIndex + 1;
    }
  
    showOverlayColorVisual(sL, sC, sR);

    /// NO OVERLAY
    if(swatchIndex == 0){
      sL = colorVisuals.length - 1;
      sC = swatchIndex;
      sR = swatchIndex + 1;
    } else if(swatchIndex == colorVisuals.length - 1){
      sL = swatchIndex - 1;
      sC = swatchIndex;
      sR = 0;
    } else if(swatchIndex < 0){
      swatchIndex = colorVisuals.length - 1;
      sL = swatchIndex - 1;
      sC = swatchIndex;
      sR = 0;
    } else {
      sL = swatchIndex - 1;
      sC = swatchIndex;
      sR = swatchIndex + 1;
    }
  
    showColorVisual(sL, sC, sR);

    loop();
}

function selectWordMark(val){
  wordMarkIndex += val;

  if(wordMarkIndex < 0){
    wordMarkIndex = 2;
  } else {
    wordMarkIndex = wordMarkIndex%3;
  }

  if(wordMarkIndex == 0){
    document.getElementById('wordMarkStan').style.display = "block";
    document.getElementById('wordMarkHasso').style.display = "none";
    document.getElementById('wordMarkDesign').style.display = "none";

  } else if(wordMarkIndex == 1){
    document.getElementById('wordMarkStan').style.display = "none";
    document.getElementById('wordMarkHasso').style.display = "block";
    document.getElementById('wordMarkDesign').style.display = "none";

  } else {
    document.getElementById('wordMarkStan').style.display = "none";
    document.getElementById('wordMarkHasso').style.display = "none";
    document.getElementById('wordMarkDesign').style.display = "block";

  }

  loop();
}

function selectPunctuation(val){
  puncIndex += val;

  if(puncIndex < 0){
    puncIndex = puncVisuals.length - 1;
  } else {
    puncIndex = puncIndex%puncVisuals.length;
  }

  showPuncVisual(puncIndex);

  loop();
}

function selectOutline(val){
  outlineIndex += val;

  if(outlineIndex < 0){
    outlineIndex = outlineVisuals.length - 1;
  } else {
    outlineIndex = outlineIndex%outlineVisuals.length;
  }

  showOutlineVisual(outlineIndex);

  loop();
}