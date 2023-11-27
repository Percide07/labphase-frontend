import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Link, Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'


function App() {

  return (
  
    
      // <BrowserRouter>
      // <div>
      //   <ul class='w-[90vh] text-center flex flex-row justify-around'>
      //       <Link to="/">Welcome</Link>
      //       <Link to="/Login"><button>Login</button></Link>
      //       <Link to="/Register">Register</Link>            
      //   </ul>
      // </div>
      //   <main>
      //     <Routes>
      //       <Route path='/' element={<Welcome/>}></Route>
      //       <Route path='/Login' element={ <Login/> }></Route>
      //       <Route path='/Register' element={ <Register/> }></Route>
      //     </Routes>
      //   </main>
      // </BrowserRouter> 
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>    
  )
}

export default App
