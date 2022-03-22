import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import RankPage from './pages/rankPage/RankPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/rank' element={<RankPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
