import { useNavigate } from "react-router-dom";

import './index.css'

const Adminlogin = () =>{
    const navigate = useNavigate();

    const backtologin = () =>{
        navigate('/login')
    }

    return (
        <div className = "main-container">
            <div className="admin-login-container">
                <h1>Admin Login</h1>
                <form className="login-form">
                    <label className="label" for = "username">
                        User Name
                    </label>
                    <input type="text" className="input" id = "username"/>
                    <label className="label" for = "password">
                        Password
                    </label>
                    <input type="text" className="input" id = "password"/>
                    <div className="admin-sub-button">
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </form>
                <button onClick={backtologin}>back</button>
            </div>
        </div>
    )
}

export default Adminlogin;