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
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {products.map((product) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <button onClick={()=>editRec()} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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