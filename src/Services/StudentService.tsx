import axoisIntstance from "../Interceptor/AxoisInterceptor"


const getStudentPurchaseCourses = async (userId : any) =>{
        return axoisIntstance.get(`/subscription/user/${userId}`)
        .then((response : any) => {
            return response.data;
        })
        .catch((error : any) =>{
            throw error
        })
}

export {getStudentPurchaseCourses};
