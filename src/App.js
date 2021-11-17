import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Characters from "./Pages/Characters/Characters";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters/:userId" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
