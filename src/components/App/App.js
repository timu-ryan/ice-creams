import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<>main</>} />
      <Route path='/sth' element={<>something</>} />
      <Route path='*' element={<>NOT FOUND</>} />
      </Routes>
    </div>
  );
}

export default App;
