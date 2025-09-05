import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Login from "./login"
import MainLayout from './layout'
import Users from './users'
import NotFound from './not-found/NotFound'
import Posts from './posts'
import PostsDetail from './posts-detail'
import UsersDetail from './users-detail'

const AppRouter = () => {
  return (
    // v5
    // <React.Fragment> vs <></> --->> bunda yani reactfragmentda mappingda key berish mumkin lekin bo'sh divda mumkin emas imkonsiz
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="/posts/:id" element={<PostsDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default AppRouter