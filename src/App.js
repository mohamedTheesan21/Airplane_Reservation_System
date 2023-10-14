import Login from './Login'
import Signup from "./Signup";
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import Footer from './component/Footer';
import Register from './Register';
import Search from "./search"

function App() {
  return (
  <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<HomeScreen />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/search' element = {<Search/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
    
    
  );
}

export default App;
