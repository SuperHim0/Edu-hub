import axiosInstance from "../Interceptor/AxoisInterceptor";


const uploadVideoService = async (course: any) => {
  const formData = new FormData();
  formData.append("file", course.file);
  formData.append("title", course.title);
  formData.append("description", course.description);


  try {
    const response = await axiosInstance.post("/api/v1/video/upload", formData);
    console.log("response:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getVideoService = async () => {
    try{
        const response  = await axiosInstance.get(`/api/v1/video/getAll`)
        // console.log("delete", response);
        return response;
    }catch (err) {
        throw err;
    }
};


const ConnectVideoToCourseService = async (courseId:any,videoId:any) => {
    try{
        const response  = await axiosInstance.post(`/api/v1/course/add/course/${courseId}/video/${videoId}`)
        // console.log("delete", response);
        return response;
    }catch (err) {
        throw err;
    }
};

export {ConnectVideoToCourseService,getVideoService,uploadVideoService}