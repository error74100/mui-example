import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Inputs from './pages/Inputs';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Utill from './pages/Utill';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inputs" element={<Inputs />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/utill" element={<Utill />} />
    </Routes>
  );
}

export default App;
