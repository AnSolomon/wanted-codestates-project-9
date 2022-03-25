import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import RankPage from './pages/rankPage/RankPage';
import UserInfoPage from './pages/userInfoPage/UserInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/rank' element={<RankPage/>}/>
          <Route path='/user' element={<UserInfoPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
