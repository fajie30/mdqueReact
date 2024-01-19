import { useState, useEffect } from 'react';
import { notifyToast } from '../Alerts/ToastMsg'
import { capitalizeWords } from '../Common/StringHandling'

import { postRole, deleteRoleById, getRoles, thisRoleExist } from '../APIs/apiRoles';

export function useRoles(initialRoles) {
  const [roles, setRoles] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the WebSocket
    const socket = new WebSocket('ws://192.168.0.110:8000/api/user_roles');
  
  // Log when the WebSocket is opened
  socket.onopen = () => {
    console.log('WebSocket is connected');
  };

  // Log any errors that occur
  socket.onerror = (error) => {
    console.error('WebSocket error: ', error);
  };

  setSocket(socket);

    getRoles()
      .then(res => {
        setRoles(res.data);
      })
      .catch(error => {
        notifyToast(error.message, 'error');
      });
  }, []);
  
  useEffect(() => {
    if (socket == null) return;

    // Listen for updates
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Update the list of roles when a new role is added
      if (data.type === 'ROLE_ADDED') {
        setRoles(prevRoles => [...prevRoles, data.role]);
      }

      // Update the list of roles when a role is deleted
      if (data.type === 'ROLE_DELETED') {
        setRoles(prevRoles => prevRoles.filter(role => role.id !== data.role.id));
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket]);

  const addRole = ( role ) => {
    const newRole = capitalizeWords(role);
    //get role first to check if data is existing
    thisRoleExist()
      .then(res => {
        const exist = res.data.some((item) => item.role === newRole);
        if (exist) {
          notifyToast("Role already exist!", 'error');
          return;
        }else{
          postRole(newRole)
            .then(res => {
              setRoles([...roles, res.data]);
              notifyToast("New role has been added!", 'success');
            })
            .catch(error => {
              notifyToast("Something went wrong!", 'error');
            });
        }
      });
  }

  const deleteRole = (r_id) => {
    deleteRoleById(r_id)
      .then(() => {
        setRoles(roles.filter(role => role.id !== r_id));
        notifyToast("Role has been deleted!", 'success');
      })
      .catch(error => {
        notifyToast("Something went wrong!", 'error');
      });
  }

  return {roles, addRole, deleteRole};
}