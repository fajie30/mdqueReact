
import { 
    TbPlus,
    TbUserEdit,
    TbUserPlus,
    TbUserX,
    TbSettings,
    TbFileDescription,
    TbTrashX,
} from "react-icons/tb";
import { 
    Table,
    Dropdown
} from 'flowbite-react';
import React, { useState, 
    useEffect, 
    Fragment} from 'react'
import { Listbox, 
    Transition,
    Dialog } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios';




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
function Drop() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [dataRole, setData] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);

    // get data
    useEffect(() => {
        axios.get('http://localhost:8000/api/user_roles')
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, []);

    return (
        <>
        <div>
            {/* modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                            <Dialog.Title
                                as="h3"
                                className="text-xl font-medium leading-6 text-gray-900"
                            >
                                Add User Role
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                Your payment has been successfully submitted. We’ve sent
                                you an email with all of the details of your order.
                                </p>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        {/* end modal, start present role */}

        <div className="w-64 z-10">
        <Listbox value={selectedRole} onChange={setSelectedRole}>
            <div className="relative">
            <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white px-4 py-2 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate ">Roles</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <Listbox.Option
                        key="0"
                        className={'relative cursor-default select-none py-2 pl-3 pr-5 text-gray-900'}
                        value="0"
                    >
                    <button className="text-black-500 mr-5 flex gap-5 font-semibold w-48"
                    type="button"
                    onClick={openModal}>
                        <TbPlus />
                        <span>Add Role</span>
                    </button>
                </Listbox.Option>
                <hr className="border-t border-gray-200" /> {/* This is the divider */}
                {dataRole.map((role) => (
                    <Listbox.Option
                        key={role.id}
                        className={'relative cursor-default select-none py-2 pl-3 pr-5 text-gray-900'}
                        value={role.id}
                    >
                        
                        <span className={`block truncate font-normal`}>
                        <button className="text-red-500 mr-5"><TbTrashX /></button>
                        {role.role}
                        </span>
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    </>
  )
}

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
                        <button className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-md">
                            <ColoredIcon 
                                Icon={TbUserPlus} 
                                color={'text-white text-lg'} 
                            />
                            <span className="font-semibold">Add User</span>
                        </button><br/>
                        <Drop/>
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