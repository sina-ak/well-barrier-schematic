import React from "react";
import CasingLine from '../casing-lines/casingLines';
import WellCap from '../well-cap/wellCap';
import Packer from '../packer/packer';
import MainPipe from '../main-pipe/mainPipe';
import Nipple from '../nipple/nipple';

const SvgHandler = ({ totalInfo }) => {
    const data = totalInfo.data;
    const verticalPart = (
        <g>
            {/* Draw the main pipe */}
            <MainPipe
                pipeSizes={totalInfo.v_mainPipes} TRSSSV={data.TRSSSV} expansionJoint={data.ExpansionJoint} lineHanger={totalInfo.v_lineHangers} middleOfShapeX={totalInfo.middleOfShapeX} offsetY={totalInfo.offsetY} totalDepth={data.Public.TotalWellDepth} startOf={0} verticalWellDepth={data.Public.VerticalWellDepth}
            />
            {/* Draw the Nipples */}
            <Nipple nipples={totalInfo.v_nipples} middleOfShapeX={totalInfo.middleOfShapeX}
            />

            {/* Draw the packers */}
            {totalInfo.v_packers.map((depth, index) => (
                <Packer key={20000+index}
                    packerDepth={depth} middleOfShapeX={totalInfo.middleOfShapeX} width={240} offsetY={totalInfo.offsetY}
                />
            ))}
            {/* Draw the casings */}
            {totalInfo.v_casings.map((casing, index) =>
            (
                casing.show ?
                    (
                        <CasingLine key={index} {...casing} totalWellDepth={data.Public.TotalWellDepth} verticalWellDepth={data.Public.VerticalWellDepth} curveDegree={data.Public.CurveDegree} offsetY={totalInfo.offsetY} middleOfShapeX={totalInfo.middleOfShapeX} />
                    ) : (
                        null
                    )
            ))}
            {/* Draw the well cap */}
            <WellCap />
        </g>
    );
    const rotatedPart = (
        <g transform={`rotate(${-data.Public.CurveDegree}, ${totalInfo.originPointX}, ${totalInfo.originPointY })`}>
            <MainPipe
                pipeSizes={totalInfo.r_mainPipes} TRSSSV={data.TRSSSV} expansionJoint={data.ExpansionJoint} lineHanger={totalInfo.r_lineHangers} middleOfShapeX={totalInfo.middleOfShapeX} offsetY={totalInfo.offsetY} totalDepth={data.Public.TotalWellDepth}  startOf={data.Public.VerticalWellDepth}  verticalWellDepth={data.Public.VerticalWellDepth}
            />
            <Nipple nipples={totalInfo.r_nipples} middleOfShapeX={totalInfo.middleOfShapeX} 
            />
            {totalInfo.r_packers.map((depth, index) => (
                <Packer key={30000+index}
                    packerDepth={depth} middleOfShapeX={totalInfo.middleOfShapeX} width={240} offsetY={data.Public.VerticalWellDepth + totalInfo.offsetY}
                />
            ))}
            {totalInfo.r_casings.map((casing, index) =>
            (
                casing.show ?
                    (
                        <CasingLine key={index} {...casing} totalWellDepth={data.Public.TotalWellDepth} verticalWellDepth={data.Public.VerticalWellDepth} curveDegree={data.Public.CurveDegree}  offsetY={totalInfo.offsetY} middleOfShapeX={totalInfo.middleOfShapeX} />
                    ) : (
                        null
                    )
            ))}
        </g>
    );
    return (
        <React.Fragment>
            {verticalPart}
            {rotatedPart}
        </React.Fragment>
    )
}

export default SvgHandler;