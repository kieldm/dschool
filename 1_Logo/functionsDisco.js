/////////// DRAWINGS BASED ON 591.107x591.107px versions

function drawBase(counterOn){
  if(baseIndex == 0){
    beginShape();
      vertex(283.1,250.3);
      bezierVertex(272.7,245.6,257,241.8,241.3,241.8);
      bezierVertex(176.3,241.8,118.4,294.5,118.4,367.6);
      bezierVertex(118.4,420.3,151.6,469.7,206.7,469.7);
      bezierVertex(239,469.7,263.7,450.7,278.4,430.8);
      vertex(283.1,430.8);
      vertex(283.1,469.4);
      vertex(363.8,451.2);
      vertex(363.8,96.8);
      vertex(283.1,118.6);

      if(counterOn){
        beginContour();
          vertex(283.1,421.2);
          bezierVertex(278.8,423.1,273.6,424,267.9,424);
          bezierVertex(228.5,424,197.6,395,197.6,339);
          bezierVertex(197.6,295.3,218,263.1,248.4,263.1);
          bezierVertex(265.5,263.1,277.4,275.4,283.1,289.7);
          vertex(283.1,421.2);
        endContour();
      }

    endShape(CLOSE);

  } else if(baseIndex == 1){
    beginShape();
      vertex(283.1,469.3);
      vertex(363.8,451.1);
      vertex(363.8,96.8);
      vertex(283.1,118.6);
    endShape(CLOSE);
    beginShape();
      vertex(197.6,339.1);
      bezierVertex(197.6,295.6,217.8,242.5,248,242.0);
      bezierVertex(245.8,241.9,243.5,241.8,241.3,241.8);
      bezierVertex(176.3,241.8,118.4,294.5,118.4,367.6);
      bezierVertex(118.4,420.3,151.6,469.7,206.7,469.7);
      bezierVertex(238.7,469.7,263.2,451.1,277.9,431.4);
      bezierVertex(274.8,432.1,271.5,432.5,267.9,432.5);
      bezierVertex(228.5,432.4,197.6,395.1,197.6,339.1);
    endShape();

  } else if(baseIndex == 2){
    beginShape();
      vertex(283.1,250.3);
      bezierVertex(272.7,245.6,257,241.8,241.3,241.8);
      bezierVertex(176.3,241.8,118.4,294.5,118.4,367.6);
      bezierVertex(118.4,420.3,151.6,469.7,206.7,469.7);
      bezierVertex(239,469.7,263.7,450.7,278.4,430.8);
      vertex(283.1,430.8);
      vertex(283.1,469.4);
      vertex(363.8,451.2);
      vertex(363.8,96.8);
      vertex(283.1,118.6);
    endShape(CLOSE);

  } else if(baseIndex == 3){
    beginShape();
      vertex(283.1,430.7);
      vertex(278.4,430.7);
      bezierVertex(263.7,450.6,239.0,469.6,206.7,469.6);
      bezierVertex(151.6,469.6,118.1,420.2,118.4,367.5);
      bezierVertex(118.4,294.4,176.3,241.7,241.3,241.7);
      bezierVertex(257.0,241.7,272.6,245.5,283.1,250.2);
      vertex(283.1,168);
      vertex(244.2,129.1);
      vertex(363.8,96.8);
      vertex(363.8,411.8);
      vertex(392.7,444.6);
      vertex(283.1,469.3);

      if(counterOn){
        beginContour();
          vertex(283.1,289.7);
          bezierVertex(277.4,275.5,265.5,263.1,248.4,263.1);
          bezierVertex(218.0,263.1,197.6,295.4,197.6,339);
          bezierVertex(197.6,395,228.5,424,267.9,424);
          bezierVertex(273.6,424,278.8,423.1,283.1,421.2);
          vertex(283.1,289.7);
        endContour();
        }
    endShape(CLOSE);
    
  } else if(baseIndex == 4){
    beginShape();
      vertex(197.6,339.1);
      bezierVertex(197.6,295.6,217.8,242.5,248,242.0);
      bezierVertex(245.8,241.9,243.5,241.8,241.3,241.8);
      bezierVertex(176.3,241.8,118.4,294.5,118.4,367.6);
      bezierVertex(118.4,420.3,151.6,469.7,206.7,469.7);
      bezierVertex(238.7,469.7,263.2,451.1,277.9,431.4);
      bezierVertex(274.8,432.1,271.5,432.5,267.9,432.5);
      bezierVertex(228.5,432.4,197.6,395.1,197.6,339.1);
    endShape();
    beginShape();
      vertex(363.8,411.9);
      vertex(363.8,96.8);
      vertex(244.1,129.1);
      vertex(283.1,168);
      vertex(283.1,469.3);
      vertex(392.7,444.6);
    endShape(CLOSE);
    
  } else if(baseIndex == 5){
    beginShape();
      vertex(283.1,469.3);
      vertex(283.1,430.7);
      vertex(278.4,430.7);
      bezierVertex(263.7,450.6,239.0,469.6,206.7,469.6);
      bezierVertex(151.6,469.6,118.4,420.2,118.4,367.5);
      bezierVertex(118.4,294.4,176.3,241.7,241.3,241.7);
      bezierVertex(257.0,241.7,272.6,245.5,283.1,250.2);
      vertex(283.1,168);
      vertex(244.2,129.1);
      vertex(363.8,96.8);
      vertex(363.8,411.8);
      vertex(392.7,444.6);
    endShape(CLOSE);

  }
}

function drawInline(){
  if(inlineIndex == 0){
    beginShape();
      vertex(313.4,412.2);
      vertex(313.4,462.4);
      vertex(333.3,457.9);
      vertex(333.3,105);
      vertex(313.4,110.4);
      vertex(313.4,245.4);
      bezierVertex(298.4,237.6,280.9,233.5,262.6,233.5);
      bezierVertex(231.4,233.5,202.4,245.7,180.7,267.9);
      bezierVertex(158.8,290.4,146.7,321,146.7,354.1);
      bezierVertex(146.7,411.4,184.9,453,237.6,453);
      bezierVertex(260.5,453,280.8,444.1,299.8,425.8);
      vertex(313.4,412.2);

      beginContour();
        vertex(166.2,345.6);
        bezierVertex(166.2,315.8,175.4,290.7,192.9,273.1);
        bezierVertex(209.4,256.5,232.8,247.3,258.9,247.3);
        bezierVertex(283.2,247.3,303.1,255.6,313.4,270);
        vertex(313.4,407.5);
        bezierVertex(297.5,425.5,273.7,435.9,248.0,435.9);
        bezierVertex(199.1,435.9,166.2,399.6,166.2,345.6);
      endContour();
    endShape();
    
  } else if(inlineIndex == 1){
    beginShape();
      vertex(343.1,102.4);
      vertex(324.7,249.4);
      bezierVertex(310.7,241.6,293.7,237.5,275.4,237.5);
      bezierVertex(244.2,237.5,213.6,249.7,189.2,271.9);
      bezierVertex(164.5,294.4,148.6,325,144.4,358.1);
      bezierVertex(137.2,415.4,170.2,457,222.9,457);
      bezierVertex(245.8,457,267.2,448.1,288.6,429.8);
      vertex(303.8,416.2);
      vertex(297.5,466.5);
      vertex(318,462.2);
      vertex(363.9,96.7);
      vertex(343.1,102.4);

      beginContour();
        vertex(304.3,411.5);
        bezierVertex(286.1,429.5,261,439.9,235.4,439.9);
        bezierVertex(186.5,439.9,158.1,403.6,164.9,349.6);
        bezierVertex(168.6,319.8,181,294.7,200.7,277.1);
        bezierVertex(219.2,260.5,243.8,251.3,269.9,251.3);
        bezierVertex(294.2,251.3,313.1,259.6,321.6,274);
        vertex(304.3,411.5);
      endContour();
    endShape();
    
  }
}

function drawPunc(){
  if(puncIndex == 0){
    beginShape();
      vertex(420.5,469.3);
      bezierVertex(444.5,469.3,463.5,450.4,463.5,426.3);
      bezierVertex(463.5,402.3,444.6,382.8,420.5,382.8);
      bezierVertex(396.5,382.8,377,402.2,377,426.3);
      bezierVertex(377,450.4,396.4,469.3,420.5,469.3);
    endShape();
    
  } else if(puncIndex == 1){
    beginShape();
      vertex(471.1,351);
      bezierVertex(471.1,309.3,437.3,275.5,395.6,275.5);
      bezierVertex(353.9,275.5,320.1,309.3,320.1,351);
      bezierVertex(320.1,372.5,329.1,391.9,343.5,405.6);
      vertex(395.7,458.1);
      vertex(447.9,405.6);
      bezierVertex(462.1,391.8,471.1,372.5,471.1,351);
    endShape();
    
  } else if(puncIndex == 2){
    beginShape();
      vertex(376.6,326.8);
      bezierVertex(347.6,326.8,326.3,304.5,326.3,276.9);
      bezierVertex(326.3,248.9,347.7,225.1,376.6,225.1);
      bezierVertex(407,225.1,427.9,248.8,427.9,276.9);
      bezierVertex(427.9,304.5,407,326.8,376.6,326.8);
    endShape()
    beginShape();
      vertex(376.6,452.7);
      bezierVertex(347.6,452.7,326.3,430.4,326.3,402.8);
      bezierVertex(326.3,374.8,347.7,351,376.6,351);
      bezierVertex(407,351,427.9,374.7,427.9,402.8);
      bezierVertex(427.9,430.4,407,452.7,376.6,452.7);
    endShape();

  } else if(puncIndex == 3){
    beginShape();
      vertex(361.3,451.1);
      bezierVertex(339.6,445.9,323.6,431.5,323.6,406.2);
      bezierVertex(323.6,378.3,345.3,359.7,373.2,359.7);
      bezierVertex(406.8,359.7,427.9,386.0,427.9,421.6);
      bezierVertex(427.9,476.3,377.3,513.5,320,516.1);
      vertex(320,512);
      bezierVertex(355.1,506.3,379.4,479.5,381.9,451.1);
      vertex(361.3,451.1);
    endShape();
    beginShape();
      vertex(376.6,326.8);
      bezierVertex(347.6,326.8,326.3,304.5,326.3,276.9);
      bezierVertex(326.3,248.9,347.7,225.1,376.6,225.1);
      bezierVertex(407,225.1,427.9,248.8,427.9,276.9);
      bezierVertex(427.9,304.5,407,326.8,376.6,326.8);
    endShape();
    
  } else if(puncIndex == 4){
    beginShape();
      vertex(384,313.3);
      vertex(328,150.4);
      bezierVertex(328,116.2,354.6,92.9,384,92.9);
      bezierVertex(413.4,92.9,440,116.2,440,150.4);
      vertex(384,313.3);
    endShape();
    beginShape();
      vertex(383.5,454.9);
      bezierVertex(354.5,454.9,333.2,432.6,333.2,405);
      bezierVertex(333.2,377,354.6,353.2,383.5,353.2);
      bezierVertex(413.9,353.2,434.8,376.9,434.8,405);
      bezierVertex(434.8,432.6,413.9,454.9,383.5,454.9);
    endShape();
    
  } else if(puncIndex == 5){
    beginShape();
      vertex(380,212.9);
      bezierVertex(355.8,212.9,333.9,193.9,333.9,172.1);
      bezierVertex(333.9,143.1,367.1,121.8,415.6,121.8);
      bezierVertex(491.1,121.8,548.6,167.9,548.6,224.9);
      bezierVertex(548.6,282.4,505.9,318.9,431.3,338.9);
      vertex(380,273.3);
      bezierVertex(437.9,263.3,472.1,233.4,472.1,195.9);
      bezierVertex(472.1,170.7,453.6,145.6,418.9,140.3);
      vertex(380,212.9);
    endShape();
    beginShape();
      vertex(430.9,469.3);
      bezierVertex(401.9,469.3,380.6,447,380.6,419.4);
      bezierVertex(380.6,391.4,402.0,367.6,430.9,367.6);
      bezierVertex(461.3,367.6,482.2,391.3,482.2,419.4);
      bezierVertex(482.1,447,461.2,469.3,430.9,469.3);
    endShape();

  } else if(puncIndex == 6){
    beginShape();
      vertex(383.8,164);
      bezierVertex(404.9,169,420.4,183.6,420.4,207.6);
      bezierVertex(420.4,234.7,399.3,252.7,372.3,252.7);
      bezierVertex(339.7,252.7,319.1,227.6,319.1,192.5);
      bezierVertex(319.1,139.8,368.8,104.2,423.9,102.2);
      vertex(423.9,106.2);
      bezierVertex(390.8,111.7,366.2,136.3,363.7,163.9);
      vertex(383.8,163.9);
    endShape();
    beginShape();
      vertex(499.2,164);
      bezierVertex(520.3,169,535.8,183.6,535.8,207.6);
      bezierVertex(535.8,234.7,514.7,252.7,487.7,252.7);
      bezierVertex(455.1,252.7,434.5,227.6,434.5,192.5);
      bezierVertex(434.5,139.8,484.2,104.2,539.3,102.2);
      vertex(539.3,106.2);
      bezierVertex(506.2,111.7,481.6,136.3,479.1,163.9);
      vertex(499.2,163.9);
    endShape();
    
  } else if(puncIndex == 7){
    beginShape();
      vertex(399.9,174.7);
      vertex(449.5,186.9);
      bezierVertex(465.8,191.0,471.4,202.8,465.1,213.9);
      bezierVertex(458.8,224.3,445.5,225.8,434,213.5);
      vertex(398.4,176.8);
      vertex(412.8,225.7);
      bezierVertex(417.6,242.0,409.8,252.4,397.2,252.4);
      bezierVertex(385.0,252.4,377.2,242.0,382.0,225.7);
      vertex(396.4,176.8);
      vertex(361,213.6);
      bezierVertex(349.1,225.8,335.8,224.3,329.9,214);
      bezierVertex(323.6,202.9,329.2,191,345.5,187);
      vertex(394.8,174.8);
      vertex(345.5,162.2);
      bezierVertex(329.2,158.5,323.6,146.6,329.9,135.5);
      bezierVertex(335.8,125.1,349.2,123.6,361,135.9);
      vertex(396.6,172.6);
      vertex(382.2,123.7);
      bezierVertex(377.4,107.4,385.2,97.0,397.4,97.0);
      bezierVertex(410.0,97.0,417.8,107.4,413.0,123.7);
      vertex(398.9,172.6);
      vertex(434.2,135.9);
      bezierVertex(445.7,123.7,459.0,125.2,465.3,135.5);
      bezierVertex(471.6,146.6,466.0,158.5,449.7,162.2);
      vertex(399.9,174.7);
    endShape();
    
  } else if(puncIndex == 8){
    beginShape();
      vertex(393.4,503.8);
      vertex(363.8,503.8);
      vertex(363.8,59.2);
      vertex(393.4,59.2);
      vertex(393.4,503.8);
    endShape();
    
  } else if(puncIndex == 9){          //////// AMPERSAND
    
    beginShape();
      vertex(545.8,464.7);
      vertex(513.8,422.9);
      bezierVertex(484.6,452.1,452.5,469.5,418.9,469.5);
      bezierVertex(371.9,469.5,328.8,434.5,328.8,375.7);
      bezierVertex(328.8,326.1,362.0,297,398.0,283.4);
      vertex(398.0,272.7);
      bezierVertex(386.1,255.2,377.8,236.3,377.8,210.5);
      bezierVertex(377.8,162.9,411.8,124.5,459.6,124.5);
      bezierVertex(499.9,124.5,533.5,150.7,533.5,190.1);
      bezierVertex(533.5,226.5,502.7,244.5,477.4,250.3);
      vertex(477.4,256.6);
      vertex(544.6,345);
      bezierVertex(560.4,322.2,574.2,294.5,585.7,263.9);
      vertex(585.7,254.2);
      vertex(549.3,254.2);
      vertex(549.3,227.5);
      vertex(658.4,227.5);
      vertex(658.4,254.2);
      vertex(618.9,254.2);
      bezierVertex(601.9,294,582.1,332.4,560.0,365.5);
      vertex(635.1,464.6);
      vertex(545.8,464.6);

      beginContour();
        vertex(454.1,407.8);
        bezierVertex(467.5,407.8,480.6,403.9,493.2,396.1);
        vertex(428.4,312);
        bezierVertex(421.7,303.3,415.0,295.5,408.6,287.2);
        bezierVertex(398.3,300.3,392.8,315.4,392.8,338.2);
        bezierVertex(392.8,381.6,418.9,407.8,454.1,407.8);
      endContour();
      beginContour();
        vertex(468.7,245.6);
        bezierVertex(482.5,233.5,488.5,210.1,488.5,188.3);
        bezierVertex(488.5,161.6,477.4,145.1,460,145.1);
        bezierVertex(444.2,145.1,433.9,158.7,433.9,176.7);
        bezierVertex(433.9,197,448.2,218.4,468.7,245.6);
      endContour();
    endShape();
    
  } 
}


function drawDiscoColors(){
  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#00696F");
  discoCol[discoCol.length - 1][1] = color("#D8007D");
  discoCol[discoCol.length - 1][2] = color("#ffa89e");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#a01f93");
  discoCol[discoCol.length - 1][1] = color("#00c3ff");
  discoCol[discoCol.length - 1][2] = color("#ffcdff");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#008100");
  discoCol[discoCol.length - 1][1] = color("#85e03b");
  discoCol[discoCol.length - 1][2] = color("#e8ff7a");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#ff5e00");
  discoCol[discoCol.length - 1][1] = color("#fbb03b");
  discoCol[discoCol.length - 1][2] = color("#ffd600");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#820000");
  discoCol[discoCol.length - 1][1] = color("#607cff");
  discoCol[discoCol.length - 1][2] = color("#c4a6ff");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#bf4d00");
  discoCol[discoCol.length - 1][1] = color("#c69c6d");
  discoCol[discoCol.length - 1][2] = color("#ffcbc5");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#00696f");
  discoCol[discoCol.length - 1][1] = color("#c4a6ff");
  discoCol[discoCol.length - 1][2] = color("#ffcccc");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#b1040e");
  discoCol[discoCol.length - 1][1] = color("#db6b85");
  discoCol[discoCol.length - 1][2] = color("#ffcbc5");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#720087");
  discoCol[discoCol.length - 1][1] = color("#c4a6ff");
  discoCol[discoCol.length - 1][2] = color("#ffcccc");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#b1040e");
  discoCol[discoCol.length - 1][1] = color("#ff5e00");
  discoCol[discoCol.length - 1][2] = color("#ffd600");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#820000");
  discoCol[discoCol.length - 1][1] = color("#ff0000");
  discoCol[discoCol.length - 1][2] = color("#ffb2b2");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#720087");
  discoCol[discoCol.length - 1][1] = color("#607cff");
  discoCol[discoCol.length - 1][2] = color("#c7b299");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#bf4d00");
  discoCol[discoCol.length - 1][1] = color("#fbb03b");
  discoCol[discoCol.length - 1][2] = color("#ffcbc5");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#8500b9");
  discoCol[discoCol.length - 1][1] = color("#d700ff");
  discoCol[discoCol.length - 1][2] = color("#ff85c2");
    
  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#001cad");
  discoCol[discoCol.length - 1][1] = color("#8da1ff");
  discoCol[discoCol.length - 1][2] = color("#e1d2ff");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#001cad");
  discoCol[discoCol.length - 1][1] = color("#c14cff");
  discoCol[discoCol.length - 1][2] = color("#ffa89e");
    
  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#b1040e");
  discoCol[discoCol.length - 1][1] = color("#ff5e00");
  discoCol[discoCol.length - 1][2] = color("#ff9dff");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#00696f");
  discoCol[discoCol.length - 1][1] = color("#00bf9d");
  discoCol[discoCol.length - 1][2] = color("#ffcccc");

  discoCol[discoCol.length] = []
  discoCol[discoCol.length - 1][0] = color("#754c24");
  discoCol[discoCol.length - 1][1] = color("#a67c52");
  discoCol[discoCol.length - 1][2] = color("#ffcbc5");
}