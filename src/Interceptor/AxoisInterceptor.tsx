import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';


// Create an axios instance with a custom configuration
const axoisIntstance = axios.create({
    baseURL: 'https://videowatcher-dockerapp-latest.onrender.com',
    // baseURL: 'http://localhost:8082',

});

// Add a request interceptor
axoisIntstance.interceptors.request.use(
    
    (config : InternalAxiosRequestConfig) => {
        console.log('Request Interceptor:', config);
        return config;
    }

)
export default axoisIntstance;