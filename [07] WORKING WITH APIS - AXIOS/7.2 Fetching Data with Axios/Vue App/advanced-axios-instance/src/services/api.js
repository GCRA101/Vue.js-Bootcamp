/* IMPORTANT NOTES
    1. USE of AXIOS INSTANCE - STEP-BY-STEP
        1) IMPORT AXIOS
        2) CREATE AXIOS INSTANCE
            - pass all relevant parameters (baseURL, timeout...)
        3) EXPORT AXIOS INSTANCE
*/

// 1. IMPORT AXIOS INSTANCE
import axios from 'axios'

// 2. CREATE AXIOS INSTANCE
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000
})

// 3. EXPORT AXIOS INSTANCE
export default api