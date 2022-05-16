import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';



function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index  element={<HomePage/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>

  );
}

export default App;
