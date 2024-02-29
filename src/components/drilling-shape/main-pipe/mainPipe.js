import React from "react";
import LinerHanger from "../linerHanger/linerHanger";
import TRSSV from "../TRSSV/TRSSV";
import ExpansionJoint from "../expansion-joint/expansionJoint";

const MainPipe = ({ pipeSizes, TRSSSV, expansionJoint, lineHanger, middleOfShapeX, offsetY, totalDepth }) => {
    const bigestWidth = 120;
    const tubingOffset = bigestWidth + 20;
    let calcWidth = 0;
    let caclSize = 0;

    const drawPipes = [];
    pipeSizes.map((size, index) => {
        caclSize += size;
        calcWidth = bigestWidth - (index * 10);
        if (TRSSSV && caclSize > TRSSSV) {
            drawPipes.push(
                <TRSSV key={100 + index}
                    depth={TRSSSV} middleOfShapeX={middleOfShapeX} calcWidth={calcWidth} offsetY={offsetY} />
            )
        }
        if (expansionJoint && caclSize > expansionJoint) {
            drawPipes.push(
                <ExpansionJoint key={200 + index}
                    depth={expansionJoint} middleOfShapeX={middleOfShapeX} calcWidth={calcWidth} offsetY={offsetY} />
            )
        }
        const drawPipe = (
            <React.Fragment key={300 + index}>
                <rect x={middleOfShapeX - (calcWidth / 2)} y={offsetY} width={calcWidth} height={caclSize} ry="5" fill="#8C9BDC" stroke="#5b5b5b" strokeWidth="3" />
                <rect x={middleOfShapeX - (calcWidth / 2) - 1} y={offsetY + caclSize} width={calcWidth + 2} height={10} rx="5" fill="#eaac00" stroke="#000" strokeWidth="" />
                <rect x={middleOfShapeX - ((calcWidth - 10) / 2)} y={offsetY + caclSize + 10} width={calcWidth - 10} height={10} fill="#eaac00" stroke="#000" strokeWidth="" />
            </React.Fragment>
        )
        drawPipes.push(drawPipe)

    });

    return (
        <g xmlns="http://www.w3.org/2000/svg" >
            <rect x={middleOfShapeX - (tubingOffset / 2)} y={offsetY} width={tubingOffset} height={totalDepth} fill="#e5e5e5" strokeWidth="0" />
            <line x1={middleOfShapeX - (tubingOffset / 2)} y1={offsetY} x2={middleOfShapeX - (tubingOffset / 2)} y2={offsetY + totalDepth} stroke="#4c4c4c" strokeWidth="4" />
            <line x1={middleOfShapeX + (tubingOffset / 2)} y1={offsetY} x2={middleOfShapeX + (tubingOffset / 2)} y2={offsetY + totalDepth} stroke="#4c4c4c" strokeWidth="4" />
            {drawPipes.reverse().map(item => item)}
            {lineHanger.map((depth, index) =>
                <LinerHanger
                    key={index} depth={depth} middleOfShapeX={middleOfShapeX} offsetY={offsetY} tubingOffset={tubingOffset}
                />
            )}
        </g>
    )
}

export default MainPipe;