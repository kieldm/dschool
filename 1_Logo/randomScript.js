function runRandomCombo(){
  console.log("RUN RANDOM?");

  if(radioVibe == 0){           /////////////////////////////////// BLACK TIE
    baseDindex = int(random(baseDcount));
    setBaseDindex(0);

    inlineDindex = int(random(inlineDcount));
    setInlineDindex(0);

    dotColorIndex = int(random(1, dotColor.length));
    setDotColorIndex(0);
    
    if(random(10) < 3){
      document.getElementById('inlineToggle1').checked = true;
      setInlineToggle(false);
    } else {
      document.getElementById('inlineToggle0').checked = true;
      setInlineToggle(true);
    }

    if(random(10) < 5){
      document.getElementById('overlayToggle1').checked = true;
      setOverlayToggle(false);
    } else {
      document.getElementById('overlayToggle0').checked = true;
      setOverlayToggle(true);
    }

    if(random(10) < 5){
      document.getElementById('monochromeToggle0').checked = true;
      setMonochromeToggle(false);
    } else {
      document.getElementById('monochromeToggle1').checked = true;
      setMonochromeToggle(true);
    }

    if(random(10) < 5){       //////// YES LOCKUP
      document.getElementById('lockupToggle0').checked = true;
      setLockupToggle(true);

      lockupIndex = int(random(lockupCount));
      setLockupIndex(0);

    } else {                   //////// NO LOCKUP
      document.getElementById('lockupToggle1').checked = true;
      setLockupToggle(false);

    }

  } else if(radioVibe == 1){                  /////////////////////////////////// DISCO
    if(random(10) < 4){
      document.getElementById('outlineToggle1').checked = true;
      setOutlineToggle(false);

      document.getElementById('baseDtoggle0').checked = true;
      setBaseDtoggle(true);

      discoDindex = int(random(discoDcount));
      setBaseDindex(0);

    } else if(random(10) < 8){
      document.getElementById('outlineToggle0').checked = true;
      setOutlineToggle(true);

      document.getElementById('baseDtoggle1').checked = true;
      setBaseDtoggle(false);

      outlineIndex = int(random(outlineCount));
      setOutlineIndex(0);
    } else {
      outlineIndex = 4;

      discoDindex = int(random(5));
      setBaseDindex(0);
    }

    puncIndex = int(random(puncCount));
    setPuncIndex(0);

    discoColorIndex = int(random(discoColorCount));
    setDiscoColorIndex(0);
  }

  // if(random(10) < 5){
  //   setInvertToggle();
  // }

  console.log("Random Combo");

  loop();
}