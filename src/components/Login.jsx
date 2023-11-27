import "./styles.css";
import loginNow from '../assets/images/login.jpg'
const Login = ()=> {
    return(
        <div class='flex flex-row'>
            <div class='h-screen w-[500px] flex flex-col justify-center items-center'>
                <form class='flex flex-col h-[50vh] w-[300px] justify-between items-center'>
                    <div>
                        <h2 class='font-bold text-2xl font-mono'>Login Page</h2>
                    </div>
                    <div class=' text-center font-mono'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class='flex flex-col h-[8vh] w-[300px] font-mono'>
                        <label htmlFor="">Email <sup>*</sup></label>
                        <input type="Email" class='h-[5vh] w-[270px] rounded bg-gray-200' placeholder="Email"/>
                    </div>
                    <div class='flex flex-col h-[8vh] w-[300px] font-mono'>
                        <label htmlFor="">Password <sup>*</sup> </label>
                        <input type="Password" class='h-[5vh] w-[270px] rounded bg-gray-200'/>
                    </div>
                    <button type="submit" class='border-2 h-[7vh] w-[20vh] rounded bg-red-500 text-white'>Login</button>
                    <div class='font-mono w-[280px] text-center'>
                        <p>You don't have an account?</p>
                        <a href="">Click here to register.</a>
                    </div>
                </form>
            </div>
            <img src={loginNow} alt="door" class='h-screen w-[1080px]'/>
        </div>
    )
}
export default Login;