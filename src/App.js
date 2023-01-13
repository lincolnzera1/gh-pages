
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Bolsistas from './pages/Bolsistas';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/bolsistas' element={<Bolsistas />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
