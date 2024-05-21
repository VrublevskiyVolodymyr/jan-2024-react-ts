import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs";
import {IUser} from "../interfaces";

const userService = {
    getAllUsers: (): IRes<IUser[]> => axiosInstance.get(urls.users),
}


export {userService}