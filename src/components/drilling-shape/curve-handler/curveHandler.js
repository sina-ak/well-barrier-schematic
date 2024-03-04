import React from "react";
import CurvedLines from "./curved-lines/curvedLines";

const CurveHandler = ({ totalInfo }) => {
    const totalCurves = [];
    const curvedPointY = totalInfo.data.Public.VerticalWellDepth + totalInfo.offsetY;
    const bigestWidth = 120;
    const halfTubeWidth = ((bigestWidth + 20) / 2);
    //tubing
    totalCurves.push({
        x: totalInfo.middleOfShapeX,
        y: curvedPointY,
        strokeWidth: bigestWidth + 20,
        strokeColor: "#e5e5e5"
    });
    totalCurves.push({
        x: totalInfo.middleOfShapeX - halfTubeWidth,
        y: curvedPointY,
        strokeWidth: 4,
        strokeColor: "#4c4c4c"
    });
    totalCurves.push({
        x: totalInfo.middleOfShapeX + halfTubeWidth,
        y: curvedPointY,
        strokeWidth: 4,
        strokeColor: "#4c4c4c"
    });
    //casings
    if (totalInfo.r_casings.length > 0) {
        totalInfo.r_casings.forEach(element => {
            totalCurves.push({ x: element.x, y: curvedPointY, strokeWidth: 16, strokeColor: "#999292" });
            totalCurves.push({ x: element.x + (2 * (totalInfo.middleOfShapeX - element.x)), y: curvedPointY, strokeWidth: 16, strokeColor: "#999292" });
        });
    }
    //main pipes
    if (totalInfo.r_mainPipes.length > 0) {
        const width = bigestWidth - (totalInfo.r_mainPipes[0].index * 10);
        totalCurves.push({
            x: totalInfo.middleOfShapeX,
            y: curvedPointY,
            strokeWidth: width,
            strokeColor: "#8C9BDC"
        });
        totalCurves.push({
            x: totalInfo.middleOfShapeX - (width / 2),
            y: curvedPointY,
            strokeWidth: 3,
            strokeColor: "#5b5b5b"
        });
        totalCurves.push({
            x: totalInfo.middleOfShapeX + (width / 2),
            y: curvedPointY,
            strokeWidth: 3,
            strokeColor: "#5b5b5b"
        });
    }
    //nipples
    if (totalInfo.r_nipples.length > 0) {
        totalInfo.r_nipples.forEach(element => {
            const lineOffset = 10 + (element.nippleIndex * 7)
            totalCurves.push({
                x: totalInfo.middleOfShapeX + halfTubeWidth + lineOffset,
                y: curvedPointY,
                strokeWidth: 3,
                strokeColor: "#3d8ff4"
            });
        });
    }

    return (
        <React.Fragment>
            {totalCurves.map((data, index) =>
                <CurvedLines key={index}
                    data={data}
                    curveDegree={totalInfo.data.Public.CurveDegree}
                    originPointX={totalInfo.originPointX}
                    originPointY={totalInfo.originPointY} />

            )}
        </React.Fragment>
    )
}

export default CurveHandler;