import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Label, TextInput } from "flowbite-react";
import { TbPlus, TbTrashX} from "react-icons/tb";
import { MDBtn, MDBtnIcon} from "../MyComponents/Buttons";
// import { useState } from "react";

export function RoleModal({ isOpen, closeModal, role, roleChange, RoleSubmit }) {
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
                    
                      <Dialog.Title as="h3" className="bg-purple-100 py-5 px-3 rounded-xl text-xl font-semibold leading-6 tracking-wide text-gray-900">
                        <span className="flex gap-2 "><TbPlus className="h-5 w-5"/> Add User Role</span>
                      </Dialog.Title>

                    <div className="mt-5">
                        <form className="flex max-w-md flex-col gap-3 " onSubmit={RoleSubmit}>
                            <div>
                                <div className="mb-1 block ms-2">
                                    <Label htmlFor="role" value="User Role" />
                                </div>
                                <TextInput className="mb-4" onChange={roleChange} id="role" type="text" value={role} autoComplete="off" placeholder="e.g. Admin" required />
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
                                text="Save Role"
                                bg="purple"
                                color="white"
                                colorInt="600"
                                type="submit"
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


export function DelRoleModal({ isDelOpen, setIsDelOpen, selectedRoleID, selectedRole, deleteRole }) {
  return (
    <Transition appear show={isDelOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto font-sans"
        onClose={() => setIsDelOpen(false)}
      >
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

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-red-900 font-semibold leading-6 tracking-wide flex"
                  >
                    <TbTrashX className="mr-2 h-5 w-5 "/>Please confirm your action.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Deleting <span className="text-sm text-red-800">{selectedRole}</span> role will permanently remove it from the system 
                        and cannot be undone. Furthermore, all users associated with  
                        this role will also be deleted. <br/>Do you wish to proceed?
                    </p>
                  </div>

                  <div className="mt-4">
                  <div className="mt-4 flex justify-end gap-2">
                    <MDBtn
                      text="Cancel"
                      bg="gray"
                      color="white"
                      colorInt="400"
                      type="button"
                      onClick={()=>{setIsDelOpen(false);}}
                    />
                    <MDBtnIcon
                      Icon={TbTrashX}
                      text="Delete"
                      bg="red"
                      color="white"
                      colorInt="500"
                      type="button"
                      onClick={() => {deleteRole(selectedRoleID); setIsDelOpen(false);}}
                    />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
      </Dialog>
    </Transition>
  );
}