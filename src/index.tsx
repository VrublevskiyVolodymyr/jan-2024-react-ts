import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {ContextProvider} from "./hoc";
import {router} from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>

  );

reportWebVitals();
