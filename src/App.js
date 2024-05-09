import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Posts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
