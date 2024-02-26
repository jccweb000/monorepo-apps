import axios from 'axios';
import { message } from 'antd';

interface ApiResponse<T = any> {
  data: T;
  status: number;
}

const headers = { 'Content-Type': 'application/json' };
const MOCK_BASE_URL = 'https://mock.apifox.com';

const instance = axios.create({ baseURL: MOCK_BASE_URL, headers });

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
  params: any,
): Promise<ApiResponse<T>> => {
  try {
    const response = await instance.get<T>(MOCK_BASE_URL + url, { params });
    // TODO: 如何处理返回的接口数据需要根据具体的接口来定义，可提取成公共的处理方法
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    message.error(JSON.stringify(error));
    throw error;
  }
};

// TODO: post put delete download upload

export default instance;
