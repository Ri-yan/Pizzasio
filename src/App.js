import './App.css';
import NavBar from './components/Navigation';
import HeroSection from './components/Hero';
import Services from './components/Services';
import Populars from './components/popular';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import About from './components/About';
import AdminLogin from './Admin/AdminLogin';
import AdminNav from './Admin/AdminNav';
import OrdersInventory from './Admin/OrdersInventory';
import ProductsEdit from './Admin/ProductsEdit';
import Materials from './Admin/Materials';
import ForgotPassword from './components/Authentication/ForgotPassword';
import AdminForgotPassword from './Admin/AdminForgotPassword';
import Orders from './components/Orders';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
     <Routes>
      <Route path="/" element={<> <NavBar/><HeroSection/><Services/><Populars/></>}></Route>
      <Route path="/menu" element={<> <NavBar/><Menu/></>}></Route>
      <Route path="/login" element={<> <NavBar/><Login/></>}></Route>
      <Route path="/signup" element={<> <NavBar/><Signup/></>}></Route>
      <Route path="/forgot_password" element={<> <NavBar/><ForgotPassword/></>}></Route>
      <Route path="/product/:id" element={<> <NavBar/><ProductPage/></>}></Route>
      <Route path="/cart" element={<> <NavBar/><CartPage/></>}></Route>
      <Route path="/orders" element={<> <NavBar/><Orders/></>}></Route>
      <Route path="/about" element={<> <NavBar/><About/></>}></Route>
      <Route path="/admin" element={<><NavBar/><AdminLogin/></>}></Route>
      <Route path="/admin/home" element={<><AdminNav/><OrdersInventory/></>}></Route>
      <Route path="/admin/products" element={<><AdminNav/><ProductsEdit/></>}></Route>
      <Route path="/admin/materials" element={<><AdminNav/><Materials/></>}></Route>
      <Route path="/admin/forgot_password" element={<><AdminNav/><AdminForgotPassword/></>}></Route>
     </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
