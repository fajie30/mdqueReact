import axios from 'axios';
//change ip add if in other place or connection
export function postRole(role) {
  return axios.post('http://192.168.0.110:8000/api/user_roles/', { role });
}

export function deleteRoleById( r_id) {
  return axios.delete(`http://192.168.0.110:8000/api/user_roles/${r_id}`);
}

export function getRoles() {
  return axios.get('http://192.168.0.110:8000/api/user_roles');
}

export function thisRoleExist(roleName) {
  return axios.get(`http://192.168.0.110:8000/api/user_roles?role=${roleName}`);
}