import './App.css';
import WellComponent from './components/drilling-shape/drilling';

function App() {
  const wellData = {
    surfaceEquipmentDepth: 300, // This is the vertical position of the surface equipment on the schematic
    casings: [
      {
        label: 'Conductor Casing',
        depth: 4000, // This should be the length of the casing
      },
      {
        label: 'Surface Casing',
        depth: 10000, // This should be the length of the casing
      },
      {
        label: 'Intermediate Casing',
        depth: 13000, // This should be the length of the casing
      },
      // Add other casings as necessary
    ],
    tubings: [
      {
        label: 'Pk 2 Tubing',
        depth: 14000, // This should be the length of the tubing
      },
      // Add other tubings as necessary
    ],
    perforations: [
      {
        label: 'Zone#01 Perforation',
        depthStart: 14500,
        depthEnd: 15000,
      },
      // Add other perforations as necessary
    ],
    // Add other well components as necessary
  };


  const degree = -60;
  return (
    <div className="App">
      {/* <WellComponent wellData={wellData}/> */}
      <WellComponent degree={degree}/>
    </div>
  );
}

export default App;
