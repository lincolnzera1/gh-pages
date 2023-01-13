
// Router
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages';
import Bolsistas from './pages/Bolsistas';

function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/bolsistas' element={<Bolsistas />}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
