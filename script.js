// Menampilkan 50 hati yang jatuh
const heartsContainer = document.getElementById('hearts');

for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 2 + 's'; // Delay acak untuk variasi
    heartsContainer.appendChild(heart);
}

// Menampilkan pesan setelah 5 detik
setTimeout(() => {
    heartsContainer.style.display = 'none';
    document.getElementById('message').style.display = 'block';
}, 5000);

// Menampilkan dinosaurus setelah 10 detik
setTimeout(() => {
    document.getElementById('message').style.display = 'none';
    document.getElementById('dino').style.display = 'block';
    alert("Rawrrrr...");
}, 10000);

// Menampilkan "Love Youuuuu!!!" setelah 15 detik
setTimeout(() => {
    document.getElementById('dino').style.display = 'none';
    document.getElementById('loveYou').style.display = 'block';
}, 15000);

// Menampilkan balon setelah 20 detik
setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerHTML = '🎈';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(balloon);
    }
}, 20000);