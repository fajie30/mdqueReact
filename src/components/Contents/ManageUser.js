
import { 
    TbUserEdit,
    TbCircleCheckFilled,
    TbCircleXFilled,
    TbUserPlus
} from "react-icons/tb";
import { Table } from 'flowbite-react';

const ColoredIcon = ({ Icon, color }) => (
    <span className={color}>
      <Icon />
    </span>
  );

const UserStatus = ({status}) =>{
    if(status == "Active"){
        return(
            <div>
                <div className="flex items-center gap-1 bg-">
                 <ColoredIcon 
                     Icon={TbCircleCheckFilled} 
                     color={'text-green-400 text-xl'} 
                 />
                 <span className="text-green-400">{status}</span>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="flex items-center gap-1 bg-">
                 <ColoredIcon 
                     Icon={TbCircleXFilled} 
                     color={'text-red-400 text-xl'} 
                 />
                 <span className="text-red-400">{status}</span>
                </div>
            </div>
        )
    
    }

}

const UserTable = () =>{
    return(
        <div className="overflow-x-auto rounded-xl">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Contact No.</Table.HeadCell>
                    <Table.HeadCell>Type</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1</Table.Cell>
                        <Table.Cell>Magic Mouse 2</Table.Cell>
                        <Table.Cell>Black</Table.Cell>
                        <Table.Cell>
                            <UserStatus status={'Inactive'}/>
                        </Table.Cell>
                        <Table.Cell>
                            <div>
                                <button className="flex items-center gap-1">
                                <ColoredIcon 
                                    Icon={TbUserEdit} 
                                    color={'text-yellow-400 text-xl'} 
                                />
                                <span className="font-semibold text-yellow-400">Edit</span>
                                </button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )

}
const ManageUser = () => {
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row px-2 fluid">
                    <div className="flex flex-row w-4/12 gap-2">
                        <button className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-md">
                            <ColoredIcon 
                                Icon={TbUserPlus} 
                                color={'text-white text-xl'} 
                            />
                            <span className="font-semibold">Add User</span>
                        </button>
                    </div>
                    <div className="w-8/12 rounded-xl bg-gray-400 fluid">
                        {/* Insert your bar chart here */}
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <UserTable />
                </div>
            </div>
        </>
    );
}

export default ManageUser;