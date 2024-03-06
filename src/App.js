
import "./App.css";
import ClickIncrease from "components/ClickIncrease";
import HoverIncrease from 'components/HoverIncrease'
function App() {
  return (
    <div className="App">
      <ClickIncrease  text="check"/>
      <HoverIncrease />
    </div>
  );
}

export default App;
