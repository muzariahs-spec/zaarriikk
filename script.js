let dataBuku = [];

function tambahBuku() {
    const judul = document.getElementById("judul").value;
    const penulis = document.getElementById("penulis").value;
    const tahun = document.getElementById("tahun").value;

    if (!judul || !penulis || !tahun) {
        alert("Lengkapi semua data!");
        return;
    }

    dataBuku.push({ judul, penulis, tahun });
    tampilkanData();

    document.getElementById("judul").value = "";
    document.getElementById("penulis").value = "";
    document.getElementById("tahun").value = "";
}

function hapusBuku(index) {
    dataBuku.splice(index, 1);
    tampilkanData();
}

function tampilkanData() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    dataBuku.forEach((item, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.judul}</td>
                <td>${item.penulis}</td>
                <td>${item.tahun}</td>
                <td><button onclick="hapusBuku(${i})">Hapus</button></td>
            </tr>
        `;
    });
}
