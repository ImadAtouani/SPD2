function createTable(x, y) {
    let table = '<table border="1">';
    for (let i = 0; i < x; i++) {
        table += '<tr>';
        for (let j = 0; j < y; j++) {
            table += `<td>${Math.floor(Math.random() * 100)}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    document.body.innerHTML += table;
}