function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username=="fredi" && password=="12345"){

    alert("Login Berhasil");
    window.location.href="dashboard.html";

}else{

    alert("Username atau Password salah");

}

}
function absenMasuk(){

kirimData("Fredi Setiyawan","Hadir");

alert("Absen Masuk Berhasil");

}

function absenPulang(){

kirimData("Fredi Setiyawan","Pulang");

alert("Absen Pulang Berhasil");

}

function izin(){

kirimData("Fredi Setiyawan","Izin");

alert("Data Izin Berhasil");

}

function sakit(){

kirimData("Fredi Setiyawan","Sakit");

alert("Data Sakit Berhasil");

}

function riwayatAbsensi() {

alert("Riwayat Absensi Akan Ditampilkan");

}
function kirimData(nama, status){

let sekarang = new Date();

let data = {

nama : nama,
tanggal : sekarang.toLocaleDateString(),
jam : sekarang.toLocaleTimeString(),
status : status

};

fetch(https://script.google.com/macros/s/AKfycbzoeaeK_IdjQI4aAtXE6YSxwKyFvHTyLkqBvINoJhjcFQfYCOTdeHPLjiSBe5egJVw2RA/exec,{

method : "POST",

body : JSON.stringify(data)

});

}

function logout() {

window.location.href = "index.html";

}
if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(function(){

console.log("PWA Berhasil");

});

}