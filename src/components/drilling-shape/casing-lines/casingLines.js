import React, { useRef, useEffect, useState } from 'react';
import Perforation from '../perforation/perforation';

const CasingLine = ({ startOfTotalDepth, endOfTotalDepth, label, show, hasPerforation, middleOfShapeX, middleOfShapeY, totalWellDepth, verticalWellDepth, curveDegree, x, offsetY }) => {
    const labelRef = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const triangleSize = 30;
    const labelOffset = 40;
    let trianglePoints1 = ``;
    let trianglePoints2 = ``;
    const startX = x;
    const endX = x;
    const startY = startOfTotalDepth + offsetY;
    const endY = startY + endOfTotalDepth;
    const lineSize = endOfTotalDepth - startOfTotalDepth;
    const offsetCasings = 2 * (middleOfShapeX - x);
    const vertical = true;
    let leftPerforations = [];
    const rightPerforations = [];


    useEffect(() => {

        // Calculate the width of the label text
        if (labelRef.current) {
            setLabelWidth(labelRef.current.getComputedTextLength());
        }
    }, [label]);

    // Perforation
    if (hasPerforation) {
        const positionY = endY - 100;
        const triangleSize = 40;
        let i = 0;
        for (let i = 0; i < 4; i++) {
            leftPerforations.push(
                <Perforation key={i} x1={startX - 8} y1={positionY - (i * triangleSize)} x2={startX + offsetCasings + 8} y2={positionY - (i * triangleSize)} triangleSize={triangleSize} />
            )
        }

    }

    // Triangle points calculated based on the size of the triangle
    if (vertical) {
        trianglePoints1 = `${startX - triangleSize},${endY} ${startX},${endY - triangleSize} ${startX},${endY}`;
        trianglePoints2 = `${startX + triangleSize + offsetCasings},${endY} ${startX - 5 + offsetCasings},${endY - triangleSize} ${startX - 9 + offsetCasings},${endY}`;
    }
    else {
        trianglePoints1 = `${endX - triangleSize},${endY} ${endX},${endY - 5 - triangleSize} ${endX},${endY}`;
        trianglePoints2 = `${endX - triangleSize},${endY + offsetCasings} ${endX},${endY + 5 + triangleSize + offsetCasings} ${endX},${endY + offsetCasings - 9}`;
    }
    const curvePoint = [];
    const radius = 200; // Radius of the curve
    const curveDegrees = 90; // Degrees of the curve
    const steps = 2; // Degrees to move per step for the curve

    // Start with the vertical line
    curvePoint.push(`M${startX + offsetCasings + 500},${startY}`);
    curvePoint.push(`L${startX + offsetCasings + 500},${startY + verticalWellDepth}`);

    // Calculate the curved section
    let lastX = startX + offsetCasings + 500;
    let lastY = startY + verticalWellDepth;
    let PointAfterCurveY = 0;
    let PointAfterCurveX = 0;
    for (let angle = 0; angle <= curveDegrees; angle += steps) {
        const thetaRad = (angle * Math.PI) / 180; // Convert angle to radians

        // Calculate the x and y coordinates for the curve
        PointAfterCurveY = lastY + radius * Math.sin(thetaRad);
        PointAfterCurveX = lastX + radius * (1 - Math.cos(thetaRad));
        curvePoint.push(`L${PointAfterCurveX},${PointAfterCurveY}`);
    }

    // Calculate endpoint for the straight line after the curve
    const endAngleRad = ((curveDegrees) * Math.PI) / 180; // Convert total curve angle to radians
    const straightLineLength = totalWellDepth - verticalWellDepth - radius; // Adjust as necessary
    const endStraightY = lastX  + (straightLineLength * Math.sin(endAngleRad)) ;
    const endStraightX = lastY  + (straightLineLength*(1 - Math.cos(endAngleRad))) ;

    // Add the straight line
    curvePoint.push(`L${endStraightX},${endStraightY}`);





    //-------------------------
    return (

        <g>
            {/* The casing line */}

            {/* casing line1 */}


            <React.Fragment>

                <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="#999292" strokeWidth="16" />
                <text ref={labelRef} x={startX - labelOffset - labelWidth} y={endY - 10} fontSize="28">
                    {label}
                </text>
            </React.Fragment>
            {hasPerforation ? (
                <React.Fragment>
                    {leftPerforations.map((item => item))}
                </React.Fragment>
            ) : (
                null
            )}
            <polygon points={trianglePoints1} fill="#999292" />

            {/* casing line2 */}
            <React.Fragment>
                <path d={curvePoint.map((item) => item)} stroke="#999292" strokeWidth="16" fill="none" />
                <line x1={startX + offsetCasings} y1={startY} x2={endX + offsetCasings} y2={endY} stroke="#999292" strokeWidth="16" />
                <text ref={labelRef} x={startX + offsetCasings + labelOffset} y={endY - 10} fontSize="28">
                    {label}
                </text>
            </React.Fragment>

            <polygon points={trianglePoints2} fill="#999292" />
        </g>

    );
};

export default CasingLine;

