import React from 'react'

function adminDashboard() {
    return (
        <div>
            <div className="w-4/6 border rounded">
                <div className="mb-5 text-3xl">Contact Form</div>
                <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
                    <label className="w-full max-w-xs form-control">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            className="w-full max-w-xs input input-bordered"
                            name="name"
                            value={input.name}
                            onChange={hdlChange}
                        />
                    </label>
                    <label className="w-full max-w-xs form-control">
                        <div className="label">
                            <span className="label-text">E-mail</span>
                        </div>
                        <input
                            type="email"
                            className="w-full max-w-xs input input-bordered"
                            name="email"
                            value={input.email}
                            onChange={hdlChange}
                        />
                    </label>
                    <label className="w-full max-w-xs form-control">
                        <div className="label">
                            <span className="label-text">Phone Number</span>
                        </div>
                        <input
                            type="tel"
                            className="w-full max-w-xs input input-bordered"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={hdlChange}
                        />
                    </label>
                    <div className="label">
                        <span className="label-text">Message</span>
                    </div>
                    <textarea name="message" cols="30" rows="10" value={input.message} onChange={hdlChange} />
                    <label className="w-full max-w-xs form-control">

                    </label>

                </form>
            </div>
        </div>
    )
}

export default adminDashboard
