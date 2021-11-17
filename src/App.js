import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Characters from "./Pages/Characters/Characters";
import Main from "./Pages/Main/Main";
import Episodes from "./Pages/Episodes/Episodes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters/:userId" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />}/>
      </Routes>
    </div>
  );
}

export default App;
