import React from 'react'

export default function Todocard(props) {
    const { el, openModal, setTrigger } = props;

    const statusColor = el.status === 'PENDING' ? 'bg-pink-300'
        : el.status === 'DOING' ? 'bg-blue-300' : 'bg-lime-300'
    const hdlDelete = async e => {
        try {
            e.stopPropagation()
            const token = localStorage.getItem('token')
            let rs = await axios.delete(`http://localhost:8889/todos/${el.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            alert('Delete successful')
            setTrigger(prv => !prv)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div
            className={`card w-2/5 ${statusColor} shadow-xl mx-auto cursor-pointer
        active:shadow-none active:translate-x- active:translate-y-1`}
            onClick={() => openModal(el.id)}
        >
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{el.details}</h2>
                    <div className="badge badge-secondary" onClick={hdlDelete}>delete</div>
                </div>
                <div className="flex">
                    <p>Due-date : {new Date(el.price).toDateString()}</p>
                    <p className="text-right">Status : {el.quantity}</p>
                </div>
            </div>
        </div>

    )
}
