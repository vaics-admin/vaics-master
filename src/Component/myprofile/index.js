import axios from "axios";
import { useEffect } from "react";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import { IoIosLink, IoMdPower } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./index.css"
import { useState } from "react";
const Userprofile = () =>{
    const [userDetails , setUserDetails ] = useState("")

    const getdetails = async() =>{

        const id = sessionStorage.getItem("employeeId")
        const employeeId = {'em_id' : id}
        const result = await axios.post("http://localhost:5000/profile" , employeeId)
        const data = result.data[0];
        setUserDetails(data)
    }
    console.log(userDetails);
    const {employee_id, department, first_name, last_name , role} = userDetails
   
     useEffect( () =>{
        getdetails()
    })
   
    return(
        <div className="user-profile-container">
            <div className = "profile-container">
                <div className = "top-bar">{/*CONTAINER FOR TOP BAR */}
                    <div className="company-home-logo">
                        <img className = "home-image" src = "/vaics.jpg" alt = "Vaics"/>
                    </div>
                    
                    <div className = "home-title">
                        <p className = "title-home">
                            MY HRMS TOOL 
                        </p>
                    </div>
                    <div className = "home-search">
                        <input type = "search" className = "search-home" />
                        <button>SEARCH</button>
                    </div>
                    <div className = "home-icons">
                        <VscDebugBreakpointUnsupported className="error"/>
                        <IoIosLink className="link"/>
                    </div>
                    <div className="user-name">
                        <p className="home-user-name">
                            USER NAME
                        </p>
                        <IoMdPower className="power-button" />
                    </div>
                </div>
            </div>

            <div className="profile-picture">{/* PROFILE PICTURE CONTAINER */}
                <CgProfile className="pic"/>{/* PROFILE PICTURE */}
                
            </div>
            <div className="user-details">{/* USER DETAILS CONTAINER */}
                <div className="row" >
                    <div className="leb"><span className="label">Name</span></div>
                    <div className="col">:</div>
                    <div className="details"> <span>{first_name+ " "+ last_name}</span></div>
                </div>
                <div className="row">
                    <div className="leb"><span className="label">Employ ID</span></div>
                    <div className="col">:</div>
                    <div className="details"><span>{employee_id}</span></div>
                </div>
                <div className="row">
                    <div className="leb"><span className="label">Role</span></div>
                    <div className="col">:</div>
                    <div className="details"><span>{role}</span></div>
                </div> 
                <div className="row">
                    <div className="leb"><span className="label">Date of Joining</span></div>
                    <div className="col">:</div>
                    <span>dateOfJoining</span>
                </div>
            </div>

        </div>
        
    )
}

export default Userprofile