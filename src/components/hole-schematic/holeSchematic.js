import React from "react";
import PipeCover from "./pipe-cover/pipeCover";
import Pipe from "./pipe/pipe";
import "./holeSchematic.css";
import SizeButton from "./size-button/sizeButton";
import DepthIndicator from "./depth-indicator/depthIndicator";



// const holesData = [
//     { depth: 300, inch: 36 },
//     { depth: 600, inch: 24 },
//     { depth: 200, inch: 17 },
//     { depth: 600, inch: 12 },
//     { depth: 800, inch: 16 },
//     { depth: 200, inch: 10 },
//     { depth: 400, inch: 9 },
//     { depth: 300, inch: 8 },
//     { depth: 500, inch: 7 },
//     { depth: 1100, inch: 5 },
// ];

const HoleSchematic = ({holesData}) => {
    const offsetY = 100;
    const totalZoneWidth = 3000;
    const middleOfShapeX = totalZoneWidth / 2 ;
    const depression = 22;
    let sumSize = offsetY;
    let sum = 0;
    const pipeArray = [];
    const PipeCoverArray = [];
    const indicatorArray = [];

    holesData.forEach((el, index) => { 
        indicatorArray.push(
            <DepthIndicator key={1000+index} depth={sumSize} label={sum}/>
        )
        pipeArray.push(
            <Pipe key={2000+index} startOf={sumSize} size={el.depth} index={index} middleOfShapeX={middleOfShapeX} />
        )
        PipeCoverArray.push(
            <PipeCover key={3000+index} startOf={sumSize} size={el.depth} index={index} middleOfShapeX={middleOfShapeX} />
        )
        if (el.depth - ((index + 1) * depression) > 100) {
            sumSize += (el.depth - ((index + 1) * depression));
        }
        else {
            sumSize += (el.depth - (el.depth / 3));
        }
        sum+=el.depth;
    })

    //ADD END POINTS
    indicatorArray.push(
        <DepthIndicator depth={sumSize} label={sum}/>
    )



    return (
        <div className="container" >
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${totalZoneWidth} ${sumSize + 300}`}
            >
                {holesData.map((item,index)=>
                    <SizeButton key={index} size={item.inch} index={index} middleOfShapeX={middleOfShapeX} />
                )}
                <rect x="0" y={offsetY - 50} width="150" height={sumSize + 100} fill="url(#verticalGradient)" rx="100" />
                {indicatorArray.map(item => item)}
                {pipeArray.map(item => item)}
                {PipeCoverArray.reverse().map(item => item)}
                <defs>
                    <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6F85A6" />
                        <stop offset="2%" stopColor="#97AFD4" />
                        <stop offset="30%" stopColor="#BACDEA" />
                        <stop offset="50%" stopColor="#7A91B3" />
                        <stop offset="70%" stopColor="#BACDEA" />
                        <stop offset="80%" stopColor="#97AFD4" />
                        <stop offset="100%" stopColor="#6F85A6" />
                    </linearGradient>
                    <linearGradient id="pipeCoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#707070" />
                        <stop offset="50%" stopColor="#D9D9D9" />
                        <stop offset="100%" stopColor="#707070" />
                    </linearGradient>
                    <linearGradient id="UpInPipeCoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#444444" />
                        <stop offset="45%" stopColor="#969696" />
                        <stop offset="55%" stopColor="#969696" />
                        <stop offset="100%" stopColor="#444444" />
                    </linearGradient>
                    <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93cb71" />
                        <stop offset="23%" stopColor="#bd953e" />
                        <stop offset="50%" stopColor="#4fa6d0" />
                        <stop offset="80%" stopColor="#50260e" />
                        <stop offset="100%" stopColor="#420000" />
                    </linearGradient>
                </defs>
            </svg>
        </div>


    );
}

export default HoleSchematic;