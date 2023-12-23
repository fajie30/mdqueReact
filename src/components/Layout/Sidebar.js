
import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiTable,
} from 'react-icons/hi';
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { HiOutlineUsers, HiOutlineQueueList } from "react-icons/hi2";
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
    const isActive = location.pathname === '/dashboard';

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
            <div className="text-2xl p-1 font-bold flex justify-center">QMANS AI.D</div>
            <Sidebar.ItemGroup>
                <Sidebar.Item 
                    as={Link} 
                    to="/dashboard" 
                    icon={isActive ? MdDashboard : MdOutlineDashboard}
                    className={`${isActive ? 'active font-semibold bg-purple-100 hover:bg-purple-200' : ''}`}
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
                <Sidebar.Item href="#" icon={RiUserStarLine}>
                    Role
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiOutlineUsers}>
                    Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiClinic}>
                    Clinics
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiOutlineQueueList}>
                    Queue
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                </Sidebar.Item>
            </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default AppSidebar;