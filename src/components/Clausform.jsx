import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Clausform() {
    const [input, setInput] = useState({
        details: "",
        price: "",
        quantity: ""
    });

    const hdlChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hdlSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("details", input.details);
            formData.append("price", input.price);
            formData.append("quantity", input.quantity);

            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:8889/claus",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,

                    },
                }
            );
            hdlSuccess();
            console.log(response.data);
        } catch (error) {
            console.error(error);

        }
    };

    const [showPopup, setShowPopup] = useState(false);

    const hdlSuccess = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    return (

        <form
            className="flex flex-row rounded w-4/6 mx-auto p-4 gap-6 m-10 mt-1"
            onSubmit={hdlSubmit}
        >
            <div>
                <h1 className='text-white mt-[-70px] ml-[-200px]'>
                    <Link to="/">Home</Link>
                </h1>
            </div>
            <div>
                <label className="form-control w-[500px]">
                    <div className="label">
                        <span className="label-text text-white">details</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="title"
                        value={input.title}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-[500px]">
                    <div className="label">
                        <span className="label-text text-white">Price</span>
                    </div>
                    <input
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-[500px]"
                        name="price"
                        value={input.price}
                        onChange={hdlChange}
                    />
                </label>
                <label className="form-control w-[500px]">
                    <div className="label">
                        <span className="label-text text-white">Detail</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered h-[200px]"
                        name="detail"
                        value={input.detail}
                        onChange={hdlChange}
                    />
                </label>
                <button type="submit" className="btn btn-primary mt-5 ml-96 " onClick={hdlSuccess}>Add new</button>
                {showPopup && (
                    <div className={`popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded z-10 ${showPopup ? 'block' : 'hidden'}`}>
                        <p>Success</p>
                    </div>
                )}
            </div>
            <div>
                <div>


                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        คลอส
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เวลา/ชั่วโมง
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        โค้ด
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ราคา
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เพิ่ม
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ออกกำลังกายเพื่อลดไขมัน
                                    </th>
                                    <td class="px-6 py-4">
                                        299
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-00
                                    </td>
                                    <td class="px-6 py-4">
                                        1566
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสเพิ่มกล้ามเนื้อพิเศษ
                                    </th>
                                    <td class="px-6 py-4">
                                        300
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-01
                                    </td>
                                    <td class="px-6 py-4">
                                        999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสสำหรับผู้หญิง
                                    </th>
                                    <td class="px-6 py-4">
                                        499
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-02
                                    </td>
                                    <td class="px-6 py-4">
                                        500
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสเสริมทักษะเอาชีวิตรอดจากป่า
                                    </th>
                                    <td class="px-6 py-4">
                                        70
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-03
                                    </td>
                                    <td class="px-6 py-4">
                                        799
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสบริหารกล้ามเนื้อ(ใช้ในการเเข่งขัน)
                                    </th>
                                    <td class="px-6 py-4">
                                        320
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-04
                                    </td>
                                    <td class="px-6 py-4">
                                        2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสเพิ่มน้ำหนัก
                                    </th>
                                    <td class="px-6 py-4">
                                        499
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-05
                                    </td>
                                    <td class="px-6 py-4">
                                        399
                                    </td>
                                    <td class="px-6 py-4">

                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสเสริมพลังกาย
                                    </th>
                                    <td class="px-6 py-4">
                                        40
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-06
                                    </td>
                                    <td class="px-6 py-4">
                                        699
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        สำหรับผู้หญิงมีคลัน
                                    </th>
                                    <td class="px-6 py-4">
                                        300
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-07
                                    </td>
                                    <td class="px-6 py-4">
                                        800
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสสำหรับคนรวย(มีเทรนส่วนตัว)
                                    </th>
                                    <td class="px-6 py-4">
                                        500
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-08
                                    </td>
                                    <td class="px-6 py-4">
                                        15000
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        คลอสพิเศษสำหรับคนที่อยากเสริมกล้ามเนื้อเฉพาะส่วน
                                    </th>
                                    <td class="px-6 py-4">
                                        400
                                    </td>
                                    <td class="px-6 py-4">
                                        XRX-12545-09
                                    </td>
                                    <td class="px-6 py-4">
                                        599
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">เพิ่มไปที่ตะกร้า</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                            aria-label="Table navigation">
                            <span
                                class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing
                                <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                                    class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page"
                                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>

        </form>
    );
}