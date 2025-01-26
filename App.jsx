import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav"
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css'

function App() {
  
 {
  return (
    <div className="App">
      <Nav/>
    <Router>
    
      <Routes>
        <Route exact path="Add.jsx" element={< Add/>} />
        <Route exact path="/Edit.jsx" element={<Edit/>} />
      </Routes>
    </Router>
  </div>
  );
};

}

export default App
