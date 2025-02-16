for (let i = 0; i < 12; i++) {
    let imgId = Math.floor(Math.random() * 1000); // ID aléatoire
    let img = `<img src="https://picsum.photos/id/${imgId}/350/350" alt="Image aléatoire" style="margin:5px;">`;
    document.body.innerHTML += img;
}