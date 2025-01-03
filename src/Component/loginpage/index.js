import Login from '../Login';

import './loginpage.css'

const Loginpage = () =>{

    return (
        <div className = "login-main-container">
    <div className = "hrms-logo">
      <img src = "/hrm-removebg-preview.png" alt = 'hrm' className ="hrm-logo"/>
    </div>
    <div className = 'hrms-login'>
      <div className= 'login-card'>
        <Login/>
      </div>
      <div className = "copy-right">
        <p className = "rignts-reserved">Copyright © 2024 Vaics Consulting Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  </div>
    )
}

export default Loginpage;