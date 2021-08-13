import axios from 'axios';

async function sendPushData(medications, timeRange) {
    let onesignalId;

    if (window?.OneSignal?.getUserId) {
        onesignalId = await window.OneSignal.getUserId();
    }

    if (!onesignalId) {
        return;
    }

    const res = await axios.put('https://tigran.manukyan.dev/push/medication', {
        onesignalId,
        medications,
        timeRange,
    });

    return res;
}

export { sendPushData };
