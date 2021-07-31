function addMed(data) {
    const medications = getMeds();

    const sameNameExits = medications.find((el) => el.name === data.name);

    if (!sameNameExits) {
        medications.push(data);
        setMeds(medications);
    }

    return medications;
}

function deleteMed(name) {
    const medications = getMeds();
    const updatedMedications = medications.filter((el) => el.name !== name);

    setMeds(updatedMedications);

    return updatedMedications;
}

function getMeds() {
    const medications = localStorage.getItem('medications');

    if (medications !== null) {
        return JSON.parse(medications);
    }

    return [];
}

function setMeds(medications) {
    localStorage.setItem('medications', JSON.stringify(medications));
}

export { addMed, deleteMed, getMeds };
