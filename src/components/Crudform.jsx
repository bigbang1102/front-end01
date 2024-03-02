
import 'react-responsive-modal/styles.css';
import React, { useState, useEffect } from 'react';

export default function Crudform() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);

    useEffect(() => {
    }, []);

    const addItem = () => {
        if (name.trim() !== '' && quantity.trim() !== '') {
            const newItem = { name, quantity };
            setItems(prevItems => [...prevItems, newItem]);
            setName('');
            setQuantity('');
        }
    };

    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const editItem = (index) => {
        const itemToEdit = items[index];
        setName(itemToEdit.name);
        setQuantity(itemToEdit.quantity);
        setEditingIndex(index);
    };

    const updateItem = () => {
        if (name.trim() !== '' && quantity.trim() !== '') {
            const updatedItems = [...items];
            updatedItems[editingIndex] = { name, quantity };
            setItems(updatedItems);
            setName('');
            setQuantity('');
            setEditingIndex(-1);
        }
    };


    const clearAll = () => {
        setItems([]);
        setName('');
        setQuantity('');
        setEditingIndex(-1);
    }


    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Product List</h2>
            <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-secondary w-full max-w-xs"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <br />
            <input
                type="text"
                placeholder="Quantity"
                className="input input-bordered input-secondary w-full max-w-xs"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <br />
            {editingIndex === -1 ? (
                <button className="btn btn-outline btn-success" style={{ marginBottom: '10px' }} onClick={addItem}>
                    Add
                </button>
            ) : (
                <button className="btn btn-outline btn-success" style={{ marginBottom: '10px' }} onClick={updateItem}>
                    Update
                </button>
            )}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Product </h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Quantity</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.quantity}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <button className="btn btn-outline btn-error" onClick={() => deleteItem(index)}>Delete</button>
                                    <button className="btn btn-outline btn-warning" onClick={() => editItem(index)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
