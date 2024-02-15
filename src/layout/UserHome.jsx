import axios from 'axios'
import { useEffect, useState } from 'react'
import Clausform from '../components/Clausform'

export default function UserHome() {
    const [consults, setconsult] = useState([])

    useEffect(() => {
        const run = async () => {
            let token = localStorage.getItem('token')
            const rs = await axios.get('http://localhost:8889/consult', {
                headers: { Authorization: `Bearer ${token}` }
            })
            setconsult(rs.data.consults)
        }
        run()
    }, [])

    return (
        <>
            <Clausform />
        </>
    )
}