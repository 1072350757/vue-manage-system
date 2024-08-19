import request from "@/utils/request";

export const loginUser = (form: object) => {
    return request({
        url: '/auth/manage/user/login',
        method: 'post',
        data: form
    });
};

export const getUserInfo = () => {
    return request({
        url: '/manage-user/user/get-info',
        method: 'get'
    });
};