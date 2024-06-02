import {FC, useEffect, useState} from 'react';

import {authService, carService} from "../../../services";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAppContext} from "../../../hooks";
import {ICar} from "../../../interfaces";
import {Car} from "../Car/Car";
import {Pagination} from "../../Pagination/Pagination";

interface IProps {

}

interface IPrevNext {
    prev: string | null;
    next: string | null;
}

const Cars: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const [prevNext, setPrevNext] = useState<{ prev: string | null, next: string | null }>({ prev: null, next: null });
    const { trigger } = useAppContext();
    const navigate = useNavigate();

    const page = query.get('page') || '1';

    useEffect(() => {
        carService.getAll(page).then(({ data }) => {
            setCars(data.items);
            setPrevNext({ prev: data.prev, next: data.next });
        }).catch(() => {
            authService.deleteTokens();
            navigate('/login');
        });

    }, [trigger, navigate, query]);

    const onPageChange = (newPage: string) => {
        setQuery({ page: newPage });
    }

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
            <Pagination page={page} prevNext={prevNext} onPageChange={onPageChange} />
        </div>
    );
};

export {Cars};