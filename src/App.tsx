import {FC} from 'react';

import './App.css';
import {Products} from "./components/products/Products";


interface IProps {

}

const App: FC<IProps> = () => {
  return (
  <Products/>
  );
};

export  {App};
