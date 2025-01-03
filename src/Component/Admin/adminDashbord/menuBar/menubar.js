import "./menubar.css"

const AdminMenu = (tabsofActiveButton) =>{
console.log(tabsofActiveButton)
    return (
        <div className="admin-menu-container">
            <div className= "admin-logo-container">
                <img className = "admin-log" src = ".\VAICSLogo.png" alt = "Vaics-Logo"/>
            </div>
            <div className = "admin-menu-icons-container">
                {tabsofActiveButton.tabsofActiveButton !== undefined && tabsofActiveButton.tabsofActiveButton.length > 0 &&
                    tabsofActiveButton.tabsofActiveButton.map((item, index) =>
                        <button key = {index} className = "admin-menu-button">{item.name}</button>) 
            }
            </div>
        </div>
    )
}

export default AdminMenu