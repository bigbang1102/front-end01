import axios from "axios";
import { useEffect, useState } from "react";
import ClausCard from "../group/ClausCard";
import ModalEdit from "../group/ModalEdit";

export default function SetShowuser() {
    const [claust, setClaust] = useState([])
    const [editIdx, setEditIdx] = useState(-1)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const run = async () => {
            let token = localStorage.getItem("token");
            const rs = await axios.get("http://localhost:8889/claus/claust", {
                headers: { Authorization: ` Bearer ${token} ` },
            });
            setClaust(rs.data.claust);
        };
        run();
    }, [trigger]);

    const openModal = (id) => {
        let idx = claust.findIndex(el => el.id === id)
        setEditIdx(idx)
        document.getElementById("my_modal_2").showModal()
    }

    const closeModal = () => {
        document.getElementById("my_modal_2").close()
    }

    return (

        <div className="flex flex-col gap-4">
            <div className="text-center text-2xl text-blue-500"><h2>ข้อมูลของท่าน</h2></div>
            <ModalEdit el={claust[editIdx]} closeModal={closeModal} setTrigger={setTrigger} />
            <div className="flex flex-col gap-4">
                {claust.map((el) => (
                    <ClausCard key={el.id} el={el} openModal={openModal} setTrigger={setTrigger} />
                ))}
            </div>
        </div>

    );
}