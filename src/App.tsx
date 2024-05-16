import {FC} from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";
import {HomePage} from "./pages/HomePage";


interface IProps {

}

const App: FC<IProps> = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
          </Route>
      </Routes>
  );
};

export  {App};
