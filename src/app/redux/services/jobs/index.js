import { APP_API_URL } from "../../../../assets/api-endpoints";
import UseAxios from "../../../../assets/hooks/use-axios";

export const getJobs = async () => {
  const axiosInstance = UseAxios();
  try {
    const response = await axiosInstance.get(`${APP_API_URL.FETCH_JOBS}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
