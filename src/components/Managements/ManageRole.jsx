import { 
    TbPlus,
    TbTrashX,
    TbChevronDown 
} from "react-icons/tb";
import React, { 
    useState, 
    Fragment
} from 'react'
import { Listbox, 
    Transition,} from '@headlessui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoles } from '../Hooks/useRole';
import { RoleModal, DelRoleModal} from "../Modals/RoleModal";


function Role() {
    let [isAddROpen, setIsAddROpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedRoleID, setSelectedRoleID] = useState(null);
    const [role, setRole] = useState('');
    const {roles, addRole, deleteRole } = useRoles([]);
    const [isDelOpen, setIsDelOpen] = useState(false);
    //add modal
    const closeAddModal = () => {setIsAddROpen(false)};
    const openAddModal = () => {setIsAddROpen(true)};
    //onchange role field
    const roleChange = (event) => {setRole(event.target.value);};
    // send role data to django api
    const RoleSubmit = (event) => {
        event.preventDefault();
        addRole(role);
        setRole('');
    };

    const deleteThisRole = (r_id, r_role) => {
        setSelectedRoleID(r_id);
        setSelectedRole(r_role);
        setIsDelOpen(true);
    }
    

    
    

    return (
        <>
        <div>
            <ToastContainer />
            {/* modal */}
            <RoleModal
                isOpen={isAddROpen}
                closeModal={closeAddModal}
                role={role}
                roleChange={roleChange}
                RoleSubmit={RoleSubmit}
            />
            <DelRoleModal 
                isDelOpen={isDelOpen} 
                setIsDelOpen={setIsDelOpen}
                selectedRoleID={selectedRoleID}
                selectedRole={selectedRole} 
                deleteRole={deleteRole} />
            
        </div>

        {/* end modal, start present role */}

        <div className="w-48 z-10">
        
        <Listbox value={selectedRole} onChange={setSelectedRole}>
            <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white px-4 py-2 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate ">User Roles</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                <TbChevronDown
                    className="h-5 w-5 text-gray-400 mr-3"
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
                    onClick={openAddModal}>
                        <TbPlus />
                        <span>Add Role</span>
                    </button>
                </Listbox.Option>
                <hr className="border-t border-gray-200" /> {/* This is the divider */}
                {roles.length > 0 ? (
                    roles.map((role) => (
                        <Listbox.Option
                        key={role.id}
                        className={'relative cursor-default select-none py-2 pl-3 pr-5 text-gray-900'}
                        value={role.id}
                        >
                        <span className="flex gap-3">
                        <button className="text-red-500 text-lg" onClick={() => deleteThisRole(role.id, role.role)}><TbTrashX /></button>
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