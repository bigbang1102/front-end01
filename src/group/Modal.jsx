import axios from "axios";
import { useState, useEffect } from "react";

export default function Modal(props) {
    const { el, closeModal, setTrigger } = props;
    const [input, setInput] = useState({
        details: "",
        price: "",
        quantity: ""
    });
    const [status, setStatus] = useState([]);

    useEffect(() => {
        let allStatus = JSON.parset(localStorage.getItem("status"));
        if (allStatus) {
            setStatus(allStatus);
        } else {
            const run = async () => {
                // console.log(response.data);
                try {
                    const token = localStorage.getItem("token");
                    const rs = await axios.get("http://localhost:8889/claus/claust", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    localStorage.setItem("status", JSON.stringify(rs.data.status));
                    setStatus(rs.data.status);
                } catch (err) {
                    alert(err.message);
                }
            };
            run();
        }
    }, []);

    useEffect(() => {
        setInput({
            details: el?.details || "",
            price: el?.price || "",
            quantity: el?.quantity || ""
        });
    }, [el?.id]);

    const hdlChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hdlSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const rs = await axios.put(`http://localhost:8889/claust/${el.id}`, input, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTrigger((prev) => !prev);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-6" onSubmit={hdlSubmit}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">ชื่อร้าน</span>
                        </div>
                        <input
                            type="text"
                            placeholder="กรอกชื่อร้าน"
                            className="input input-bordered w-full "
                            name="name"
                            value={input.name}
                            onChange={hdlChange}
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">ที่อยู่ร้าน</span>
                        </div>
                        <input
                            type="text"
                            placeholder="กรอกที่อยู่ร้าน"
                            className="input input-bordered w-full "
                            name="address"
                            value={input.address}
                            onChange={hdlChange}
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">เบอร์โทรศัพท์</span>
                        </div>
                        <input
                            type="text"
                            placeholder="กรอกเบอร์โทรศัพท์"
                            className="input input-bordered w-full "
                            name="phone"
                            value={input.phone}
                            onChange={hdlChange}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary">
                        เเก้ไข
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                        ยกเลิก
                    </button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>ยกเลิก</button>
            </form>
            <Setvenue />
        </dialog>
    );
}