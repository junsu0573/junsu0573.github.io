import { Routes, Route } from "react-router-dom";
import MyPortfolio from "./MyPortfolio";
import PokeDict from "./PokeDictionary/PokeDict";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/poke" element={<PokeDict />} />
      </Routes>
    </div>
  );
}

export default App;
