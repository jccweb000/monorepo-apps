import axios from 'axios';
import { message } from 'antd';

interface ApiResponse<T = any> {
  data: T;
  status: number;
}

const headers = { 'Content-Type': 'application/json' };

const instance = axios.create({ headers });

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (responseError) => {
    console.log('request error:', responseError);
    throw responseError.response;
  },
);

export const get = async <T = any>(
  url: string,
  params?: any,
): Promise<ApiResponse<T>> => {
  try {
    const response = await instance.get<T>(url, { params });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    message.error(JSON.stringify(error));
    throw error;
  }
};

export default instance;
