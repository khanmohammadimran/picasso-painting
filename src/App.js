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
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUser from './Pages/Dashboard/Dashboard/AllUser'
import RequireAdmin from './Pages/Login/RequireAdmin';
import AllProduct from './AllProduct/AllProduct';
import Payment from './Pages/Dashboard/Payment';
import AddProduct from './Pages/Dashboard/AddProduct';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>

        <Route path='/allproduct' element={<RequireAuth>
          <AllProduct />
        </RequireAuth>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/purchase' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/purchase/:purchaseId' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment />}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="alluser" element={<RequireAdmin>
            <AllUser></AllUser>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
