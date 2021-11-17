import { Routes, Route } from 'react-router';
import './App.css';
import Characters from './Pages/Characters/Characters';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    
    </div>
  );
}

export default App;
