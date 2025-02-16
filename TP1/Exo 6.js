let prixHT = parseFloat(prompt("Entrez le prix HT :"));
let tva = parseFloat(prompt("Entrez le taux de TVA :"));
let prixTTC = prixHT * (1 + tva);
let couleur = prixTTC > 100 ? "red" : "green";
document.body.innerHTML = `<h1 style="color: ${couleur};">Prix TTC : ${prixTTC.toFixed(2)} $</h1>`;