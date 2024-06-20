import Home from '../src/pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
