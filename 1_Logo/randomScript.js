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

    if(invertToggle && monochromeToggle == false){
      console.log("DID THIS WORK?")
      document.getElementById('img_baseD').style.backgroundColor = "#ffffff";
    }

    // nestInvert();

  } else if(radioVibe == 1){                  /////////////////////////////////// DISCO
    inlineDindex = int(random(inlineDcount));
    setInlineDindex(0);
    
    if(random(10) < 3){
      document.getElementById('inlineToggle1').checked = true;
      setInlineToggle(false);
    } else {
      document.getElementById('inlineToggle0').checked = true;
      setInlineToggle(true);
    }

    var rs0 = random(10);
    if(rs0 < 4){
      console.log("RAN 1");
      document.getElementById('outlineToggle1').checked = true;
      setOutlineToggle(false);

      document.getElementById('baseDtoggle0').checked = true;
      setBaseDtoggle(true);

      discoDindex = int(random(discoDcount));
      while(discoDindex == 2 || discoDindex == 7){ discoDindex = int(random(discoDcount)); } // NEVER FULL FILL
      setBaseDindex(0);

    } else if(rs0 < 8){
      console.log("RAN 2");
      document.getElementById('outlineToggle0').checked = true;
      setOutlineToggle(true);

      document.getElementById('baseDtoggle1').checked = true;
      setBaseDtoggle(false);

      outlineIndex = int(random(outlineCount));
      while(outlineIndex == 3){ outlineIndex = int(random(outlineCount)); } // NEVER FULL FILL
      setOutlineIndex(0);
      
    } else {
      console.log("RAN 3");
      document.getElementById('baseDtoggle0').checked = true;
      setBaseDtoggle(true);

      outlineIndex = 4;

      discoDindex = int(random(5));
      while(discoDindex == 2 || discoDindex == 7){ discoDindex = int(random(discoDcount)); } // NEVER FULL FILL
      setBaseDindex(0);
    }

    if(outlineToggle == false && baseDtoggle == false){ // FAIL SAFE SO D IS PRESENT
      console.log("FAIL SAFE ACTIVATED")
      document.getElementById('baseDtoggle0').checked = true;
      setBaseDtoggle(true);
    }

    document.getElementById('puncToggle0').checked = true;
    setPuncToggle(true)
    puncIndex = int(random(puncCount));
    while(puncIndex == 6 || puncIndex == 1){ puncIndex = int(random(puncCount));}; // NEVER CURSOR LINE
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