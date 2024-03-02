import axios from "axios";
import React from "react";

export default function ClausCard(props) {
    const { el, openModal, setTrigger } = props;

    const statusColor = el.status === 'PENDING' ? 'bg-pink-300'
        : el.status === 'DOING' ? 'bg-blue-300' : 'bg-lime-0'
    const hdlDelete = async e => {
        try {
            e.stopPropagation()
            const token = localStorage.getItem('token')
            let rs = await axios.delete(`http://localhost:8889/claus/claust${el.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            alert('Delete successful')
            setTrigger(prv => !prv)
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className={` ${statusColor} shadow-xl mx-auto cursor-pointer active:shadow-none active:translate-x-1 active:translate-y-1`} onClick={() => openModal(el.id)}>
            <h2 style={{ textAlign: 'center' }}>คลอส</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '30px', textAlign: 'center' }}>ชื่อคลอส</th>
                            <th style={{ border: '1px solid #ddd', padding: '30px', textAlign: 'center' }}>รูปเเบบที่ต้องการ</th>
                            <th style={{ border: '1px solid #ddd', padding: '30px', textAlign: 'center' }}>ชั่วโมง</th>
                            <th style={{ border: '1px solid #ddd', padding: '30px', textAlign: 'center' }}>active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '15px' }}>{el.details}</td>
                            <td style={{ border: '1px solid #ddd', padding: '15px' }}>{el.price}</td>
                            <td style={{ border: '1px solid #ddd', padding: '15px' }}>{el.quantity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '15px' }}>
                                <div className="badge badge-secondary" onClick={hdlDelete}>delete</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}