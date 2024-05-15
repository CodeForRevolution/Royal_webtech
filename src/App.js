
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/login/Login';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Header/>}></Route>
<Route exact path='/Login' element={<Login/>}></Route>     
<Route exact path='/dashboard' element={<Dashboard/>}></Route>     
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
