import React, { useState } from "react";
import "./adminTopnav.css";

const AdminTopnav = ({ activeButton, setactiveButton , setsubmensofActiveTabs}) => {
  const [subActiveButton, setSubactiveButton] = useState("");
  const [secondSubActive, setSecondSubActive] = useState("");

  const navItems = [
    {
      name: "Dashbord",
      subItems: [
        { name: "Employee Dashbord" },
        { name: "Admin Dashbord" },
        { name: "Manager Dashbord" },
      ],
    },
    {
      name: "Core HR",
      subItems: [
        {
          name: "Employee Data",
          subItems: [
            { name: "Add-an-Employee" },
            { name: "Upload-Employee-Details" },
            { name: "Search-an-Employee" },
            { name: "Employee-Other-Details" },
            { name: "Organization-Hierarchy-Chart" },
          ],
        },
        {
          name: "Offer-And-Onboarding",
          subItems: [
            { name: "Offer" },
            { name: "Letter" },
            { name: "CTC" },
            { name: "Slip" },
            { name: "Download" },
          ],
        },
      ],
    },
    {
      name: "Employee Services",
      subItems: [
        { name: "Employee Requests" },
        { name: "Employee Benefits" },
      ],
    },
    {
      name: "PayRoll",
      subItems: [
        { name: "Salary Details" },
        { name: "Bonus" },
        { name: "Deductions" },
      ],
    },
    {
      name: "Report",
      subItems: [
        { name: "Monthly Report" },
        { name: "Annual Report" },
        { name: "Employee Reports" },
      ],
    },
    {
      name: "PMS",
      subItems: [],
    },
  ];

  return (
    <ul className="admin-top-nav-bar">
      {navItems.map((item) => (
        <li
          key={item.name}
          className={
            activeButton === item.name
              ? "admin-nav-bar-button-li nav-Active"
              : "admin-nav-bar-button-li"
          }
          onMouseEnter={() => setSubactiveButton(item.name)}
          onMouseLeave={() => setSubactiveButton(null)}
        >
          
          <button
            onClick={() => {
              setactiveButton(item.name);
              
              console.log("onclick :", item.subItems.map((each) => each.subItems ? null : setsubmensofActiveTabs(item.subItems)));

              
            }}
            className={
              activeButton === item.name
                ? "admin-top-nav-button Active"
                : "admin-top-nav-button"
            }
          >
            {item.name}
          </button>

          {subActiveButton === item.name && item.subItems.length > 0 && (
            <ul className="sublist">
              {item.subItems.map((each, index) => (
                <li key={index}>
                  <button
                    className="sublist-button"
                    onMouseEnter={() => setSecondSubActive(each.name)}
                    onClick={() => {(each.subItems === undefined ? setactiveButton(item.name) : null) 
                      (each.subItems ?  setsubmensofActiveTabs(each.subItems) : null)
                    } }
                  >
                    {each.name}
                  </button>
                  {secondSubActive === each.name && each.subItems && (
                    <ul className="second-sub-list">
                      {each.subItems.map((submenu, subIndex) => (
                        <li key={subIndex}>
                          <button onClick={() => setactiveButton(item.name)} className="second-sub-list-button">{submenu.name}</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AdminTopnav;
