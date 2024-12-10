import Balancetable from "../leavebalance/balancetable";
import {Leaveforms , Restrictedholidayform} from "../applicationFoems/leaveforms";
import { useState , useEffect } from "react";
import "./applyleave.css"

const Applyleave = () => {

  const [leavetype , setLeaveType] = useState("earnedLeave");

  
    
    const setLeavetypeOnclick = (type) =>{
        setLeaveType(type)
    }

    
 
  return (<div className="main-leave-container" >
    <Balancetable onChangeLeavType = {setLeavetypeOnclick}/> 
    {leavetype !== "restrictedHoliday" ? <Leaveforms/> : <Restrictedholidayform/>}
  </div>
  )
};

export default Applyleave;
