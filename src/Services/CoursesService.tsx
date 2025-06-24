import axoisIntstance from "../Interceptor/AxoisInterceptor"

const CoursesService = async () => {
    return axoisIntstance.get('/home/courses', )
    .then((response:any) => 
        {
            // console.log("response : "+response);
            return response.data
        })
    .catch((error:any) => {throw error})
    
}
export default CoursesService