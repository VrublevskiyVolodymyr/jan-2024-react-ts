import {FC, useState} from 'react';
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {IAuthData, IUser} from "../../interfaces";
import {useAppContext} from "../../hooks";

interface IProps {

}

const LoginForm: FC<IProps> = () => {
    const {handleSubmit, register} = useForm<IAuthData>();
    const [error, setError] = useState<boolean | null>(null);
    const {changeSetMe} = useAppContext();
    const navigate = useNavigate();
    const login = async (user: IAuthData): Promise<void> => {
        try {
            const response: IUser = await authService.login(user)
            changeSetMe(response);
            navigate('/cars')
        } catch (e) {
            setError(true)
        }
    }
    return (
        <form onSubmit={handleSubmit(login)}>
            {error && <div>Username or password incorrect</div>}
            <div>Username: <input type="text" {...register('username')}/></div>
            <div>Password: <input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};