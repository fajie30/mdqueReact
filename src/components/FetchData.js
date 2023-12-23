import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';


function FetchData() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState('');

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

  // send data
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/user_roles/', { role })
      .then(res => {
        setData([...data, res.data]);
        
      })
      .catch(error => {
        console.error('Error sending data: ', error);
      })
  };

  // predefined event funtions
  const editRec = (id) => {
    console.log(id);
  }


  // rendering component
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>
        Role:
        <input type="text" value={role} onChange={e => setRole(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <div className="overflow-x-auto">
    
      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Roles</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {data.map((data, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {data.role}
            </Table.Cell>
            <Table.Cell>
              <button onClick={() => editRec(data.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    
    </>
  );
}

export default FetchData;