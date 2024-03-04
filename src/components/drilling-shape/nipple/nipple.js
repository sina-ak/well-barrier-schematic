import React from "react";

const Nipple = ({ nipples, middleOfShapeX}) => {
    const width = 120;
    let lineMargin = 10;
    const sideLength = 120; // Length of each side of the octagon
    const cornerRadius = 20; // Radius of the rounded corners
    const halfSideLength = sideLength / 2 + 10;
    const halfCornerRadius = cornerRadius / 2 + 30;
    let drawPipes = [];

    nipples.forEach((item) => {
        const calcSize = item.depth + item.startOf;
        const calcRightRectWidth = 7 + (item.nippleIndex * 7);
        const points = [
            middleOfShapeX - halfSideLength + cornerRadius, calcSize, // Top left corner
            middleOfShapeX + halfSideLength - cornerRadius, calcSize, // Top right corner
            middleOfShapeX + halfSideLength, calcSize + halfCornerRadius, // Right top corner
            middleOfShapeX + halfSideLength, calcSize + sideLength - halfCornerRadius, // Right bottom corner
            middleOfShapeX + halfSideLength - cornerRadius, calcSize + sideLength, // Bottom right corner
            middleOfShapeX - halfSideLength + cornerRadius, calcSize + sideLength, // Bottom left corner
            middleOfShapeX - halfSideLength, calcSize + sideLength - halfCornerRadius, // Left bottom corner
            middleOfShapeX - halfSideLength, calcSize + halfCornerRadius, // Left top corner
        ].join(',');

        const draw = (
            <React.Fragment key={item.nippleIndex}>
                {item.justLine ? (
                    <line x1={middleOfShapeX + halfSideLength + calcRightRectWidth + 3} y1={item.startOf} x2={middleOfShapeX + halfSideLength + calcRightRectWidth + 3} y2={calcSize} stroke="#3d8ff4" strokeWidth="3" />
                ) : (
                    <React.Fragment>
                        <polygon points={points} rx="10" style={{ fill: '#afafaf', stroke: '#3d8ff4', strokeWidth: 3 }} />
                        <rect x={middleOfShapeX + halfSideLength + 3} y={calcSize + halfCornerRadius} width={calcRightRectWidth} height={sideLength - (2 * halfCornerRadius)} rx="2" fill="#8ebfff" stroke="#3d8ff4" strokeWidth="3" />
                        <line x1={middleOfShapeX + halfSideLength + calcRightRectWidth + 3} y1={item.startOf} x2={middleOfShapeX + halfSideLength + calcRightRectWidth + 3} y2={calcSize + halfCornerRadius + sideLength - (2 * halfCornerRadius)} stroke="#3d8ff4" strokeWidth="3" />
                    </React.Fragment>
                )}
            </React.Fragment>

        );
        drawPipes.push(draw);
    });

    return (
        <g xmlns="http://www.w3.org/2000/svg">
            {drawPipes}
        </g>
    );
}

export default Nipple;


// const bigestWidth = 120;
// let calcWidth = 0;
// let caclSize = 0;
// const drawPipes = [];
// pipeSizes.map((size, index) => {
//     caclSize += size;
//     calcWidth = bigestWidth - (index * 10);
//     if (TRSSSV && caclSize > TRSSSV) {
//         let drawTRSSSV = (
//             <React.Fragment key={index + TRSSSV}>
//                 <rect x={middleOfShapeX - (calcWidth / 2) - 5} y={offsetY + TRSSSV} width={calcWidth + 10} height={30} ry="5" fill="#ed390f" stroke="#000" strokeWidth="3" />
//                 <rect x={middleOfShapeX - ((calcWidth + 20) / 2)} y={offsetY + TRSSSV + 30} width={calcWidth + 20} height={70} rx="8" fill="#ed390f" stroke="#000" strokeWidth="3" />
//                 <rect x={middleOfShapeX - (calcWidth / 2) - 5} y={offsetY + TRSSSV + 100} width={calcWidth + 10} height={30} ry="5" fill="#ed390f" stroke="#000" strokeWidth="3" />
//             </React.Fragment>
//         )
//         drawPipes.push(drawTRSSSV)
//     }
//     const drawPipe = (
//         <React.Fragment key={index + caclSize}>
//             <rect x={middleOfShapeX - (calcWidth / 2)} y={offsetY} width={calcWidth} height={caclSize} ry="5" fill="#8C9BDC" stroke="#5b5b5b" strokeWidth="3" />
//             <rect x={middleOfShapeX - (calcWidth / 2) - 1} y={offsetY + caclSize} width={calcWidth + 2} height={10} rx="5" fill="#eaac00" stroke="#000" strokeWidth="" />
//             <rect x={middleOfShapeX - ((calcWidth - 10) / 2)} y={offsetY + caclSize + 10} width={calcWidth - 10} height={10} fill="#eaac00" stroke="#000" strokeWidth="" />
//         </React.Fragment>
//     )
//     drawPipes.push(drawPipe)

// });
// return (
//     <g xmlns="http://www.w3.org/2000/svg"  >
//         {drawPipes.reverse().map(item => item)}
//     </g>
// )