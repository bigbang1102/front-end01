import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';



const guestNav = [
    // { to: '/', text: 'Login' },
    // { to: '/register', text: 'Register' },
]

const userNav = [
    { to: '/User', text: 'หน้าหลัก' },
    { to: '/Pro', text: 'โปรไฟล์' },
    { to: '/new', text: 'ตะกร้า' },
    { to: '/tri', text: 'เทรนเนอร์' },
    { to: '/Con', text: 'ติดต่อ' },

]

export default function Header() {
    const { user, logout } = useAuth()
    const finalNav = user?.id ? userNav : guestNav

    const navigate = useNavigate()

    const hdlLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <>


            <div className="navbar bg-base-100">
                <div className="flex-10">
                    <a className="btn btn-ghost text-xl">Hello* {user?.id ? user.username : 'Guest'}</a>
                </div>

            </div>
            <div className="flex-1">

                <div className="navbar bg-base-100">
                    <div className="navbar bg-base-10">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/Home'>Homepage</Link></li>
                                    <li><Link to='/About'>About</Link></li>
                                    {user?.id && (
                                        <li className='btn-error'>
                                            <Link to='#' className="text-red-500" onClick={hdlLogout}>Logout</Link>
                                        </li>
                                    )}<a></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">

                        <div className="navbar bg-base-100 gap-5 ">

                            <div className="flex justify-end">

                                <ul className="menu menu-horizontal px-100">

                                    {finalNav.map(el => (
                                        <li key={el.to}>
                                            <Link to={el.to}>{el.text}</Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
