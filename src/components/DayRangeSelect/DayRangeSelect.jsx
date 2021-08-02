import { useState } from 'react';
import './DayRangeSelect.css';
import DateTimePicker from 'react-datetime-picker';

function DayRangeSelect({ timeRange, setTimeRange }) {
    const [fromTime, setFromTime] = useState(timeRange.from);
    const [toTime, setToTime] = useState(timeRange.to);

    return (
        <div className="day-range-select-container">
            <div>
                <label htmlFor="from-time">From time: </label>

                <DateTimePicker
                    id="from-time"
                    onChange={setFromTime}
                    value={fromTime}
                    locale="ru"
                />
            </div>
            <div>
                <label htmlFor="to-time">To time: </label>

                <DateTimePicker
                    id="to-time"
                    value={toTime}
                    onChange={setToTime}
                    locale="ru"
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setTimeRange({
                            from: fromTime,
                            to: toTime,
                        });
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default DayRangeSelect;
