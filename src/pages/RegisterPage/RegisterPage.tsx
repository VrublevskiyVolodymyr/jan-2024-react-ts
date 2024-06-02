import {FC} from 'react';

import css from './registerPage.module.css'

import {RegisterForm} from "../../components/AuthContainer/RegisterForm";

interface IProps {

}

const RegisterPage: FC<IProps> = () => {

    return (
        <div className={css.register}>
           <RegisterForm/>
        </div>
    );
};


export {RegisterPage};