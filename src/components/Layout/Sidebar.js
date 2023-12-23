
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { HiOutlineUsers, HiOutlineQueueList, HiUsers } from "react-icons/hi2";
import { RiUserStarLine } from "react-icons/ri";
import { BiClinic } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
// import {
//     HiArrowSmRight,
//     HiInbox,
//     HiOutlineMinusSm,
//     HiOutlinePlusSm,
//     HiShoppingBag,
//     HiTable,
//     HiUser,
//   } from 'react-icons/hi';

// import { twMerge } from 'tailwind-merge';

const AppSidebar = () => {
    const location = useLocation();
    const isDash = location.pathname === '/dashboard';
    const isRole = location.pathname === '/role';
    const isUser = location.pathname === '/user';
    const isClinic = location.pathname === '/clinic'

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
            <div className="text-2xl py-5 font-bold flex justify-center">QMANS AI.D</div>
            <Sidebar.ItemGroup>
                <Sidebar.Item 
                    as={Link} to="/dashboard" 
                    icon={isDash ? MdDashboard : MdOutlineDashboard}
                    className={`${isDash ? 'active font-semibold bg-purple-100 hover:bg-purple-200' : ''}`}
                >
                    Dashboard
                </Sidebar.Item>
                {/* <Sidebar.Collapse
                icon={HiShoppingBag}
                label="E-commerce"
                    renderChevronIcon={(theme, open) => {
                        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                        return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                    }}
                    >
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Sales</Sidebar.Item>
                    <Sidebar.Item href="#">Refunds</Sidebar.Item>
                    <Sidebar.Item href="#">Shipping</Sidebar.Item>
                </Sidebar.Collapse> */}
                <Sidebar.Item as={Link} to="/role" 
                    icon={isRole ? RiUserStarLine : RiUserStarLine }
                    className={`${isRole ? 'active font-semibold bg-purple-100 hover:bg-purple-200' : ''}`}
                >
                    Role
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/user" 
                    icon={isUser ? HiUsers : HiOutlineUsers}
                    className={`${isUser ? 'active font-semibold bg-purple-100 hover:bg-purple-200' : ''}`}
                >
                    Users
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/clinic" 
                    icon={isClinic ? BiClinic : BiClinic}
                    className={`${isClinic ? 'active font-semibold bg-purple-100 hover:bg-purple-200' : ''}`}
                >
                    Clinics
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiOutlineQueueList}>
                    Queue
                </Sidebar.Item>
            </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default AppSidebar;