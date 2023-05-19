function hitungKeliling() {
    var sisi = document.getElementById("sisi-keliling").value;
    var keliling = 4 * sisi;
    document.getElementById("hasil-keliling").innerHTML = "Keliling: " + keliling;
}

function hitungLuas() {
    var sisi = document.getElementById("sisi-luas").value;
    var luas = sisi * sisi;
    document.getElementById("hasil-luas").innerHTML = "Luas: " + luas;
}
