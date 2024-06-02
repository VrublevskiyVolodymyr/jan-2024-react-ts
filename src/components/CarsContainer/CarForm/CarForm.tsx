import {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators";
import {useAppContext} from "../../../hooks";
import { carService } from '../../../services';
import {ICar} from "../../../interfaces";

interface IProps {

}

const CarForm: FC<IProps> = () => {
    const {register, handleSubmit, reset, setValue, formState: {isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })
    const navigate = useNavigate();
    const {changeTrigger, carForUpdate, changeSetCarForUpdate} = useAppContext();


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const save = async (car:ICar):Promise<void> => {
        await carService.create(car)
        reset()
        changeTrigger()
    }

    const update = async (car:ICar):Promise<void> => {
        if (carForUpdate) {
            await carService.updateById(carForUpdate.id.toString(), car);
            changeSetCarForUpdate(null);
            navigate('/cars?page=1')
            reset()
            changeTrigger()
        }
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {CarForm};