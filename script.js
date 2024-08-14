document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

function downloadData(format) {
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        address: document.getElementById('address').value,
        occupation: document.getElementById('occupation').value
    };

    if (format === 'json') {
        downloadJSON(formData);
    } else if (format === 'csv') {
        downloadCSV(formData);
    }
}

function downloadJSON(data) {
    const jsonString = JSON.stringify(data, null, 4);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
}

function downloadCSV(data) {
    const csvRows = [];
    const headers = Object.keys(data).join(',');
    csvRows.push(headers);
    const values = Object.values(data).join(',');
    csvRows.push(values);

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
    URL.revokeObjectURL(url);
}
