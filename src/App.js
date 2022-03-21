import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RankPage from './pages/RankPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/kart/rank' element={<RankPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
