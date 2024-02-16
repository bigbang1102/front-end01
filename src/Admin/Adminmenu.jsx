import useAuth from "../hooks/useAuth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


export default function Adminmenu() {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const hdlLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <>
            <nav className='sticky left-0 flex flex-col w-2/12 h-screen px-3 gap-y-5 bg-gray-100'>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4 text-black">เมนูจัดการ</h2>
                    <div className="mb-2">
                        <Link to="/AdminDashbord" className="btn btn-wide btn-outline btn-error">แดชบอร์ด</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Admininformation" className="btn btn-wide btn-outline btn-error">ข้อมูลผู้ใช้งาน</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/AdminHome" className="btn btn-wide btn-outline btn-error">ข้อมูลย้อนหลัง</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/Adminheader" className="btn btn-wide btn-outline btn-error">รายชื่อผู้ใช้งาน</Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/AdminDashbord" className="btn btn-wide btn-outline btn-error">คลอส</Link>

                    </div>
                    <div>
                        <Link to="/AdminDashbord" className="btn btn-wide btn-outline btn-error">สินค้าภายในคลัง</Link>
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