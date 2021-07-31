import { useState } from 'react';
import './DayRangeSelect.css';

function DayRangeSelect({ timeRange, setTimeRange }) {
    const [fromTime, setFromTime] = useState(timeRange.from);
    const [toTime, setToTime] = useState(timeRange.to);

    return (
        <div className="day-range-select-container">
            <div>
                <label htmlFor="from-time">From time: </label>
                <input
                    type="time"
                    id="from-time"
                    value={fromTime}
                    onChange={(el) => setFromTime(el.target.value)}
                />
            </div>
            <div>
                <label htmlFor="to-time">To time: </label>
                <input
                    type="time"
                    id="to-time"
                    value={toTime}
                    onChange={(el) => setToTime(el.target.value)}
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
