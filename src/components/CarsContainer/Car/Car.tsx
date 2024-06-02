import {FC} from 'react';

import {ICar} from "../../../interfaces";
import {useAppContext} from "../../../hooks";
import {carService} from "../../../services";


interface IProps {
car:ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const {changeSetCarForUpdate,changeTrigger} = useAppContext();


    const carForUpdate =  (car:ICar):void => {
        changeTrigger()
        changeSetCarForUpdate(car)
    }

    const deleteById = async ( id: number ):Promise<void> => {
        await carService.deleteById(id.toString());
        changeTrigger()
    }

    return (<div>
        <div>id: {id}</div>
        <div>brand: {brand}</div>
        <div>price: {price}</div>
        <div>year: {year}</div>
        <button onClick={() => carForUpdate(car)}>update</button>
        <button onClick={()=>deleteById(id)}>delete</button>
    </div>);
};

export {Car};