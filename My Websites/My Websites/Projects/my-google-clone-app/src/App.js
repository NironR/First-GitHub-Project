import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import reducer, { initialState } from "./components/Reducer.jsx"
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home initialState={initialState} reducer={reducer}/>} />
          <Route path='/search' element={<SearchPage />}>
          </Route>
        { /* HOME PAGE*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
