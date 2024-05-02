import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs/urls";
import {IUserPainted} from "../interfaces/userPainted.interface";

const userService = {
    getAllUsers: (): IRes<IUserPainted> => axiosInstance.get(urls.users)
}


export {userService}