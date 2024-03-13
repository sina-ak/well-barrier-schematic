import './App.css';
import WellComponent from './components/drilling-shape/drilling';
import HoleSchematic from './components/hole-schematic/holeSchematic'

function App() {
  // const data = {
  //   "Public": {
  //     TotalWellWidth: 790,
  //     TotalWellDepth: 2500,//total of well depth => vertical depth + horizontal depth 
  //     VerticalWellDepth: 1050,
  //     CurveDegree: 90
  //   },
  //   "Casings": [
  //     { startOfTotalDepth: 0, endOfTotalDepth: 1500, label: 'perforation', show: true, hasPerforation: true },
  //     { startOfTotalDepth: 0, endOfTotalDepth: 400, label: 'Surface Casing', show: true, hasPerforation: false },
  //     { startOfTotalDepth: 200, endOfTotalDepth: 900, label: 'Intermediate Casing', show: false, hasPerforation: false }
  //   ],
  //   "Packers": [
  //     700, 1200  // packers depth
  //   ],
  //   "MainPipe": [
  //     300, 200, 300, 100, 200, 300, 100, 200, 300, 100 //value of each tubing part (meter)
  //   ],
  //   "Nipples": [
  //     890, 400 // nipples depth
  //   ],
  //   "LineHangers": [
  //     1300, 1100  // lineHangers depth 
  //   ],
  //   "TRSSSV": 550,
  //   "ExpansionJoint": 1200,

  // }

  const holesData = [
    { depth: 300, inch: 36 },
    { depth: 600, inch: 24 },
    { depth: 200, inch: 17 },
    { depth: 600, inch: 12 },
    { depth: 800, inch: 16 },
    { depth: 200, inch: 10 },
    { depth: 400, inch: 9 },
    { depth: 300, inch: 8 },
    { depth: 500, inch: 7 },
    { depth: 1100, inch: 5 },
];

  return (
    <div className="App">
      {/* <WellComponent data={data} /> */}
      <HoleSchematic holesData={holesData} />
    </div>
  );
}

export default App;
