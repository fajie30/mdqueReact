//import axios
import axios from 'axios';
export function getUsers() {
    return axios.get('http://192.168.0.110:8000/api/users');
    // return axios.get('http://localhost:8000/api/users');
}