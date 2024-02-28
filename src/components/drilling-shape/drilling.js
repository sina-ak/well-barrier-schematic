import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CasingLine from './casing-lines/casingLines';
import WellCap from './well-cap/wellCap';
import Packer from './packer/packer';
import MainPipe from './main-pipe/mainPipe';
import Nipple from './nipple/nipple';



const WellComponent = () => {

  const totalZoneWidth = 3000;
  const middleOfShapeX = 790;
  const middleOfShapeY = 1550; // test point
  const totalWellWidth = 790; //total of well width
  const verticalWellDepth = 1050; //total of well depth => vertical depth + horizontal depth 
  const totalWellDepth = 2500; //total of well depth => vertical depth + horizontal depth 
  const closestCasingLineX = 670; //inner casing position
  const sapaceBetweenCasings = 60;
  const curveDegree = 90;
  const offsetY = 450; // space between top of screen and end of well-cap


  const casings = [
    { startOfTotalDepth: 0, endOfTotalDepth: 1500, label: 'perforation', show: true, hasPerforation: true, middleOfShapeX: middleOfShapeX, middleOfShapeY: middleOfShapeY },
    { startOfTotalDepth: 0, endOfTotalDepth: 400, label: 'Surface Casing', show: true, hasPerforation: false, middleOfShapeX: middleOfShapeX, middleOfShapeY: middleOfShapeY },
    { startOfTotalDepth: 200, endOfTotalDepth: 900, label: 'Intermediate Casing', show: false, hasPerforation: false, middleOfShapeX: middleOfShapeX, middleOfShapeY: middleOfShapeY }
  ];
  const packers = [
    { packerDepth: 700 },
    // { packerDepth: 800, totalDepth: 650},
  ];
  const mainPipe = [300, 200, 300, 100, 200, 300, 100, 200, 300, 100];

  const TRSSSV = 550; //depth of TRSSSV ( in input added)
  const expansionJoint = 1200; //depth of expansionJoint ( in input added)
  const nipples = [890, 400];//depth of Nipples ( in input added)
  const lineHangers = [1300, 1100];//depth of lineHangers ( in input added)
  let croppedSegments = [];
  let rotatedSegment = null;
  let remainSegment = <use href="#remain-part" x="0" y="0" width={totalZoneWidth} height={offsetY + verticalWellDepth}/>;
  
  if (totalWellDepth > verticalWellDepth) {
    for (let i = 0; i < (curveDegree); i++) {
      croppedSegments.push(
        <use href="#cropped-part" x={middleOfShapeX - (totalWellWidth / 2)} y={offsetY + verticalWellDepth} width={totalWellWidth} height="10" transform={`rotate(${-(i)} ${middleOfShapeX + (totalWellWidth / 2) - 80} ${offsetY + verticalWellDepth + 50})`} />
      )
    }
    rotatedSegment = (
      <use href="#rotated-part" x={middleOfShapeX - (totalWellWidth / 2)} y={offsetY + verticalWellDepth} width={totalWellWidth} height={totalWellDepth - verticalWellDepth} transform={`rotate(${-curveDegree} ${middleOfShapeX + (totalWellWidth / 2) -80} ${offsetY + verticalWellDepth + 50})`} />
    );
  }

  const generatedSVG = (
    <g>
          {/* Draw the main pipe */}
          <MainPipe
            pipeSizes={mainPipe} TRSSSV={TRSSSV} expansionJoint={expansionJoint} lineHanger={lineHangers} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} offsetY={offsetY} totalDepth={totalWellDepth}
          />
          {/* Draw the Nipples */}
          <Nipple nipples={nipples.slice().sort((a, b) => a - b)} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} offsetY={offsetY} totalDepth={totalWellDepth}
          />

          {/* Draw the packers */}
          {packers.map((packer, index) => (
            <Packer key={index}
              {...packer} middleOfShapeX={middleOfShapeX} middleOfShapeY={middleOfShapeY} width={240} offsetY={offsetY} totalDepth={totalWellDepth}
            />
          ))}
          {/* Draw the casings */}
          {casings.map((casing, index) =>
          (
            casing.show ?
              (
                <CasingLine key={index} {...casing} totalWellDepth={totalWellDepth} verticalWellDepth={verticalWellDepth} curveDegree={curveDegree} x={(closestCasingLineX - (index * sapaceBetweenCasings))} offsetY={offsetY} />
              ) : (
                null
              )
          ))}
          {/* Draw the well cap */}
          <WellCap />
        </g>
  );
  

  return (

    <svg width={totalZoneWidth} height={offsetY + totalWellDepth} xmlns="http://www.w3.org/2000/svg">
      <symbol id="cropped-part" viewBox={`${middleOfShapeX - (totalWellWidth / 2)} ${offsetY + verticalWellDepth} ${totalWellWidth} 1`}>
        {generatedSVG}
      </symbol>
      {croppedSegments.map((item) => item)}
      <symbol id="rotated-part" viewBox={`${middleOfShapeX - (totalWellWidth / 2)} ${offsetY + verticalWellDepth} ${totalWellWidth} ${totalWellDepth - verticalWellDepth}`}>
      {generatedSVG}
      </symbol>
      {rotatedSegment}
      <symbol id="remain-part" viewBox={`0 0 ${totalZoneWidth} ${offsetY + verticalWellDepth}`}>
      {generatedSVG}
      </symbol>
      {remainSegment}
    </svg>
  );
};

export default WellComponent;

