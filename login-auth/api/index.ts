import axios, { AxiosInstance } from 'axios';

export const API: AxiosInstance = axios.create({
    baseURL: 'https://ajkermenu.com:8443/api/credentials',
});