import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/'
})


// Categories api
export const getAllCategories = async () => {
    const response = await api.get('/category');
    return response.data;
};

export const getLimitedCategories = async (limit) => {
    const response = await api.get(`/category?limit=${limit}`);
    return response.data;
};

export const getByIdCategories = async (id) => {
    const response = await api.get(`/category/${id}`);
    return response.data;
};


// auth api
export const registration = async (data) => {
    const response = await api.post(`/user/register`, data);
    return response.data;
};

export default api;