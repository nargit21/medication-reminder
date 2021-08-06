import './Medicines.css';

function calcTakeData(medications, timeRange) {
    const takeData = [];

    let totalTimeInterval = timeRange.to.getTime() - timeRange.from.getTime();
    medications.forEach((medication) => {
        const takeTimeInterval = totalTimeInterval / Number(medication.count);

        for (let i = 0; i < Number(medication.count) || 0; i++) {
            const res = {};
            res.name = medication.name;
            res.time = new Date(
                timeRange.from.getTime() + takeTimeInterval * (i + 1)
            );

            takeData.push(res);
        }
    });

    takeData.sort((a, b) => a.time - b.time);

    return takeData;
}

function Medicines({ medications, timeRange, deleteMedAction }) {
    const takeData = calcTakeData(medications, timeRange);

    return (
        <div className="medicines-container">
            <h2>Medications</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {medications.map((medication) => (
                        <tr key={medication.name + medication.count}>
                            <td>{medication.name}</td>
                            <td>{medication.count}</td>
                            <td
                                onClick={() => deleteMedAction(medication.name)}
                            >
                                X
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Take Time</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {takeData.map((medication) => (
                        <tr key={medication.time.getTime() + medication.name}>
                            <td>
                                {new Intl.DateTimeFormat('ru', {
                                    dateStyle: 'medium',
                                    timeStyle: 'medium',
                                }).format(medication.time)}
                            </td>
                            <td>{medication.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Medicines;
