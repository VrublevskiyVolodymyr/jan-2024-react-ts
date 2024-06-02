import {FC} from 'react';

import {LoginForm} from "../../components/AuthContainer/LoginForm";
import css from './loginPage.module.css';

interface IProps {

}

const LoginPage: FC<IProps> = () => {
    return (
        <div className={css.login}>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};