import React, { useState } from "react";

function Product() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                คลอส
                            </th>
                            <th scope="col" className="px-6 py-3">
                                จำนวน
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ราคา
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ลบ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ซื่อ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* แสดงรายการสินค้าที่อยู่ในตะกร้า */}
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                {/* แสดงข้อมูลสินค้าแต่ละรายการ */}
                                <td>รูปภาพสินค้า</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>ปุ่มลบ</td>
                                <td>ชื่อผู้ขาย</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* แสดง Shopping Cart */}
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Product;
