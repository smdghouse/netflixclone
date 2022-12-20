import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from "./Header.jsx"
import Home from "./components/Home/Home.jsx"
import './App.scss';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
