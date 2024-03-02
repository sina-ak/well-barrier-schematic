import React from "react";
import LinerHanger from "../linerHanger/linerHanger";
import TRSSV from "../TRSSV/TRSSV";
import ExpansionJoint from "../expansion-joint/expansionJoint";

const MainPipe = ({ pipeSizes, TRSSSV, expansionJoint, lineHanger, middleOfShapeX, offsetY, totalDepth, startOf, verticalWellDepth }) => {

    const bigestWidth = 120;
    const tubingOffset = bigestWidth + 20;
    let calcWidth = 0;
    let caclSize = 0;
    const drawPipes = [];
    pipeSizes.map((element, elIndex) => {
        const startOfShape = offsetY + caclSize + startOf;
        caclSize += element.size;
        calcWidth = bigestWidth - (element.index * 10);
        if (TRSSSV && caclSize + startOf > TRSSSV && TRSSSV >= startOf) {
            drawPipes.push(
                <TRSSV key={100 + element.index}
                    depth={TRSSSV} middleOfShapeX={middleOfShapeX} calcWidth={calcWidth} offsetY={offsetY} />
            )
        }
        if (expansionJoint && caclSize + startOf > expansionJoint && expansionJoint >= startOf) {
            drawPipes.push(
                <ExpansionJoint key={200 + element.index}
                    depth={expansionJoint} middleOfShapeX={middleOfShapeX} calcWidth={calcWidth} offsetY={offsetY} />
            )
        }
        const drawPipe = (
            <React.Fragment key={300 + element.index}>
                <rect x={middleOfShapeX - (calcWidth / 2)} y={offsetY + startOf} width={calcWidth} height={caclSize} ry="5" fill="#8C9BDC" stroke="#5b5b5b" strokeWidth="3" />
                {elIndex != 0 ? (
                    <React.Fragment>
                        <rect x={middleOfShapeX - (calcWidth / 2) - 5} y={startOfShape} width={calcWidth + 10} height={10} rx="5" fill="#eaac00" stroke="#000" strokeWidth="" />
                        <rect x={middleOfShapeX - (calcWidth / 2)} y={startOfShape + 10} width={calcWidth} height={10} fill="#eaac00" stroke="#000" strokeWidth="" />
                    </React.Fragment>
                ) : (
                    null
                )}
            </React.Fragment>
        )
        drawPipes.push(drawPipe)

    });

    return (
        <g xmlns="http://www.w3.org/2000/svg" >
            {startOf === 0 ? (
                <React.Fragment>
                    <rect x={middleOfShapeX - (tubingOffset / 2)} y={offsetY + startOf} width={tubingOffset} height={verticalWellDepth} fill="#e5e5e5" strokeWidth="0" />
                    <line x1={middleOfShapeX - (tubingOffset / 2)} y1={offsetY + startOf} x2={middleOfShapeX - (tubingOffset / 2)} y2={offsetY + verticalWellDepth} stroke="#4c4c4c" strokeWidth="4" />
                    <line x1={middleOfShapeX + (tubingOffset / 2)} y1={offsetY + startOf} x2={middleOfShapeX + (tubingOffset / 2)} y2={offsetY + verticalWellDepth} stroke="#4c4c4c" strokeWidth="4" />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <rect x={middleOfShapeX - (tubingOffset / 2)} y={offsetY + startOf} width={tubingOffset} height={totalDepth - verticalWellDepth} fill="#e5e5e5" strokeWidth="0" />
                    <line x1={middleOfShapeX - (tubingOffset / 2)} y1={offsetY + startOf} x2={middleOfShapeX - (tubingOffset / 2)} y2={offsetY + startOf + totalDepth - verticalWellDepth} stroke="#4c4c4c" strokeWidth="4" />
                    <line x1={middleOfShapeX + (tubingOffset / 2)} y1={offsetY + startOf} x2={middleOfShapeX + (tubingOffset / 2)} y2={offsetY + startOf + totalDepth - verticalWellDepth} stroke="#4c4c4c" strokeWidth="4" />
                </React.Fragment>
            )
            }

            {drawPipes.reverse().map(item => item)}
            {lineHanger.map((depth, index) =>
                <LinerHanger
                    key={index} depth={depth} middleOfShapeX={middleOfShapeX} offsetY={offsetY + startOf} tubingOffset={tubingOffset}
                />
            )}
        </g>
    )
}

export default MainPipe;