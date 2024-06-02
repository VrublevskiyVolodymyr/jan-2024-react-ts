
import {urls} from "../configs";
import {apiService} from "./api.service";
import {ICarService, IRes} from "../types";
import {ICar, ICarsPaginated} from "../interfaces";

const carService:ICarService = {
    getAll: (page:string = '1'):IRes<ICarsPaginated> => apiService.get(urls.cars.base, {params: {page}}),
    create: (data:ICar):IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id:string, data:ICar):IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id:string):IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}