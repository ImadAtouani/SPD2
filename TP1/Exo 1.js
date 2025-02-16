var userInput = prompt("Veuillez entrer une chaîne de caractères :");
if (userInput !== null) {
    document.getElementById("output").textContent = userInput;
}
else {
    document.getElementById("output").textContent = "Aucun texte saisi.";
}