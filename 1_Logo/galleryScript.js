function selectBase(val){
  baseIndex += val;

  if(baseIndex < 0){
    baseIndex = baseVisuals.length - 1;
  } else {
    baseIndex = baseIndex%baseVisuals.length;
  }

  showBaseVisual(val, baseIndex);

  loop();
}

function selectInline(val){
  inlineIndex += val;

  if(inlineIndex < 0){
    inlineIndex = inlineVisuals.length - 1;
  } else {
    inlineIndex = inlineIndex%inlineVisuals.length;
  }

  showInlineVisual(val, inlineIndex);

  loop();
}

function selectOverlayColor(val){
  swatchOverlayIndex += val;

  print("CURRENT SWATCH Overlay INDEX: " + swatchOverlayIndex);

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

  print("SL: " + sL + ", SC: " + sC + ", SR: " + sR);

  showOverlayColorVisual(val, sL, sC, sR);

  loop();
}

function selectColor(val){
  swatchIndex += val;

  console.log("CURRENT SWATCH INDEX: " + swatchIndex);

  var sL, sC, sR;
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

  showColorVisual(val, sL, sC, sR);

  loop();
}

function selectWordMark(val){
  wordMarkIndex += val;

  if(wordMarkIndex < 0){
    wordMarkIndex = lockupVisuals.length - 1;
  } else {
    wordMarkIndex = wordMarkIndex%lockupVisuals.length;
  }

  console.log("wordMark INDEX: " + wordMarkIndex);

  showWordMarkVisual(val, wordMarkIndex);

  loop();
}


// if(baseIndex < 0){
//   baseIndex = baseVisuals.length - 1;
// } else {
//   baseIndex = baseIndex%baseVisuals.length;
// }