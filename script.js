//===========================
// URL GOOGLE APPS SCRIPT
//===========================

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwUBIKXQyBDCC2K5VRutoio7VHTRTjfJBdE7e6QhPxBou6BGHVOjcF3SVKhhNelnBTOIw/exec";


//===========================
// LOGIN
//===========================

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "fredi" && password == "12345") {

        alert("Login Berhasil");

        localStorage.setItem("namaGuru", "Fredi Setiyawan");

        window.location.href = "dashboard.html";

    } else {

        alert("Username atau Password Salah");

    }

}


//===========================
// KIRIM DATA KE SPREADSHEET
//===========================

function kirimData(nama, status) {

    let sekarang = new Date();

    let data = {

        nama: nama,
        tanggal: sekarang.toLocaleDateString("id-ID"),
        jam: sekarang.toLocaleTimeString("id-ID"),
        status: status

    };

    fetch(WEB_APP_URL, {

        method: "POST",
        body: JSON.stringify(data)

    })

    .then(response => response.text())

    .then(result => {

        alert(result);

    })

    .catch(error => {

        alert("Data gagal dikirim.");

        console.log(error);

    });

}


//===========================
// ABSEN MASUK
//===========================

function absenMasuk() {

    let nama = localStorage.getItem("namaGuru");

    kirimData(nama, "Hadir");

}


//===========================
// ABSEN PULANG
//===========================

function absenPulang() {

    let nama = localStorage.getItem("namaGuru");

    kirimData(nama, "Pulang");

}


//===========================
// IZIN
//===========================

function izin() {

    let nama = localStorage.getItem("namaGuru");

    kirimData(nama, "Izin");

}


//===========================
// SAKIT
//===========================

function sakit() {

    let nama = localStorage.getItem("namaGuru");

    kirimData(nama, "Sakit");

}


//===========================
// LOGOUT
//===========================

function logout() {

    localStorage.clear();

    alert("Logout Berhasil");

    window.location.href = "index.html";

}


//===========================
// EXPORT EXCEL
//===========================

function exportExcel() {

    alert("Fitur Export Excel akan dibuat dari Google Spreadsheet.");

}


//===========================
// EXPORT PDF
//===========================

function exportPDF() {

    alert("Fitur Export PDF akan dibuat dari Google Spreadsheet.");

}


//===========================
// SERVICE WORKER PWA
//===========================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")

    .then(() => {

        console.log("PWA Aktif");

    })

    .catch((error) => {

        console.log(error);

    });

}