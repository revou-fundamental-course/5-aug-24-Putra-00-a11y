// AWAL CODE JAVASCRIPT

console.log(`Selamat Datang!`);
// Code JS Perubahan Lampu Pada Web BMI Dengan Menggunakan Sebuah Tombol
const toggleButton = document.getElementById('buttonDarkLightToggle');
const themeStyle = document.getElementById('');

// Code JS Efek Perubahan Pencahayaan Web BMI Menggunakan Function Toggle
toggleButton.addEventListener('click', () => {
if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}
});

// AKHIR CODE JAVASRIPT