import axios, {AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {ElMessage} from "element-plus";
import router from "@/router";

const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {'Authorization': localStorage.getItem("authorization")}
});

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.data.code === 401) {
            ElMessage.error(response.data.msg);
            router.push('/login');
            return;
        }

        if (response.data.code === 200) {
            return response;
        } else {
            ElMessage.error(response.data.msg);
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
