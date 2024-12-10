import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Loginpage from './Component/loginpage';
import Adminlogin from './Component/Admin';
import Home from './Component/home';
import Userprofile from './Component/myprofile';
import Adduser from './Component/Admin/addemployee';
import Shome from './Component/samphome/shome';

//Attendance component imports 
import Attendancehome from './Component/submenu/attendance/attendancehome/atthome';
import Onduty from './Component/submenu/attendance/applyOnDuty/onduty';
import Applyswipe from './Component/submenu/attendance/applyswip/swipe';
import Regulariseattendance from './Component/submenu/attendance/regulariseAttendance/regatt';
import Mobilework from './Component/submenu/attendance/mobileWork/mobile';

// leave Components Import 
import Leavehome from './Component/submenu/leave/leavehome/leavehome';
import Applyleave from './Component/submenu/leave/applyleave/applyleave';
import Viewleave from './Component/submenu/leave/viewleave/viewleaves';
import Unplanedleave from './Component/submenu/leave/unplannedleave/unpleave';
import Encashment from './Component/submenu/leave/leavehistory/history';

// Payroll Component Import 
import Viewpayslip from './Component/submenu/payroll/viewpayslip/viewpayslip';
import ITdeclaration from './Component/submenu/payroll/itdeclaration/itdeclaration';

//PMS Employee Component Import 
import Mygoals from './Component/submenu/pmsEmployee/mygoals/goals';
import Appraisal from './Component/submenu/pmsEmployee/myappraisal/appraisal';


import './App.css';
import RequestManagement from './Component/Admin/leaveManagement/leaveManagement';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' Component={Loginpage}/>
          <Route path='/admin' Component={Adminlogin}/>
          <Route path='/home' Component={Shome}/>
          <Route path='/profile' Component={Userprofile}/>
          <Route path='/adduser' Component={Adduser}/>
          <Route path='/shome' Component={Shome}/>

          {/* Attendance route */}
          <Route path='/Attendance/:name' Component={Attendancehome}/>
          

          {/*Leave Route*/}
          <Route path='/Leave/:name' Component={Leavehome}/>
          

          {/* Payroll Route */}
          <Route path='/View-Payslip' Component={Viewpayslip}/>
          <Route path='/IT-Declaration' Component={ITdeclaration}/>

          {/* PMS Employee Routes*/}
          <Route path='/My-Goals' Component={Mygoals}/>
          <Route path='/My-Appraisal' Component={Appraisal}/>

          <Route path='/admin/get-requests' Component={RequestManagement}/>

        </Routes>
      </Router>

    
    </div>
    
   

  );
}

export default App;

