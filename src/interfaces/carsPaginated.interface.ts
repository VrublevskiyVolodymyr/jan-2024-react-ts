import {ICar} from "./car.interface";

export interface ICarsPaginated{
    total_items: number;
    total_pages: number;
    prev: string;
    next: string;
    items: ICar[];
}