let ul = '<ul>';
for (let i = 0; i < 10; i++) {
    ul += `<li>${Math.floor(Math.random() * 100)}</li>`;
}
ul += '</ul>';
document.body.innerHTML += ul;