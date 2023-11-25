import { Routes, Route } from "react-router-dom";
import MyPortfolio from "./MyPortfolio";
import PokeDict from "./PokeDictionary/PokeDict";
import MyGF from "./MyGF";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/poke" element={<PokeDict />} />
        <Route path="/yein" element={<MyGF />} />
      </Routes>
    </div>
  );
}

export default App;
