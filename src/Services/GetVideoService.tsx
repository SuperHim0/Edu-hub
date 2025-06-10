import axoisIntstance from "../Interceptor/AxoisInterceptor";

const getVideoByVideoId = async (videoId : any) =>{
    return axoisIntstance.post(`/subscription/watch-video?videoId=${videoId}`)
        .then((response : any) => {
            return response.data;
        })
        .catch((error : any) =>{
            throw error
        })
};

export {getVideoByVideoId};