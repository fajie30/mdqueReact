import { 
    TbPlus,
    TbTrashX,
    TbBan
} from "react-icons/tb";
import { 
    Button, 
    Label, 
    TextInput
} from 'flowbite-react';
import React, { useState, 
    useEffect, 
    Fragment} from 'react'
import { Listbox, 
    Transition,
    Dialog } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyToast } from '../Contents/ToastMsg'

// Capitalize first letter
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}



function Role() {
    let [isOpen, setIsOpen] = useState(false);
    const [dataRole, setData] = useState([]);
    const [selectedRole, setSelectedRole] = useState(null);

    const [role, setRole] = useState('');
    const roleChange = (event) => {
        setRole(event.target.value);
    };
    // send role data to django api
    const RoleSubmit = (event) => {
        event.preventDefault();
        let newRole = capitalizeWords(role);
        // Check if role already exists in the data
        const roleExists = dataRole.some((item) => item.role === newRole);
    
        if (roleExists) {
            notifyToast("Role already exist!", 'error');
            
        } else {
            axios.post('http://localhost:8000/api/user_roles/', { role: newRole })
            .then(res => {
                setData([...dataRole, res.data]);
                notifyToast("New role has been added!", 'success');
                setRole('');
            })
            .catch(error => {
                notifyToast("Something went wrong!", 'error');
            })
        }
    };

    // const notifySuccess = () => toast.success('🦄 Wow so easy!');

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    
    // get data
    useEffect(() => {
        axios.get('http://localhost:8000/api/user_roles')
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            notifyToast("Error loading data!", 'error');
        })
    }, []);

    return (
        <>
        <div>
            {/* modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 font-sans" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
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
                            <Dialog.Title as="h3" className="text-xl font-semibold leading-6 tracking-wide text-gray-900">
                                Add User Role
                            </Dialog.Title>
                            
                            <div className="mt-2">
                                <form className="flex max-w-md flex-col gap-3 " onSubmit={RoleSubmit}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="role" value="User Role" />
                                        </div>
                                        <TextInput onChange={roleChange} id="role" type="text" value={role} placeholder="e.g. Admin" required />
                                    </div>
                                    
                                    <div className="flex flex-row gap-3">
                                        <Button className="bg-red-400 w-full" type="button" onClick={closeModal}><TbBan  /><span className="ml-2 font-normal">Cancel</span></Button>
                                        <Button className="bg-purple-600 w-full" type="submit"><TbPlus /><span className="ml-2 font-semibold">Add Role</span></Button>
                                    </div>
                                </form> 
                                
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        {/* end modal, start present role */}

        <div className="w-48 z-10">
        <ToastContainer />
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
                {dataRole.length > 0 ? (
                    dataRole.map((role) => (
                        <Listbox.Option
                        key={role.id}
                        className={'relative cursor-default select-none py-2 pl-3 pr-5 text-gray-900'}
                        value={role.id}
                        >
                        <span className="flex gap-3">
                            <button className="text-red-500 text-lg"><TbTrashX /></button>
                            <span className="text-sm">{role.role}</span>
                        </span>
                        </Listbox.Option>
                    ))
                ) : (
                    <p className="flex justify-center text-gray-500">No roles available</p>
                )}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    </>
  )
}

export default Role;