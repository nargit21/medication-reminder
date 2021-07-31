function getTimeRange() {
    const medications = localStorage.getItem('time-range');

    if (medications !== null) {
        return JSON.parse(medications);
    }

    return {
        from: '11:00',
        to: '02:00',
    };
}

function updateTimeRange(timeRange) {
    localStorage.setItem('time-range', JSON.stringify(timeRange));
}

export { getTimeRange, updateTimeRange };
