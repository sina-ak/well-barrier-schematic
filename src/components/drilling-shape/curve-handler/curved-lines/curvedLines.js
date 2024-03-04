import React from "react";

const CurvedLines = ({ data, curveDegree, originPointX, originPointY }) => {

    const radius =  originPointX - data.x;
    function generateCirclePoints(radius, numberOfPoints, centerX, centerY, startAngle, endAngle) {
        const points = [];
        // Convert angles from degrees to radians
        const startAngleRad = ((startAngle + 1) * Math.PI) / 180;
        const endAngleRad = ((endAngle-1) * Math.PI) / 180;
        const angleStep = (endAngleRad - startAngleRad) / (numberOfPoints - 1);
    
        for (let i = 0; i < numberOfPoints; i++) {
            // Calculate angle for each point
            const angle = startAngleRad + (angleStep * i);
            // Calculate x and y coordinates
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push({x, y});
        }
        return points;
    }
    
    const points = generateCirclePoints(radius,curveDegree/3 + 1,originPointX,originPointY,180,180-curveDegree);


    const pathData = points.reduce((acc, point, index) => {
        const command = index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`;
        return acc + command;
      }, '');
    
    return (
        <path d={pathData} stroke={data.strokeColor} strokeWidth={data.strokeWidth} fill="none" />
    )
}

export default CurvedLines;