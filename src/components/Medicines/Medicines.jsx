import './Medicines.css';

function Medicines({ medications }) {
    return (
        <div className="medicines-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {medications.map((medication) => (
                        <tr key={medication.name}>
                            <td>{medication.name}</td>
                            <td>{medication.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Medicines;
