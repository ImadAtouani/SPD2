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
let rows = parseInt(prompt('Entrez le nombre de lignes :'));
let cols = parseInt(prompt('Entrez le nombre de colonnes :'));
createTable(rows, cols);