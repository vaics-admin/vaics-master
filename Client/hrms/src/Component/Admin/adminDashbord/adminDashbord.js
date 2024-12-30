import AdminContent from "./Admin-Content/admincontent";
import AdminTopnav from "./admin-top-navbar/adminTopNav";
import "./adminDashbord.css";
import AdminMenu from "./menuBar/menubar";
import { useState } from "react";



const AdminDashbord = () => {

    const [activeButton, setActiveButton] = useState("Dashbord");
    // const [tabsofActiveButton , setTabsofActiveButton] = useState()
    const [submensofActiveTabs , setsubmensofActiveTabs] = useState(localStorage.getItem("setsubmensofActiveTabs"))

    console.log("submensofActiveTabs",submensofActiveTabs)

    const handleOnClick = (props) =>{
        setActiveButton(props)
    }

  return (
    <div className="admin-dashboard-container">
      <AdminMenu />
      <div className = "admin-content-contsiner">
        <AdminTopnav activeButton = {activeButton} setsubmensofActiveTabs = {setsubmensofActiveTabs} setactiveButton = {handleOnClick}/>
        <AdminContent />
      </div>
    </div>
  );
};

export default AdminDashbord;
