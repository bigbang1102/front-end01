import axios from "axios";
import React, { useState } from "react";
import SetShowuser from "./SetShowuser";


export default function Trainner() {
    const [input, setInput] = useState({
        details: "",
        price: "",
        quantity: "",
    });

    const hdlChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hdlSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!input.details || !input.price || !input.quantity) {
                alert("กรอกข้อมูลให้ครบ");
                return;
            }
            const token = localStorage.getItem("token");
            const rs = await axios.post("http://localhost:8889/claus/addclaus/", input,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );


            alert("Create new OK");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

                <div className="text-3xl mb-6 font-bold text-center text-blue-600"></div>
                <div className="p-12  border w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto rounded-lg mt-10 bg-gradient-to-r bg-gray-300/100 shadow-md">
                    <form onSubmit={hdlSubmit}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">รูปเเบบการออกกำลังกายที่อยากได้</span>
                            </div>
                            <input
                                type="text"
                                placeholder="details"
                                className="input input-bordered w-full "
                                name="details"
                                value={input.details}
                                onChange={hdlChange}
                            />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">โค้ด</span>
                            </div>
                            <input
                                type="text"
                                placeholder="price"
                                className="input input-bordered w-full "
                                name="price"
                                value={input.price}
                                onChange={hdlChange}
                            />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">ชั่วโมง</span>
                            </div>
                            <input
                                type="text"
                                placeholder="quantity"
                                className="input input-bordered w-full "
                                name="quantity"
                                value={input.quantity}
                                onChange={hdlChange}
                            />
                        </label>
                        <br />
                        <div>
                            <button className="btn px-4 btn-info hover:bg-blue-700 text-sm font-semibold text-gray-600 mb-1">กดหนูหน่อย!!</button>
                        </div>
                    </form>
                </div>
            </div>
            <div><SetShowuser /></div>
        </>
    )
}
