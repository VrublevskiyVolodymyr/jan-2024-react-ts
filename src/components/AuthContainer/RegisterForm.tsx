import {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {registerValidator} from "../../validators/registerValidator";
import {userService} from "../../services/userService";
import {IAuthData} from "../../interfaces";

interface IProps {

}

const RegisterForm: FC<IProps> = () => {
    const [error, setError] = useState<boolean | null>( null)
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IAuthData>({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });

    const navigate = useNavigate();

    const save = async (user:IAuthData):Promise<void> => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {error && <div>Username already exists</div>}
            <div>Username: <input type="text" {...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            <div>Password: <input type="text" {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <div>ConfirmPassword: <input type="text" {...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};