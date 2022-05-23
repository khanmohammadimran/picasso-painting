import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Homepage/Home';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Purchase from './Pages/Purchase/Purchase';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
