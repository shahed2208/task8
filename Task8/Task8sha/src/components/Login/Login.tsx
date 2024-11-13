
import { useState } from 'react';
import './Login.css'; 
import { BrowserRouter as Routers, Routes , Route, Navigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[emailError, setEmailError] = useState("")
 
    const[passwordError,setPasswordError]= useState("")

    const onButtonClick = () =>{
        setEmailError("")
        setPasswordError("")
    
        if("" === email){
          setEmailError("Please enter your email")
          return
        }
    
        if("" === password)
        {
          setPasswordError("Please enter a password")
          return
        }
        if(password.length<7){
          setPasswordError("password must be 8 character or longer")
          return
        }
    
        if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
          setEmailError("please enter a vlid email address")
          return
        }
       
    const handleSubmit = (event: any ) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
        <div className="login-form" >
            <div className="logo"><img src="./src/assets/images/flogo.png" alt="" />
            <h2>SIGN IN</h2>
            <p>Enter your credentials to access your account</p></div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label> <br></br>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label> <br />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter your password'
                    />
                </div>
                <button type="submit">Sign in </button>
            </form>
            <p className="create-account">Don’t have an account?<a href="#" className='CO'> Create one</a></p>
        </div></div>
    );
}

export default Login;