import React from 'react'

function Contact() {
    return (

        <div className="modal-box">
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">ชื่อ</span>
                </div>
                <input
                    type="text"
                    placeholder="กรอกชื่อ"
                    className="input input-bordered w-full "
                    name="name"
                />
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">ปัญหาที่พบ</span>
                </div>
                <input
                    type="text"
                    placeholder="กรอกปัญหาที่พบ"
                    className="input input-bordered w-full "
                    name="address"
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
                />
            </label>
            <div>
                <button className="btn px-50 btn-info hover:bg-blue-700 text-sm font-semibold text-gray-1000 mb-3 ">ยืนยัน</button>
            </div>
        </div>

    )
}

export default Contact
