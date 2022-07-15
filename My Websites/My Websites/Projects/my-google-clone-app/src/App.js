import logo from './logo.svg';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        { /* SEARCH PAGE (The results page)*/}
        { /* HOME PAGE*/}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
