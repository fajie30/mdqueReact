
import { 
    TbUserEdit,
    TbUserPlus,
    TbUserX,
    TbSettings,
    TbFileDescription
} from "react-icons/tb";
import { 
    Table,
    Dropdown
} from 'flowbite-react';
// import React, { useState, useEffect } from 'react';
import Role from './ManageRole'
import { UserModal } from '../Modals/UserModal'
import { ColoredIcon } from '../Modifications/ModifiedIcons'
import useUsers from '../Hooks/useUsers';
import { MDBtnIcon } from "../MyComponents/Buttons";
import { useState } from "react";


/////////////////////////////// identify user status (green/red) ///////////////////////////////
const UserStatus = ({status}) =>{
    if(status === "Active"){
        return(
            <div>
                <div className="flex items-center gap-1">
                 <span className="text-green-500 font-medium">{status}</span>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="flex items-center">
                 <span className="text-red-500 font-medium">{status}</span>
                </div>
            </div>
        )
    }
}

/////////////////////////////// User table ///////////////////////////////
const UserTable = () => {
    const { users } = useUsers();
  const rows = Array.isArray(users) && users.length > 0 ? (
    users.map((user, index) => {
        const recDate = new Date(user.date_registered).toLocaleDateString();
      return (
        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
          <Table.Cell>{user.mobile}</Table.Cell>
          <Table.Cell>{user.user_role ? user.user_role.role : 'Role not found'}</Table.Cell>
          <Table.Cell>{user.date_registered ? recDate : 'No Date'}</Table.Cell>
          <Table.Cell>
            <UserStatus status={user.status} />
          </Table.Cell>
          <Table.Cell className="py-1">
            <center>
                <Dropdown 
                    placement="left-start"
                    arrowIcon={false}
                    label={
                        <ColoredIcon
                            Icon={TbSettings}
                            color={'text-gray-500 text-xl'}
                        />
                    }
                >
                    <Dropdown.Item><TbFileDescription />&nbsp;View</Dropdown.Item>
                    <Dropdown.Item><TbUserEdit />&nbsp;Edit</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-red-500"><TbUserX />&nbsp;Deactivate</Dropdown.Item>
                </Dropdown>
            </center>
          </Table.Cell>
        </Table.Row>

      );
    })
  ) : (
        <Table.Row key={0} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No records found</Table.Cell>
        </Table.Row>
  );
  

  return { rows };
};
/////////////////////////////// Render ///////////////////////////////
const ManageUser = () => {
    let [AddUModal, setAddUModal] = useState(false);
    const closeAddUser = () => {setAddUModal(false)};
    const openAddUser = () => {setAddUModal(true)};

    const { rows } = UserTable();
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row px-2 fluid">
                    <div className="flex flex-row gap-2">
                        <MDBtnIcon
                            Icon={TbUserPlus}
                            text="Add User"
                            color="white"
                            bg="purple"
                            colorInt="600"
                            type="button"
                            onClick={openAddUser}
                        />
                        <Role/>
                    </div>
                    <div className="rounded-xl bg-gray-400 fluid">
                        {/* Insert your bar chart here */}
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    
                    <div className="overflow-x-auto rounded-xl">
                        <Table hoverable>
                            <Table.Head className="text-2xs">
                                <Table.HeadCell>#</Table.HeadCell>
                                <Table.HeadCell>Contact No.</Table.HeadCell>
                                <Table.HeadCell>User Role</Table.HeadCell>
                                <Table.HeadCell>Date Added</Table.HeadCell>
                                <Table.HeadCell>Status</Table.HeadCell>
                                <Table.HeadCell><center>Action</center></Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {rows}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>


            <UserModal
                isOpen={AddUModal}
                closeModal={closeAddUser}
            />
        </>
    );
}

export default ManageUser;