import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Applyswipe from '../applyswip/swipe'
import Onduty from '../applyOnDuty/onduty'
import Mobilework from '../mobileWork/mobile'
import Regulariseattendance from '../regulariseAttendance/regatt'
import AttendanceCalendar from '../../../calander/calander'
import AttendanceSummary from '../../../attendancetable/attendancetable'
import TableComponent from '../../../fulldetailsofatt/tablecomponent'
import './atthome.css'

const Attendancehome = () =>{

    const navigate = useNavigate();

    const {name} = useParams();

    const [activeButton , setActiveButton] = useState("")

    useEffect( () =>{
        setActiveButton(name)
    },[name])

        console.log(activeButton)
    return (
        <div className = "att-Home-container">
            <div className='tab'>
                <div className='comp-logo-at-home-cont'>
                    <img src='\VAICSLogo.png' className='comp-logo-image' alt = "Vaics"/>
                </div>

                <div className='menu-head'>
                    <p className='head-m'>Menu</p>
                    <p className='head-m'>Attendance</p>
                </div>

                <div className='tab-buttons'>
                    <button
                    onClick={(event) => {
                            setActiveButton("Attandance-Home");
                            navigate("/Attendance/Attandance-Home")
                        }}
                    className={activeButton === "Attandance-Home" ? 'menu-button active' : 'menu-button'}
                    >
                    Home
                    </button>
                    <button onClick={(evet) => {setActiveButton("Apply-Swip") ; navigate("/Attendance/Apply-Swip")}}  className={activeButton === "Apply-Swip" ? 'menu-button active' : 'menu-button'}>Swipe</button>
                    <button onClick={(evet) => {setActiveButton("Apply-On-Duty") ; navigate("/Attendance/Apply-On-Duty")}}  className={activeButton === "Apply-On-Duty" ? 'menu-button active' : 'menu-button'}>OnDuty</button>
                    <button onClick={(evet) => {setActiveButton("Apply-Mobile-Work") ; navigate("/Attendance/Apply-Mobile-Work")}}  className={activeButton === "Apply-Mobile-Work" ? 'menu-button active' : 'menu-button'}>Mobile Work</button>
                    <button onClick = {(evet) => {setActiveButton("Regularise-Attendance") ; navigate("/Attendance/Regularise-Attendance")}} className={activeButton === "Regularise-Attendance" ? 'menu-button active' : 'menu-button'}>Regularise <br /> On Dates</button>
                </div>
               
            </div>
           
           {activeButton === "Attandance-Home" && 
           
           <div className='content-container'>
           <div className="leave-count">
           
               <div className = "leave-balance">
                   <div className = "leaves-container">
                       <div className = "leave-card-head-container">
                           <h1 className = "leave-card-head">Earned Leaves</h1>
                       </div>
                       <div className = "value-container">
                           <p className = "value-para">15/24</p>
                           <p className = "avaliable">Avaliable</p>
                       </div>
                   </div>

                   <div className = "leaves-container">
                       <div className = "leave-card-head-container b-leave">
                           <h1 className = "leave-card-head">B-Leaves</h1>
                       </div>
                       <div className = "value-container">
                           <p className = "value-para">2/4</p>
                           <p className = "avaliable">Avaliable</p>
                       </div>
                   </div>

                   <div className = "leaves-container">
                       <div className = "leave-card-head-container r-holiday">
                           <h1 className = "leave-card-head">R-Holidays</h1>
                       </div>
                       <div className = "value-container">
                           <p className = "value-para">2/2</p>
                           <p className = "avaliable">Avaliable</p>
                       </div>
                   </div>

                   <div className = "leaves-container">
                       <div className = "leave-card-head-container c-leave">
                           <h1 className = "leave-card-head">C-Leaves</h1>
                       </div>
                       <div className = "value-container">
                           <p className = "value-para">2/4</p>
                           <p className = "avaliable">Avaliable</p>
                       </div>
                   </div>

                   <div className = "leaves-container">
                       <div className = "leave-card-head-container p-leave">
                           <h1 className = "leave-card-head">P-Leaves</h1>
                       </div>
                       <div className = "value-container">
                           <p className = "value-para">10/10</p>
                           <p className = "avaliable">Avaliable</p>
                       </div>
                   </div>
               </div>
           </div>

           <div  className = "att-cal-cont">
               <div className='att-cal'>
                   <AttendanceCalendar/>
               </div>
               <div className='att-sum-cont'>
                   <AttendanceSummary />
               </div>
           </div>
               <div className='table-componet'>
                   <TableComponent/>
               </div>
       </div>

           }
           
           {activeButton === "Apply-Swip" && <Applyswipe/>}

           {activeButton === "Apply-On-Duty" && <Onduty/>}

           {activeButton === "Apply-Mobile-Work" && <Mobilework/>}

           {activeButton === "Regularise-Attendance" && <Regulariseattendance/>}

        </div>
    )
}

export default Attendancehome