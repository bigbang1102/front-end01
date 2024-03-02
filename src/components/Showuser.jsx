import axios from "axios";
import { useState } from "react";

export default function Showuser() {
    const [addclaus, setaddclaus] = useState([])

    useEffect(() => {
        const run = async () => {
            let token = localStorage.getItem('token')
            const rs = await axios.get('http://localhost:8889/claus/claust', {
                headers: { Authorization: `Bearer ${token}` }
            })
            setaddclaus(rs.data.addclaus)
        }
    })

    return (
        <div>
            {JSON.stringify(addclaus)}
        </div>
    )
}
