import { useState, useEffect } from 'react';
import { notifyToast } from '../Alerts/ToastMsg'

import { getUsers } from '../APIs/apiUsers';
function useUsers(initialUsers) {
    const [users, setUsers] = useState(initialUsers);
  
    useEffect(() => {
      getUsers()
        .then(res => {
          setUsers(res.data);
        })
        .catch(error => {
          notifyToast("Error loading user records!", 'error');
        });
    }, []);
  
    return { users };
}

export default useUsers;