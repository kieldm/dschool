function runRandomCombo(){
  if(vibeToggle){           /////////////////////////////////// BLACK TIE
    baseIndex = int(random(baseVisuals.length));
    showBaseVisual(baseIndex);

    inlineIndex = int(random(inlineVisuals.length));
    showInlineVisual(inlineIndex);

    swatchIndex = int(random(1, colorVisuals.length - 1));
    wordMarkIndex = int(random(3));
    showColorVisual(swatchIndex - 1, swatchIndex, swatchIndex + 1);
    setWordMark(wordMarkIndex);
    swatchOverlayIndex = swatchIndex;
    if(swatchIndex > 6){ swatchOverlayIndex += 1; }
    if(swatchIndex > 7){ swatchOverlayIndex += 2; }
    if(swatchIndex > 23){ swatchOverlayIndex -= 1; }
    showOverlayColorVisual(swatchOverlayIndex - 1, swatchOverlayIndex, swatchOverlayIndex + 1);
    
    if(random(10) < 3){
      setBaseToggle(1);
      document.getElementById('radioBaseToggle0').checked = false;
      document.getElementById('radioBaseToggle1').checked = true;
    } else {
      setBaseToggle(0);
      document.getElementById('radioBaseToggle0').checked = true;
      document.getElementById('radioBaseToggle1').checked = false;
    }

    if(random(10) < 3){
      setInlineToggle(1);
      document.getElementById('radioInlineToggle0').checked = false;
      document.getElementById('radioInlineToggle1').checked = true;
    } else {
      setInlineToggle(0);
      document.getElementById('radioInlineToggle0').checked = true;
      document.getElementById('radioInlineToggle1').checked = false;
    }

    if(random(10) < 3){
      setRadioMode(1);
      document.getElementById('radioMode0').checked = false;
      document.getElementById('radioMode1').checked = true;
    } else {
      setRadioMode(0);
      document.getElementById('radioMode0').checked = true;
      document.getElementById('radioMode1').checked = false;
    }

    if(random(10) < 2){
      setNameOnToggle(1);
      document.getElementById('radioNameOn0').checked = false;
      document.getElementById('radioNameOn1').checked = true;
    } else {
      setNameOnToggle(0);
      document.getElementById('radioNameOn0').checked = true;
      document.getElementById('radioNameOn1').checked = false;
    }

    if(random(10) < 5){
      setOverlayToggle(1);
      document.getElementById('radioOverlay0').checked = false;
      document.getElementById('radioOverlay1').checked = true;
    } else {
      setOverlayToggle(0);
      document.getElementById('radioOverlay0').checked = true;
      document.getElementById('radioOverlay1').checked = false;
    }

  } else {                  /////////////////////////////////// DISCO
    baseIndex = int(random(baseVisuals.length));
    showBaseVisual(baseIndex);

    inlineIndex = int(random(inlineVisuals.length));
    showInlineVisual(inlineIndex);

    puncIndex = int(random(puncVisuals.length));
    showPuncVisual(puncIndex);

    outlineIndex = int(random(outlineVisuals.length));
    showOutlineVisual(outlineIndex);

    discoColIndex = int(random(19));
    setDiscoColor(discoColIndex);
    runRandomColorPlace();
    
    if(random(10) < 3){
      setBaseToggle(1);
      document.getElementById('radioBaseToggle0').checked = false;
      document.getElementById('radioBaseToggle1').checked = true;
    } else {
      setBaseToggle(0);
      document.getElementById('radioBaseToggle0').checked = true;
      document.getElementById('radioBaseToggle1').checked = false;
    }

    if(random(10) < 3){
      setInlineToggle(1);
      document.getElementById('radioInlineToggle0').checked = false;
      document.getElementById('radioInlineToggle1').checked = true;
    } else {
      setInlineToggle(0);
      document.getElementById('radioInlineToggle0').checked = true;
      document.getElementById('radioInlineToggle1').checked = false;
    }

    if(random(10) < 3){
      setPunctuationToggle(1);
      document.getElementById('radioPunctuationToggle0').checked = false;
      document.getElementById('radioPunctuationToggle1').checked = true;
    } else {
      setPunctuationToggle(0);
      document.getElementById('radioPunctuationToggle0').checked = true;
      document.getElementById('radioPunctuationToggle1').checked = false;
    }

    if(random(10) < 3){
      setOutlineToggle(1);
      document.getElementById('radioOutlineToggle0').checked = false;
      document.getElementById('radioOutlineToggle1').checked = true;
    } else {
      setOutlineToggle(0);
      document.getElementById('radioOutlineToggle0').checked = true;
      document.getElementById('radioOutlineToggle1').checked = false;
    }
  }

  console.log("Random Combo");

  loop();
}