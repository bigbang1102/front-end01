import axios from "axios";
import { useState } from "react";

export default function Showuser() {
    const [claus, setclaus] = useState({
        details: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { details, value } = e.target;
        setclaus({ ...claus, [details]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in claus) {
            formData.append(key, claus[key]);
        }

        try {
            const response = await axios.post('http://localhost:8889/admin/claus', FormData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(response.data);
            alert('Product created successfully');
        } catch (error) {
            console.error(error);
            alert('Error creating product');
        }
    }

    return (
        <div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>


                <label>
                    <span>details</span>
                    <input
                        type="text"
                        name="details"
                        value={claus.details}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>price</span>
                    <input
                        type="number"
                        name="price"
                        value={claus.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span> quantity</span>
                    <input
                        type="number"
                        name=" quantity"
                        value={claus.quantity}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
