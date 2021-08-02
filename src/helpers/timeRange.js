function getTimeRange() {
    const medications = localStorage.getItem('time-range');

    if (medications !== null) {
        const parsedData = JSON.parse(medications);

        return {
            from: new Date(parsedData.from),
            to: new Date(parsedData.to),
        };
    }

    let fromDate = new Date();
    fromDate.setHours(11, 0, 0, 0);

    let toDate = new Date();
    toDate.setDate(toDate.getDate() + 1);
    toDate.setHours(2, 0, 0, 0);

    return {
        from: fromDate,
        to: toDate,
    };
}

function updateTimeRange(timeRange) {
    localStorage.setItem('time-range', JSON.stringify(timeRange));
}

export { getTimeRange, updateTimeRange };
