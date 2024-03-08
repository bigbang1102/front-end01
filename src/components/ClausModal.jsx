import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function ClausModal() {

    const openModal = (id) => {
        let idx = claust.findIndex(el => el.id === id)
        setEditIdx(idx)
        document.getElementById("my_modal_2").showModal()
    }

    const closeModal = () => {
        document.getElementById("my_modal_2").close()
    }
    return (
        <div >

        </div>
    )
}
