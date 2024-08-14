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

// Kalkulasi BMI
function calculateBMI() {
    // Mengambil nilai dari input
    let beratBadan = parseFloat(document.getElementById("beratBMI").value);
    let usia = parseInt(document.getElementById("usiaBMI").value, 10); // Menggunakan parseInt untuk usia
    let tinggiBadan = parseFloat(document.getElementById("tinggiBMI").value);

    // Logging nilai untuk debugging
    console.log(beratBadan);
    console.log(usia);
    console.log(tinggiBadan);

    // Mengkonversi tinggi badan ke meter
    tinggiBadan = tinggiBadan / 100;

    // Menghitung BMI
    let bmi = beratBadan / (tinggiBadan * tinggiBadan);
    document.getElementById("numHasilBMI").innerText = bmi.toFixed(1);

    // Kalkulasi hasil BMI
    let pHasilBMI = "";
    if (bmi < 18.5) {
        pHasilBMI += "Maaf, Anda kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        pHasilBMI += "Badan kamu ideal.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        pHasilBMI += "Berat badan kamu kelebihan.";
    } else if (bmi >= 30.0) {
        pHasilBMI += "Anda memiliki berat badan berlebih (Obesitas).";
    } else {
        alert("Masukkan Data BMI!");
    }

    // Menambahkan informasi usia
    let usiaKategori = "";
    if (usia < 18) {
        usiaKategori = "Anda masih di bawah umur dewasa.";
    } else if (usia >= 18 && usia <= 64) {
        usiaKategori = "Anda dalam kategori usia dewasa.";
    } else if (usia >= 65) {
        usiaKategori = "Anda dalam kategori usia lansia.";
    } else {
        usiaKategori = "Usia tidak valid.";
    }

    // Menampilkan hasil
    document.getElementById("pHasilBMI").innerText = pHasilBMI + " " + usiaKategori;

    // Menentukan hasil diantara
    let bawahhasil = (bmi - 1).toFixed(0);
    let atashasil = (bmi + 1).toFixed(0);
    let resultAntara = `Hasil BMI diantara ${bawahhasil} dan ${atashasil}`;
    document.getElementById("pHasil00").innerText = resultAntara;
}

//Perisetan kalkulator
function resetBMI(){
    document.getElementById("beratBMI").value = '';
    document.getElementById("usiaBMI").value = '';
    document.getElementById("tinggiBMI").value = '';

    document.getElementById("pHasilBMI").innerText = '-';
    document.getElementById("numHasilBMI").innerText = '00.00';
    
    document.getElementById("pHasil00").innerText = 'Hasil BMI diantara - dan -';
}
// AKHIR PERKODEAN JAVASCRIPT
// TERIMA  KASIH KAKAK PEMBIMBING DARI REVOU YANG TELAH
// MEMBANTU KU DALAM BERLOGIKA DI JAVASCRIPT INI, NAMUN,
// JIKALAU ADA KESALAHAN/ERROR PADA CODE INI, MOHON DIMAAFKAN
// DIKARENAKAN SAYA MASIH SEDIKIT BINGUNG DENGAN PERHITUNGAN INI

// SEMOGA KAKAK SUKA :)