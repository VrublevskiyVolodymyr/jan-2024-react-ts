import {ICar, ICarsPaginated} from "../interfaces";
import {IRes} from "./axiosRespType";


export type ICarService = {
    getAll: (page: string) => IRes<ICarsPaginated>;
    create: (data: ICar) => IRes<ICar>;
    updateById: (id: string, data: ICar) => IRes<ICar>;
    deleteById: (id: string) => IRes<void>;
}