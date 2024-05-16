import axios from "axios";
import {baseURL} from "../configs";

const axiosInstance = axios.create({
    baseURL,
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

export { axiosInstance };