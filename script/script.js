// AWAL CODE JAVASCRIPT

alert(`Selamat Datang!`)
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

// NAVBAR A 

// NAVBAR A END

// AKHIR CODE JAVASRIPT

// if (hasil <= 18.5) {
//     var status = document.getElementById("keterangan");
//     status.innerHTML = "Kekurangan Berat badan";
// }
// else if (hasil <= 24.9) {
//     var status = document.getElementById("keterangan");
//     status.innerHTML = "Normal (ideal)";
// }
// else if (hasil <= 29.9) {
//     var status = document.getElementById("keterangan");
//     status.innerHTML = "Kelebihan berat badan";
// }
// else {
//     status.innerHTML = "Kegemukan (obesitas)".toFixed
// }