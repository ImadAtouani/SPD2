let prixHT = parseFloat(prompt("Veuillez entrer le prix HT :"));
let tva = 0.20;
let prixTTC = prixHT * (1 + tva);
document.body.innerText = "Le prix TTC est de : " + prixTTC.toFixed(2) + " $";