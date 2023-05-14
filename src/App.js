import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/Dash Board/DashBoard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    
    <div className='home'>
     <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/reviews" element={<Reviews/>}></Route>
         <Route path="/dashboard" element={<DashBoard/>}></Route>
         <Route path="/blogs" element={<Blogs/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </div>
    </div>
  );
}

export default App;
