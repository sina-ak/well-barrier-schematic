import React from 'react';
import CasingLine from './casing-lines/casingLines';
import WellCap from './well-cap/wellCap';
import Packer from './packer/packer';
import MainPipe from './main-pipe/mainPipe';
import Nipple from './nipple/nipple';



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

const WellComponent = ({data}) => {

  
  const totalZoneWidth = 3000;
  const middleOfShapeX = 790;
  const middleOfShapeY = 1550; // test point
  const closestCasingLineX = 670; //inner casing position
  const sapaceBetweenCasings = 60;
  const offsetY = 450; // space between top of screen and end of well-cap

  let croppedSegments = [];
  let rotatedSegment = null;
  let remainSegment = <use href="#remain-part" x="0" y="0" width={totalZoneWidth} height={offsetY + data.Public.VerticalWellDepth} />;

  if (data.Public.TotalWellDepth > data.Public.VerticalWellDepth) {
    for (let i = 0; i < (data.Public.CurveDegree); i++) {
      croppedSegments.push(
        <use key={i} href="#cropped-part" x={middleOfShapeX - (data.Public.TotalWellWidth / 2)} y={offsetY + data.Public.VerticalWellDepth} width={data.Public.TotalWellWidth} height="10" transform={`rotate(${-(i)} ${middleOfShapeX + (data.Public.TotalWellWidth / 2) - 80} ${offsetY + data.Public.VerticalWellDepth })`} />
      )
    }
    rotatedSegment = (
      <use href="#rotated-part" x={middleOfShapeX - (data.Public.TotalWellWidth / 2)} y={offsetY + data.Public.VerticalWellDepth} width={data.Public.TotalWellWidth} height={data.Public.TotalWellDepth - data.Public.VerticalWellDepth} transform={`rotate(${-data.Public.CurveDegree} ${middleOfShapeX + (data.Public.TotalWellWidth / 2) - 80} ${offsetY + data.Public.VerticalWellDepth })`} />
    );
  }

  const generatedSVG = (
    <g>
      {/* Draw the main pipe */}
      <MainPipe
        pipeSizes={data.MainPipe} TRSSSV={data.TRSSSV} expansionJoint={data.ExpansionJoint} lineHanger={data.LineHangers} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} offsetY={offsetY} totalDepth={data.Public.TotalWellDepth}
      />
      {/* Draw the Nipples */}
      <Nipple nipples={data.Nipples.slice().sort((a, b) => a - b)} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} offsetY={offsetY} totalDepth={data.Public.TotalWellDepth}
      />

      {/* Draw the packers */}
      {data.Packers.map((depth, index) => (
        <Packer key={index}
        packerDepth={depth} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} width={240} offsetY={offsetY} totalDepth={data.Public.TotalWellDepth}
        />
      ))}
      {/* Draw the casings */}
      {data.Casings.map((casing, index) =>
      (
        casing.show ?
          (
            <CasingLine key={index} {...casing} totalWellDepth={data.Public.TotalWellDepth} verticalWellDepth={data.Public.VerticalWellDepth} curveDegree={data.Public.CurveDegree} x={(closestCasingLineX - (index * sapaceBetweenCasings))} offsetY={offsetY} middleOfShapeX={middleOfShapeX} />
          ) : (
            null
          )
      ))}
      {/* Draw the well cap */}
      <WellCap />
    </g>
  );


  return (

    <svg width={totalZoneWidth} height={offsetY + data.Public.TotalWellDepth} xmlns="http://www.w3.org/2000/svg">
      <symbol id="cropped-part" viewBox={`${middleOfShapeX - (data.Public.TotalWellWidth / 2)} ${offsetY + data.Public.VerticalWellDepth} ${data.Public.TotalWellWidth} 1`}>
        {generatedSVG}
      </symbol>
      {croppedSegments.map((item) => item)}
      <symbol id="rotated-part" viewBox={`${middleOfShapeX - (data.Public.TotalWellWidth / 2)} ${offsetY + data.Public.VerticalWellDepth} ${data.Public.TotalWellWidth} ${data.Public.TotalWellDepth - data.Public.VerticalWellDepth}`}>
        {generatedSVG}
      </symbol>
      {rotatedSegment}
      <symbol id="remain-part" viewBox={`0 0 ${totalZoneWidth} ${offsetY + data.Public.VerticalWellDepth}`}>
        {generatedSVG}
      </symbol>
      {remainSegment}
    </svg>
  );
};

export default WellComponent;

