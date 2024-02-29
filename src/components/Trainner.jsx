import axios from "axios";
import React, { useEffect, useState } from "react";
import Showuser from "./Showuser";
import Todocard from "./Todocard";
export default function Trainner() {
    const [claus, setclaus] = useState([]);

    useEffect(() => {
        const fetchclausData = async () => {
            try {
                const response = await axios.get('http://localhost:8889/admin/claus', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setclaus(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchclausData()
    }, [])
    return (
        <div>
            <h1>หน้าหลัก User</h1>
            {
                claus.map((el) => (
                    <Todocard key={el.id} el />
                ))
            }

            {JSON.stringify(claus)}
        </div>
    )
}