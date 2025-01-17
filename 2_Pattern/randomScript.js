function runRandomSettings(){
  resetEverything();

  for(var m = 0; m < baseCount; m++){
    if(random(10)<3){
      setBaseIndex(m);
    }
  } 


  if(baseIndexSet.length < 1){
    console.log("NO BASE INDEXES");
    noBaseToggles = true;
  } else {
    console.log("YES BASE INDEXES");
    noBaseToggles = false;
  }

  for(var m = 0; m < outlineCount; m++){
    if(random(10)<3){
      setOutlineIndex(m);
    }
  }

  for(var m = 0; m < puncCount; m++){
    if(random(10)<1.5){
      setPuncIndex(m);
    }
  }

  var rs1 = random(10, 75);
  setHorzSpace(rs1);
  document.getElementById("horzSpace").value = rs1;

  var rs2 = random(33, 66);
  setVertSpace(rs2);
  document.getElementById("vertSpace").value = rs2;

  var rs3 = random(15, 85);
  setMarkScale(rs3);
  document.getElementById("markScale").value = rs3;

  if(random(10) < 2.5){
    var rs4 = random(25,75);
    setUnitRot(rs4);
    document.getElementById("unitRot").value = rs4;
  }

  if(random(10) < 2.5){
    var rs5 = random(25,75);
    setGridAng(rs5);
    document.getElementById("gridAng").value = rs5;
  }

  if(random(10) < 2.5){
    var rs6 = random(25,75);
    setCoreAng(rs6);
    document.getElementById("coreAng").value = rs6;
  }

  if(random(10) < 5){         /////////////////////////// OFFSET
    document.getElementById("radioOffset0").checked = true;
    document.getElementById("radioOffset1").checked = false;
    setRadioOffset(0);

  } else {
    document.getElementById("radioOffset0").checked = false;
    document.getElementById("radioOffset1").checked = true;
    setRadioOffset(1);

  }

  if(random(10) < 5){         /////////////////////////// FLIP
    document.getElementById("radioFlip0").checked = true;
    setRadioFlip(0);

  } else {
    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

  }

  if(random(10) < 7.5){         /////////////////////////// COLOR MODE
    document.getElementById("colorMode0").checked = true;
    setColMode(0);

  } else {
    document.getElementById("colorMode1").checked = true;
    setColMode(1);

  }

  if(random(10) < 5){         /////////////////////////// BKGD COLOR
    setBkgdColor(0);

  } else {
    setBkgdColor(1);

  }

  swatchIndex = int(random(swatchCount));
  setSwatchIndex(0);

  if(baseIndexSet.length > 1){
    discoColIndex = int(random(discoColSetCount));
    setDiscoColIndex(0);
  }
}

function resetEverything(){
  var inverter = 0;
  if(modeToggle){
    inverter = 1;
  }

  baseIndexSet = [];
  for(var m = 0; m < baseCount; m++){
    baseIndexToggles[m] = false;
    document.getElementById("d"+m).style.filter = "invert(" + inverter + ")";
  }

  outlineIndexSet = [];
  for(var m = 0; m < outlineCount; m++){
    outlineIndexToggles[m] = false;
    document.getElementById("o"+m).style.filter = "invert(" + inverter + ")";
  }

  inlineOn = false;
  inlineIndex = null;
  document.getElementById("i0").style.filter = "invert(" + inverter + ")";
  document.getElementById("i1").style.filter = "invert(" + inverter + ")";

  puncIndexSet = [];
  for(var m = 0; m < puncCount; m++){
    puncIndexToggles[m] = false;
    document.getElementById("p"+m).style.filter = "invert(" + inverter + ")";
  }

  setHorzSpace(33);
  document.getElementById("horzSpace").value = 33;

  setVertSpace(33);
  document.getElementById("vertSpace").value = 33;

  setMarkScale(25);
  document.getElementById("markScale").value = 25;

  setUnitRot(50);
  document.getElementById("unitRot").value = 50;

  setGridAng(50);
  document.getElementById("gridAng").value = 50;

  setCoreAng(50);
  document.getElementById("coreAng").value = 50;

  document.getElementById("colorMode0").checked = true;
  setColMode(0);

  setOverlayToggle(false);
  document.getElementById("overlayToggle1").checked = true;

  swatchIndex = 0;
  setSwatchIndex(0);

  console.log("PUNC INDEX");
  console.log(puncIndexSet);

}

function setPatternPreset(val){
  resetEverything();

  if(val == 1){                           //////////// PRESET 1
    setBaseIndex(0);
    setPuncIndex(1);
    setInlineIndex(0);

    document.getElementById("radioOffset1").checked = true;
    setRadioOffset(1);
    
    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

    var thisVal = 10;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

  } else if(val == 2){                    //////////// PRESET 2
    setBaseIndex(2);

    document.getElementById("radioOffset0").checked = true;
    setRadioOffset(0);

    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

    var thisVal = 10;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

    var thisVal = 60;
    setMarkScale(thisVal);
    document.getElementById("markScale").value = thisVal;

    var thisVal = 38;
    setCoreAng(thisVal);
    document.getElementById("coreAng").value = thisVal;

    bkgdIndex = 0;
    setBkgdColor(0);

  } else if(val == 3){                    //////////// PRESET 3
    setBaseIndex(0);
    setBaseIndex(2);
    setPuncIndex(0);
    setPuncIndex(2);

    document.getElementById("radioFlip0").checked = true;
    setRadioFlip(0);

    var thisVal = 38;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

    var thisVal = 21;
    setHorzSpace(thisVal);
    document.getElementById("horzSpace").value = thisVal;

    var thisVal = 61;
    setMarkScale(thisVal);
    document.getElementById("markScale").value = thisVal;

    setOverlayToggle(true);
    document.getElementById("overlayToggle0").checked = true;

    var thisVal = 82;
    setCoreAng(thisVal);
    document.getElementById("coreAng").value = thisVal;

    swatchIndex = 10;
    setSwatchIndex(0);

    bkgdIndex = 1;
    setBkgdColor(0);

  } else if(val == 4){                    //////////// PRESET 4
    setBaseIndex(0);
    setBaseIndex(5);

    setInlineIndex(1);

    document.getElementById("colorMode1").checked = true;
    setColMode(1);

    var thisVal = 0;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

    var thisVal = 30;
    setMarkScale(thisVal);
    document.getElementById("markScale").value = thisVal;

    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

    discoColIndex = 10;
    setDiscoColIndex(0);

  } else if(val == 5){                    //////////// PRESET 5
    setBaseIndex(1);
    setBaseIndex(3);
    setBaseIndex(4);
    setBaseIndex(5);

    setPuncIndex(3)
    setPuncIndex(7)

    var thisVal = 60;
    setHorzSpace(thisVal);
    document.getElementById("horzSpace").value = thisVal;

    var thisVal = 25;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

    var thisVal = 50;
    setMarkScale(thisVal);
    document.getElementById("markScale").value = thisVal;

    var thisVal = 25;
    setUnitRot(thisVal);
    document.getElementById("unitRot").value = thisVal;

    document.getElementById("radioOffset0").checked = true;
    setRadioOffset(0);

    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

    swatchIndex = 6;
    setSwatchIndex(0);
    
  } else if(val == 6){                    //////////// PRESET 6
    setBaseIndex(0);
    setInlineIndex(1);
    setOutlineIndex(0);
    setPuncIndex(1);
    // setPuncIndex(9);
    setPuncIndex(3);

    var thisVal = 60;
    setHorzSpace(thisVal);
    document.getElementById("horzSpace").value = thisVal;

    var thisVal = 25;
    setVertSpace(thisVal);
    document.getElementById("vertSpace").value = thisVal;

    var thisVal = 33;
    setMarkScale(thisVal);
    document.getElementById("markScale").value = thisVal;

    var thisVal = 65;
    setCoreAng(thisVal);
    document.getElementById("coreAng").value = thisVal;

    var thisVal = 20;
    setGridAng(thisVal);
    document.getElementById("gridAng").value = thisVal;

    document.getElementById("radioOffset0").checked = false;
    document.getElementById("radioOffset1").checked = true;
    setRadioOffset(1);

    document.getElementById("radioFlip0").checked = false;
    document.getElementById("radioFlip1").checked = true;
    setRadioFlip(1);

    document.getElementById("radioColMode0").checked = false;
    document.getElementById("radioColMode1").checked = true;
    setColMode(1);

    document.getElementById("bkgd0").style.display = "block";
    document.getElementById("bkgd1").style.display = "none";
    setBkgdColor(0);

    discoColIndex = 6;
    showDiscoColVisual(discoColIndex);
  }

  figurePattern();
  loop();
}