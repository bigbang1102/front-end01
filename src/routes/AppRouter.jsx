import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Product from '../layout/product'
import Contact from '../layout/Contact'
import Userprofile from '../layout/Userprofile'
import Trainner from '../components/Trainner'
import About from '../components/About'
import Homepage from '../components/Homepage'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm /> }
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />

    </>,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/User', element: <UserHome /> },
      { path: '/new', element: <Product /> },
      { path: '/con', element: <Contact /> },
      { path: '/Pro', element: <Userprofile /> },
      { path: '/Tri', element: <Trainner /> },
      { path: '/About', element: <About /> },
      { path: '/Home', element: <Homepage /> },
    ]
  }
])

export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <>
      <RouterProvider router={finalRouter} />
    </>
  )
}
