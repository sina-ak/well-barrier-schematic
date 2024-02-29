import './App.css';
import WellComponent from './components/drilling-shape/drilling';

function App() {
  const data = {
    "Public": {
      TotalWellWidth: 790,
      TotalWellDepth: 2500,//total of well depth => vertical depth + horizontal depth 
      VerticalWellDepth: 1050,
      CurveDegree: 10
    },
    "Casings": [
      { startOfTotalDepth: 0, endOfTotalDepth: 1500, label: 'perforation', show: true, hasPerforation: true },
      { startOfTotalDepth: 0, endOfTotalDepth: 400, label: 'Surface Casing', show: true, hasPerforation: false },
      { startOfTotalDepth: 200, endOfTotalDepth: 900, label: 'Intermediate Casing', show: false, hasPerforation: false }
    ],
    "Packers": [
      700, 1200  // packers depth
    ],
    "MainPipe": [
      300, 200, 300, 100, 200, 300, 100, 200, 300, 100 //value of each tubing part (meter)
    ],
    "Nipples": [
      890, 400 // nipples depth
    ],
    "LineHangers": [
      1300, 1100  // lineHangers depth 
    ],
    "TRSSSV": 550,
    "ExpansionJoint": 1200,

  }
  return (
    <div className="App">
      {/* <WellComponent wellData={wellData}/> */}
      <WellComponent data={data} />
    </div>
  );
}

export default App;
