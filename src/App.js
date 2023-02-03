
// Router
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages';
import Bolsistas from './pages/Bolsistas';

// Back4App
import axios from 'axios';
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatGpt from './pages/ChatGpt';
import Game from './pages/Game';

Parse.initialize(process.env.REACT_APP_PARSE_APPLICATION_ID, process.env.REACT_APP_PARSE_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_PARSE_HOST_URL;




function App() {

  

  console.log(`${process.env.REACT_APP_API_KEY} é o item and have a good day!`);
  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bolsistas' element={<Bolsistas />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<ChatGpt />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
