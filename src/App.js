import { useState } from 'react';
import AddMedicine from './components/AddMedicine/AddMedicine';
import Medicines from './components/Medicines/Medicines';
import DayRangeSelect from './components/DayRangeSelect/DayRangeSelect';
import { addMed, getMeds, deleteMed } from './helpers/medication';
import { getTimeRange, updateTimeRange } from './helpers/timeRange';

import './App.css';

function App() {
    const [medications, setMedications] = useState(getMeds());
    const [timeRange, setTimeRange] = useState(getTimeRange());

    const addAction = (data) => {
        const updatedMedications = addMed(data);

        setMedications(updatedMedications);
    };

    const deleteMedAction = (name) => {
        const updatedMedications = deleteMed(name);

        setMedications(updatedMedications);
    };

    return (
        <div className="App">
            <Medicines
                medications={medications}
                timeRange={timeRange}
                deleteMedAction={deleteMedAction}
            />
            <DayRangeSelect
                timeRange={timeRange}
                setTimeRange={(data) => {
                    updateTimeRange(data);
                    setTimeRange(data);
                }}
            />
            <AddMedicine addAction={addAction} />
        </div>
    );
}

export default App;
