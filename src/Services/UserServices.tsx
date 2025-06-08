import axoisIntstance from "../Interceptor/AxoisInterceptor"

const registerUser = async (user: any) => {
    return axoisIntstance.post('/auth/signup', user)
    .then((response:any) => {return response.data
    })
    .catch((error:any) => {throw error})
    
}

const loginUser = async (user: any) => {
    return axoisIntstance.post('/auth/login', user)
    .then((response:any) => 
        {
            console.log("response : "+response.data);
            return response.data
        })
    .catch((error:any) => {throw error})
    
}

export { registerUser,loginUser};