import React from 'react';
import SvgHandler from './svg-handler/svgHandler';



/////////////////// sample of input json //////////////////


// const data = {
//   "Public": {
//     TotalWellWidth: 790,
//     TotalWellDepth: 2500,//total of well depth => vertical depth + horizontal depth 
//     VerticalWellDepth: 1050,
//     CurveDegree: 10
//   },
//   "Casings": [
//     { startOfTotalDepth: 0, endOfTotalDepth: 1500, label: 'perforation', show: true, hasPerforation: true },
//     { startOfTotalDepth: 0, endOfTotalDepth: 400, label: 'Surface Casing', show: true, hasPerforation: false },
//     { startOfTotalDepth: 200, endOfTotalDepth: 900, label: 'Intermediate Casing', show: false, hasPerforation: false }
//   ],
//   "Packers": [
//       700 , 1200  // packers depth
//   ],
//   "MainPipe": [
//     300, 200, 300, 100, 200, 300, 100, 200, 300, 100 //value of each tubing part (meter)
//   ],
//   "Nipples" : [
//     890, 400 // nipples depth
//   ],
//   "LineHangers" : [
//     1300, 1100  // lineHangers depth 
//   ],
//   "TRSSSV" : 550,
//   "ExpansionJoint":1200,

// }

const WellComponent = ({ data }) => {



  const totalZoneWidth = 3000;

  ///// r => rotate part / v => vertical part
  const rotateOffset = 0;
  const r_casings = [];
  const v_casings = [];
  const r_mainPipes = [];
  const v_mainPipes = [];
  const r_lineHangers = [];
  const v_lineHangers = [];
  let sumDepth = 0;
  const verticalDepth = data.Public.VerticalWellDepth;
  var totalInfo = {
    data: data,
    r_casings: r_casings,
    v_casings: v_casings,
    r_mainPipes: r_mainPipes,
    v_mainPipes: v_mainPipes,
    r_lineHangers:r_lineHangers,
    v_lineHangers:v_lineHangers,
    middleOfShapeX: 790,
    middleOfShapeY: 1550,
    offsetY: 450,  // space between top of screen and end of well-cap
    closestCasingLineX: 670, //inner casing position
    sapaceBetweenCasings: 60,
  }
  //handle casings
  data.Casings.forEach((element, index) => {
    if (element.endOfTotalDepth <= verticalDepth) {
      v_casings.push({ startOfTotalDepth: element.startOfTotalDepth, endOfTotalDepth: element.endOfTotalDepth, x: (totalInfo.closestCasingLineX - (index * totalInfo.sapaceBetweenCasings)), label: element.label, show: element.show, hasPerforation: element.hasPerforation, justLine: false })
    }
    else {
      v_casings.push({ startOfTotalDepth: element.startOfTotalDepth, endOfTotalDepth: verticalDepth, x: (totalInfo.closestCasingLineX - (index * totalInfo.sapaceBetweenCasings)), label: element.label, show: element.show, hasPerforation: false, justLine: true })
      r_casings.push({ startOfTotalDepth: verticalDepth, endOfTotalDepth: element.endOfTotalDepth, x: (totalInfo.closestCasingLineX - (index * totalInfo.sapaceBetweenCasings)), label: element.label, show: element.show, hasPerforation: element.hasPerforation, justLine: false })
    }
  });
  //handle main pipes
  sumDepth = 0;
  let breakPointFlag = 0; // 0 => add vertical point | 1 => breakPoint | 2 => add rotate point 
  data.MainPipe.forEach((element, index) => {
    sumDepth += element;

    if (breakPointFlag === 0) {
      if(sumDepth <= verticalDepth)
        v_mainPipes.push({ size: element, index: index })
      else 
        breakPointFlag = 1;
    }
    if (breakPointFlag === 1) {
      v_mainPipes.push({ size: verticalDepth - (sumDepth - element), index: index })
      r_mainPipes.push({ size: sumDepth - verticalDepth, index: index });
      breakPointFlag = 2;
      return;
    }
    if (breakPointFlag === 2) {
      r_mainPipes.push({ size: element, index: index })
    }
  });

  data.LineHangers.forEach((element, index) => {
    if(element <= verticalDepth){
      v_lineHangers.push(element);
    }
    else{
      r_lineHangers.push(element - verticalDepth);
    }
  });




  return (

    <svg width={totalZoneWidth} height={totalInfo.offsetY + data.Public.TotalWellDepth} xmlns="http://www.w3.org/2000/svg">
      <SvgHandler totalInfo={totalInfo} />
    </svg>
  );
};

export default WellComponent;

