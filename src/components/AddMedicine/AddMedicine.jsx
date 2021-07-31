import { useState } from 'react';
import './AddMedicine.css';

function AddMedicine({ addAction }) {
    const [name, setName] = useState('');
    const [count, setCount] = useState(1);

    const onAddClick = () => {
        if (!name) {
            return;
        }

        addAction({ name, count });
        setName('');
        setCount(1);
    };

    return (
        <div className="App">
            <div className="add-medicine">
                <div>
                    <label htmlFor="name-input">Medication Name: </label>
                    <input
                        id="name-input"
                        className="name-input"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="count-input">Medication Count: </label>
                    <input
                        id="count-input"
                        className="count-input"
                        onChange={(e) => setCount(e.target.value)}
                        value={count}
                        type="number"
                    />
                </div>
                <div>
                    <button type="button" onClick={onAddClick}>
                        Add Medicine +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddMedicine;
