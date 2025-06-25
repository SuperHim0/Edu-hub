import axiosInstance from "../Interceptor/AxoisInterceptor";

const CreateCourseService = async (course: any) => {
  const formData = new FormData();
  formData.append("thumbnail", course.thumbnail);
  formData.append("subject", course.subject);
  formData.append("title", course.title);
  formData.append("description", course.description);
  formData.append("actualPrice", course.actualPrice);
  formData.append("price", course.price);

  try {
    const response = await axiosInstance.post("/api/v1/course/create", formData);
    console.log("response:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const DeleteCourseService = async (courseId:any) => {
    try{
        const response  = await axiosInstance.get(`/api/v1/course/delete/${courseId}`)
        // console.log("delete", response);
        return response;
    }catch (err) {
        throw err;
    }
};

export  {CreateCourseService,DeleteCourseService};
