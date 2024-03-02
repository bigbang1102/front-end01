import useAuth from "../hooks/useAuth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Adminmenu() {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const hdlLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <>
            <nav className='sticky left-0 flex flex-col w-50 h-screen px-3 gap-y-5 bg-gray-100'>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4 text-black">เมนูจัดการ</h2>
                    <div className="mb-2">
                        <Link to="/AdminDashbord" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10 mb">แดชบอร์ด</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Admininformation" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'">ข้อมูลผู้ใช้งาน</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/AdminHome" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'">ข้อมูลย้อนหลัง</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Adminheader" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'">รายชื่อผู้ใช้งาน</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Selat" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'">คลอส</Link>

                    </div>
                    <div>
                        <Link to="/AdminDashbord" className="btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'">สินค้าภายในคลัง</Link>
                    </div>
                </div>

                <div>
                    <button className="text-black">การตั้งค่า</button>
                    <Link to='#' onClick={hdlLogout} className='btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'>ออกจากระบบ</Link>
                </div>
            </nav>
        </>
    )
}