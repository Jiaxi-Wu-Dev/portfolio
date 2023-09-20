import "./App.css";

import ParticlesComponent from "./components/ParticlesComponent";
import LineComponent from "./components/LineComponent";

function App() {
  return (
    <div id="homePageSplitScreen">
      <div>
        <ParticlesComponent />
      </div>
      <div>
        <LineComponent />
      </div>
    </div>
  );
}

export default App;
