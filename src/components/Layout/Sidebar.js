
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { 
    TbLayoutDashboard,
    TbUser,
    TbBuildingHospital,
    TbListNumbers
} from "react-icons/tb";
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
    const isDash = location.pathname.startsWith('/admin/dashboard');
    const isUser = location.pathname.startsWith('/admin/user');
    const isClinic = location.pathname.startsWith('/admin/clinic');
    const ColoredIcon = ({ Icon, color }) => (
        <span className={color}>
          <Icon />
        </span>
      );

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
            <div className="text-xl py-5 flex justify-center tracking-widest">QMANS AI.D</div>
            <Sidebar.ItemGroup>
                <Sidebar.Item 
                     as={Link} 
                     to="/admin/dashboard" 
                     className={`${isDash ? 'active bg-purple-100 hover:bg-purple-200' : 'text-gray-500'}`}
                 >
                     <div className="flex items-center gap-2 py-1">
                         <ColoredIcon 
                             Icon={TbLayoutDashboard} 
                             color={isDash ? 'text-purple-500 text-2xl' : 'text-gray-500 text-2xl'} 
                         />
                         <span>Dashboard</span>
                     </div>
                </Sidebar.Item>
                <Sidebar.Item 
                    as={Link} 
                    to="/admin/user" 
                    className={`${isUser ? 'active bg-purple-100 hover:bg-purple-200' : 'text-gray-500'}`}
                >
                    <div className="flex items-center gap-2 py-1">
                         <ColoredIcon 
                             Icon={TbUser} 
                             color={isUser ? 'text-purple-500 text-2xl' : 'text-gray-500 text-2xl'} 
                         />
                         <span>User</span>
                     </div>
                </Sidebar.Item>
                <Sidebar.Item 
                    as={Link} 
                    to="/admin/clinic" 
                    className={`${isClinic ? 'active bg-purple-100 hover:bg-purple-200' : 'text-gray-500'}`}
                >
                    <div className="flex items-center gap-2 py-1">
                         <ColoredIcon 
                             Icon={TbBuildingHospital} 
                             color={isClinic ? 'text-purple-500 text-2xl' : 'text-gray-500 text-2xl'} 
                         />
                         <span>Clinic</span>
                     </div>
                </Sidebar.Item>
                
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="#" className='bg-green-200 h-20 hover:bg-green-200'>
                    <div className="flex items-center gap-2">
                        <ColoredIcon Icon={TbListNumbers} color="text-green-700 text-2xl" />
                        <span className='font-semibold text-green-700 tracking-wider'>Queue</span>
                    </div>
                </Sidebar.Item>
                
            </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default AppSidebar;