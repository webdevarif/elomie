import React, {useState} from 'react'
import HeaderDashboard from '../Header/HeaderDashboard'
import Sidebar from '../Sidebar'

const DashboardLayout =({children}) =>{
    const [isActive, setIsActive] = useState(true);

    const handleSidebarClick =() => (
        setIsActive(!isActive)
    )

    return(
        <div className="d-flex layout">
          <Sidebar isActive={isActive} handleClick={handleSidebarClick}/>
          <div className="layout-wrapper w-100">
            <HeaderDashboard handleClick={handleSidebarClick}/>
            <div className="layout-content p-3">
            {children}
            </div>
          </div>
        </div>
    )
}

export default DashboardLayout;

