import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Label, TextInput } from "flowbite-react";
import { MDBtn} from "../MyComponents/Buttons";
import React, { useState } from "react";
import {TbUserPlus} from "react-icons/tb";
export function UserModal({ isOpen, closeModal}) {

    const [formFields, setFormFields] = useState({
      uID: '',
      uPW: '',
      // other fields...
    });
    
    const handleChange = (e) => {
        if (e.target.id === 'uID' && isNaN(e.target.value)) {
            return;
        }
        setFormFields({
            ...formFields,
            [e.target.id]: e.target.value,
        });
    };
    const UserSubmit = (event) => {
        event.preventDefault();
        alert('et');
        
    };

    // const deleteThisRole = (r_id, r_role) => {
    //     setSelectedRoleID(r_id);
    //     setSelectedRole(r_role);
    //     setIsDelOpen(true);
    // }
    return (
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
              <div className="fixed inset-0 overflow-y-auto">
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
                      <Dialog.Title as="h3" className="bg-purple-100 py-5 px-3 rounded-xl text-xl font-semibold leading-6 tracking-wide text-gray-900">
                          <span className="flex gap-2 "><TbUserPlus className="h-5 w-5"/> Add User</span>
                      </Dialog.Title>

                      <div className="mt-5">
                          <form className="flex max-w-md flex-col gap-3" onSubmit={UserSubmit}>
                              <div>
                                  <div className="block mb-1 ms-2">
                                      <Label htmlFor="role" value="User Role" />
                                  </div>
                                    <TextInput 
                                        className="mb-1" 
                                        onChange={handleChange} 
                                        id="uID" 
                                        type="text" 
                                        value={formFields.uID} 
                                        autoComplete="off" 
                                        placeholder="Mobile #" 
                                        required 
                                    />
                                    <div className="block mb-1 ms-2">
                                        <Label htmlFor="role" value="User Role" />
                                    </div>
                                    <TextInput 
                                        className="mb-1" 
                                        onChange={handleChange} 
                                        id="uPW" 
                                        type="password" 
                                        value={formFields.uPW} 
                                        autoComplete="off" 
                                        placeholder="e.g. Admin" 
                                        required 
                                    />
                                    <div className="block mb-1 ms-2">
                                        <Label htmlFor="role" value="User Role" />
                                    </div>
                                    <TextInput 
                                        className="mb-4" 
                                        onChange={handleChange} 
                                        id="uPW" 
                                        type="password" 
                                        value={formFields.uPW} 
                                        autoComplete="off" 
                                        placeholder="e.g. Admin" 
                                        required 
                                    />
                              </div>
  
                              <div className="flex justify-end gap-2">
                                
                                <MDBtn
                                    text="Cancel"
                                    bg="gray"
                                    color="white"
                                    colorInt="400"
                                    type="button"
                                    onClick={closeModal}
                                />
                                <MDBtn
                                    type="submit"
                                    text="Save User"
                                    bg="purple"
                                    color="white"
                                    colorInt="600"
                                />

                              </div>
                          </form> 
  
                      </div>
                      </Dialog.Panel>
                  </Transition.Child>
                  </div>
              </div>
          </Dialog>
      </Transition>
    );
  }