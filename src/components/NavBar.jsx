import './styles.css';
import welcomeApp from '../assets/images/Welcome.jpg'
import { Route,Routes,Link, } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Blogs from './Blogs';
import About from './About';
import Contact from './Contact';

const NavBar = ()=> {
    return(
        <div>
                <div>
                    <nav class='flex flex-row justify-center  h-[12vh] items-center'>
                        <h2 class='w-[20vh] font-mono font-bold text-3xl flex flex-row 
                        justify-center'>Win<h2 class='text-red-500'>gs</h2></h2>
                        <ul class='w-[90vh] text-center flex flex-row justify-around'>
                            <Link to="/"><li class='inline font-mono'>Home</li></Link>
                            <Link to="/blogs"><li class='inline font-mono'>Blogs</li></Link>
                            <Link to="/about"><li class='inline font-mono'>About us</li></Link>
                            <Link to="/contact"><li class='inline font-mono'>Contact us</li></Link>
                        </ul>
                        <div class='w-[30vh] flex flex-row justify-around h-[8vh] items-center font-mono'>
                            <Link to="/login"><button class='h-[5vh] w-[12vh] border-2 rounded text-white bg-red-500'>Login</button></Link>
                            <Link to="/register"><button class='h-[5vh] w-[12vh] border-2 rounded text-red-500 border-red-500'>Sign Up</button></Link>
                        </div>
                    </nav>
                </div>
                <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/blogs" element={<Blogs/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/login" element={<Login/> }/>
                    <Route path='/register' element={<Register/>} />
                </Routes>
                </main>
        </div>
    )
}
export default NavBar