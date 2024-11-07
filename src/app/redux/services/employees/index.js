import { APP_API_URL } from '../../../../assets/api-endpoints'
import UseAxios  from '../../../../assets/hooks/use-axios'


export const fetchLeave = async(auth) =>{
    const axiosInstance = UseAxios();
    try {
        const response = await axiosInstance.get(`${APP_API_URL.FETCH_LEAVE}`,{
            headers:{
                Authorization: auth ? `Bearer ${auth}` : undefined,
            }
        })
        return response.data;
    } catch (error) {
        return error.message
    }
}

export const createLeave = async(payload,auth) =>{
    const axiosInstance = UseAxios();
    try {
        const response = await axiosInstance.post(`${APP_API_URL.ADD_LEAVE}`,payload,{
            headers:{
                Authorization: auth ? `Bearer ${auth}` : undefined,
            }
        })
        return response.data;
    } catch (error) {
        return error.message
    }
}

export const updateLeave = async(payload,auth) =>{
    const axiosInstance = UseAxios();
    try {
        const response = await axiosInstance.put(`${APP_API_URL.UPDATE_LEAVE}`,payload,{
            headers:{
                Authorization: auth ? `Bearer ${auth}` : undefined,
            }
        })
        return response.data;
    } catch (error) {
        return error.message
    }
}