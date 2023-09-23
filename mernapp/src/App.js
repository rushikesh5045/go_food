import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./screens/Login";
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './components/MyOrder';



function App() {
  return (
   <CartProvider>
     <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/createUser' element={<Signup/>}></Route>
          <Route exact path='/myOrder' element={<MyOrder/>}></Route>
        </Routes>
      </div>
    </Router>
   </CartProvider>
  );
}

export default App;
