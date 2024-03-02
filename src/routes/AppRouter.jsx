import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Contact from '../layout/Contact'
import Userprofile from '../layout/Userprofile'
import Trainner from '../components/Trainner'
import About from '../components/About'
import Homepage from '../components/Homepage'
import AdminDashbord from '../Admin/AdminDashbord'
import AdminHome from '../Admin/AdminHome'
import Adminheader from '../Admin/Adminheader'
import Admininformation from '../Admin/Admininformation'
import Adminmenu from '../Admin/Adminmenu'
import Usepage from '../layout/Usepage'
import Crudform from '../components/Crudform'
import Product from '../layout/Product'
import Selat from '../Admin/Selat'
import ClausCard from '../group/ClausCard'
import SetShowuser from '../components/SetShowuser'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Usepage />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/register', element: <RegisterForm /> },
      // { path: '/Admininformation', element: <Admininformation /> },
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
      { path: '/Crud', element: <Crudform /> },
      { path: '/Claus', element: <ClausCard /> },
      { path: '/SetShowuser', element: <SetShowuser /> },
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex flex-row px-4 py-6 gap-x-4'>
      <Adminmenu />
      <Outlet />
    </div>,
    children: [
      { index: true, element: <AdminHome /> },
      { path: '/AdminHome', element: <AdminHome to='/' /> },
      { path: '/AdminDashbord', element: <AdminDashbord /> },
      { path: '/Adminheader', element: <Adminheader to='/' /> },
      { path: '/Admininformation', element: <Admininformation /> },
      { path: '/Selat', element: <Selat /> },
    ]
  }
])

export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = !user?.id ? guestRouter : user.role === 'ADMIN' ? adminRouter : userRouter
  return (
    <>
      <RouterProvider router={finalRouter} />
    </>
  )
}