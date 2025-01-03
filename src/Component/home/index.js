import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import { IoIosLink, IoMdPower } from "react-icons/io";

import AttendanceCalendar from "../calander/calander";

import './index.css'

const Home  = () =>{

    console.log(sessionStorage.getItem('employeeId'))
     return(
        <div>
            <div className="tab-container">

                <div className = "top-bar">
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

                <div className="information-secion">
                    <div className="attendance-section">
                        <p className="Att-head">
                            MY ATTENDANCE
                        </p>
                        <div className="table">
                            <table className="table">
                                <tr>
                                    <th>
                                        date
                                    </th>
                                    <th>
                                        in time
                                    </th>
                                    <th>
                                        out time
                                    </th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>
                                            10/10
                                        </td>
                                        <td>
                                            9: 00
                                        </td>
                                        <td>
                                            6: 00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            10/10
                                        </td>
                                        <td>
                                            9: 00
                                        </td>
                                        <td>
                                            6: 00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            10/10
                                        </td>
                                        <td>
                                            9: 00
                                        </td>
                                        <td>
                                            6: 00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            10/10
                                        </td>
                                        <td>
                                            9: 00
                                        </td>
                                        <td>
                                            6: 00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                <div className="count-of-attendance">
                    <div className="value">
                    <p className="total-days">
                        Total Working Days
                    </p>
                    <p className="count">20</p>
                    </div>
                    <div className="value">
                    <p className="total-present">
                        Total Days Present
                    </p>
                    <p className="count">17</p>
                    </div>
                    <div className="value">
                    <p className="total-absent">
                        Total Days Absent
                    </p>
                    <p className="count">3</p>
                    </div>
                </div>                    
                    
                </div>

                <AttendanceCalendar/>
            </div>
        </div>
    )
}

export default Home;