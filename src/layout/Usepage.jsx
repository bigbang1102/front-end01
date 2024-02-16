import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';



const guestNav = [
    // { to: '/', text: 'Login' },
    // { to: '/register', text: 'Register' },
]

const userNav = [
    { to: '/User', text: 'คลอส' },
    { to: '/Pro', text: 'โปรไฟล์' },
    { to: '/new', text: 'ตะกร้า' },
    { to: '/tri', text: 'เทรนเนอร์' },
    { to: '/Con', text: 'ติดต่อ' },

]

export default function Usepage() {
    const { user, logout } = useAuth()
    const finalNav = user?.id ? userNav : guestNav

    const navigate = useNavigate()
    return (
        <>


            <div className="navbar bg-base-100">
                <div className="flex-10">
                    <a className="btn btn-ghost text-xl">Hello* {user?.id ? user.username : 'word'}</a>
                </div>

            </div>
            <div className="flex-1">
                <p>Admin login</p>
                <p>Username:zxc</p>
                <p>Password:1234566</p>
                <div className="navbar bg-base-100">
                    <div className="navbar bg-base-10">
                        <div className="navbar-start">

                            <div className="dropdown">
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
    )
}
