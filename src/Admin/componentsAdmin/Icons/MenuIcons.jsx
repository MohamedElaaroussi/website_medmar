import React from 'react'

const MenuIcons = ({ name }) => {
    switch (name) {
        case "User":
            return (<i className="fas fa-user Icons_Sidebar"></i>)
            break;
        case "Wallet":
            return (<i className="fas fa-wallet Icons_Sidebar"></i>)
            break;
        case "Analytics":
            return (<i className="fas fa-chart-bar Icons_Sidebar"></i>)
            break;
        case "Tasks":
            return (<i className="fas fa-tasks Icons_Sidebar"></i>)
            break;
        case "Settings":
            return (<i className="fas fa-cog Icons_Sidebar"></i>)
            break;
        


    }
}

export default MenuIcons