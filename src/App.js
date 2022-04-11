import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './About/About';
import Header from './Shared/Header';
import Footer from './Shared/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
