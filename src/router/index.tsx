import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'


const Statistic = lazy(() => import('@/pages/statistic'))
const Class = lazy(() => import('@/pages/class'))
const Collect = lazy(() => import('@/pages/collect'))
const MyCollect = lazy(() => import('@/pages/my-collect'))
const TaskList = lazy(() => import('@/pages/task-list'))
const Profile = lazy(() => import('@/pages/profile'))
const Handin = lazy(() => import('@/pages/handin'))
const JoinClass = lazy(() => import('@/pages/join-class'))



const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/statistic" />
  },
  {
    path: '/statistic',
    element: <Statistic />
  },
  {
    path: '/class/:id',
    element: <Class />
  },
  {
    path: '/collect',
    element: <Collect />
  },
  {
    path: '/mycollect',
    element: <MyCollect />
  },
  {
    path: '/tasklist',
    element: <TaskList />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/joinclass/:id',
    element: <JoinClass />
  },
  {
    path: '/handin/:id',
    element: <Handin />
  },
]

export default routes
