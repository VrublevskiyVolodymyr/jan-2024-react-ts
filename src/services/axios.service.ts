import {baseURL} from "../configs/urls";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

export { axiosInstance };