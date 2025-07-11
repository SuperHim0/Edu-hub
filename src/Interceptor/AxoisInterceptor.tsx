import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';


// Create an axios instance with a custom configuration
const axoisIntstance = axios.create({
    baseURL: 'https://edu-hub-backend-8mnj.onrender.com',
    // baseURL: 'http://localhost:8082',

});

// Add a request interceptor
axoisIntstance.interceptors.request.use(
    
    (config : InternalAxiosRequestConfig) => {
        return config;
    }
)
export default axoisIntstance;