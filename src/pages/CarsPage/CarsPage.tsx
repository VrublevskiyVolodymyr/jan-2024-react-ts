import {FC} from 'react';

import css from './carsPage.module.css'
import {CarForm, Cars} from "../../components";

interface IProps {

}

const CarsPage: FC<IProps> = () => {
    return (
        <div className={css.cars}>
            <h1>Cars</h1>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};