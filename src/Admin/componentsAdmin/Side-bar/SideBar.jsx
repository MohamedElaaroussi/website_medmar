import React from 'react';
import menus from '../utils/seed';
import { Link } from 'react-router-dom';
import MenuIcons from '../Icons/MenuIcons';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import Transactions from './Transactions';

// Icons Sidebar 

// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
// import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
// import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
// import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
// import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
// import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
// import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
// import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";




const SideBar = () => {

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    const toggle = () => {
        toggleSidebar();
        if (toggled) {
            console.log(true);
            collapseSidebar();
        } else {
            console.log(false);
            collapseSidebar();
        }
    };
    return (
        <div className='BodyClass'>
            {/* <nav className="navClass fixed-top">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link href="#" className="logo">
                                <img src="/logo.jpg" alt="" />
                                <span className="nav-link">Dashboard</span>
                            </Link>
                        </li>
                        {menus.map((menu, index) => (
                            <li key={index} className="nav-item">
                                <div to={menu.path} className="nav-link">
                                    <div className="d-flex align-items-center">
                                        <MenuIcons name={menu.name} className="mx-1" />
                                        <div className="mx-1 my-3">
                                            {menu.name}

                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li><a href="" className="logout">
                            <div  className="nav-link">

                                <i className="fas fa-sign-out-alt mx-2" style={{ paddingTop:"3px" }}></i>
                                <span className="nav-item">Log out</span>
                            </div>
                        </a></li>
                    </ul>
                </nav>

                <section className="main mt-5 l-5">
                    Our components
                </section> */}
            {/* <div style={{ display: "flex", height: "100vh" }}>
                <Sidebar className="app">
                    <Menu>
                        <MenuItem
                            component={<Link to="/" className="link" />}
                            className="menu1"
                            icon={<MenuRoundedIcon />}
                        >
                            <h2>QUICKPAY</h2>
                        </MenuItem>
                        <MenuItem
                            component={<Link to="dashboard" className="link" />}
                            icon={<GridViewRoundedIcon />}
                        >
                            Dashboard
                        </MenuItem>
                        <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
                        <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
                            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
                            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
                        </SubMenu>
                        <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
                            <MenuItem icon={<AccountBalanceRoundedIcon />}>
                                Current Wallet
                            </MenuItem>
                            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
                        </SubMenu>
                        <MenuItem
                            component={<Link to="transactions" className="link" />}
                            icon={<MonetizationOnRoundedIcon />}
                        >
                            Transactions
                        </MenuItem>
                        <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                            <MenuItem icon={<NotificationsRoundedIcon />}>
                                Notifications
                            </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
                    </Menu>
                </Sidebar>
                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/transactions" element={<Transactions />} />
                    </Routes>
                </section>
            </div> */}

            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                {/* <div id="app" style={({ height: "100vh" }, { display: "flex", flexDirection: "row-reverse" })}> */}
                <Sidebar
                    breakPoint="sm"
                    transitionDuration={800}
                    backgroundColor="#87BCDE"
                    // rtl={true}
                    style={{
                        height: "100vh",
                        // position: "fixed"
                    }} >
                    <Menu style={{ 
                        // position: "fixed"
                     }}>
                        <MenuItem
                            icon={<MenuOutlinedIcon />}
                            onClick={() => {
                                collapseSidebar();
                            }}
                            style={{ textAlign: "center" }}
                        >
                            {" "}
                            <h2>Admin</h2>
                        </MenuItem>
                        <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                        <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                        <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                    </Menu>
                </Sidebar>
                <main style={{ 
                    // marginLeft:"15rem"
                 }}>
                    <h1
                        onClick={() => {
                            toggle();
                        }}
                        style={{ color: "white", marginLeft: "5rem" }}
                    >
                        React-Pro-Sidebar
                    </h1>
                    {toggled ? (
                        <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
                    ) : (
                        <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SideBar;

