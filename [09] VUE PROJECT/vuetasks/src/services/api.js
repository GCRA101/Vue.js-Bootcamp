/* IMPORTANT NOTES
    1. Create Axios Instance Step-by-step
        1) IMPORT Axios
        2) CREATE Axios Instance
        3) EXPORT Axios Instance
*/


// 1. IMPORT AXIOS
import axios from 'axios';

// 2. CREATE AXIOS INSTANCE
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

// 3. EXPORT AXIOS INSTANCE
export default api;