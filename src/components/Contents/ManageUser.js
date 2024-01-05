
import { 
    TbUserEdit,
    TbUserPlus,
    TbUserX,
    TbSettings,
    TbFileDescription
} from "react-icons/tb";
import { 
    Table,
    Dropdown,
    Button
} from 'flowbite-react';
import React from 'react'


import Role from '../Managements/AddRole'




//   // send data
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8000/api/user_roles/', { role })
//       .then(res => {
//         setData([...data, res.data]);
        
//       })
//       .catch(error => {
//         console.error('Error sending data: ', error);
//       })
//   };




/////////////////////////////// dynamic dropdown ///////////////////////////////


/////////////////////////////// customize color ///////////////////////////////
const ColoredIcon = ({ Icon, color }) => (
    <span className={color}>
      <Icon />
    </span>
);

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
const UserTable = () =>{
    const rows = Array.from({ length: 20 }).map((_, index) => (
        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
            <Table.Cell>09090909090</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
            <Table.Cell>10-12-23</Table.Cell>
            <Table.Cell>
                <UserStatus status={'Active'}/>
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
                    <Dropdown.Item><TbFileDescription/>&nbsp;View</Dropdown.Item>
                    <Dropdown.Item><TbUserEdit/>&nbsp;Edit</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-red-500"><TbUserX />&nbsp;Deactivate</Dropdown.Item>
                </Dropdown>
                </center>
            </Table.Cell>
        </Table.Row>
    ));
    
    return <>{rows}</>;

}

/////////////////////////////// Render ///////////////////////////////
const ManageUser = () => {
    
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row px-2 fluid">
                    <div className="flex flex-row gap-2">
                        <Button className="bg-purple-600 text-white rounded-md" >
                            <ColoredIcon 
                                Icon={TbUserPlus} 
                                color={'text-white text-lg'} 
                            />
                            <span className="font-semibold ml-2">Add User</span>
                        </Button>
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
                                <UserTable />
                            </Table.Body>
                        </Table>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ManageUser;