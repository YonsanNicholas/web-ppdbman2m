const dataSekolah = {
  "Nusa Tenggara Barat": {
    "Kota Mataram": [
      "SMP Negeri 1 Mataram", "SMP Negeri 2 Mataram", "SMP Negeri 3 Mataram", "SMP Negeri 4 Mataram",
      "SMP Negeri 5 Mataram", "SMP Negeri 6 Mataram", "SMP Negeri 7 Mataram", "SMP Negeri 8 Mataram",
      "SMP Negeri 9 Mataram", "SMP Negeri 10 Mataram", "SMP Negeri 11 Mataram", "SMP Negeri 12 Mataram",
      "SMP Negeri 13 Mataram", "SMP Negeri 14 Mataram", "SMP Negeri 15 Mataram", "SMP Negeri 16 Mataram",
      "SMP Negeri 17 Mataram", "SMP Negeri 18 Mataram", "SMP Negeri 19 Mataram", "SMP Negeri 20 Mataram",
      "SMP Negeri 21 Mataram", "SMP Negeri 22 Mataram", "SMP Negeri 23 Mataram", "SMP Negeri 24 Mataram",
      "SMP Islam Terpadu YARSI Mataram", "SMP Nasional 3 Bahasa Budi Luhur Mataram",
      "SMP Islam Terpadu Putri Mataram", "SMP Dwijendra Mataram", "SMP IT Al Fajar Mataram",
      "SMP Muhammadiyah Mataram", "SMP IT Tunas Cendekia Mataram", "SMP Kristen Aletheia Ampenan",
      "MTs Negeri 1 Mataram", "MTs Negeri 2 Mataram", "MTs Negeri 3 Mataram", "MTs Swasta Darul Falah",
      "MTs Swasta NW Mataram", "MTsS NW Mataram", "MTs Assalam Mataram", "MTsS Ittihadul Ummah",
      "MTsS Mambaul Abror", "MTs Nurul Islam Sekarbela", "MTsS Nurussalamah", "MTsS Al Madaniyah",
      "MTsS Hidayatullah", "MTsS Nahdlatul Mujahidin NW", "MTsS Nurul Jannah NW", "MTsS Riadul Ulum"
    ]
  }
};

const opsiJenisKelamin = ["Laki-laki", "Perempuan"];
const opsiStatusOrtu = ["Hidup", "Meninggal"];
const opsiJurusan = ["IPA", "IPS"];

function isiOptions(idSelect, options) {
  const select = document.getElementById(idSelect);
  select.innerHTML = '<option value="" disabled selected>Pilih</option>';
  options.forEach(opt => {
    const el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    select.appendChild(el);
  });
}

function loadProvinsi() {
  const selectProv = document.getElementById('provinsi');
  selectProv.innerHTML = '<option value="" disabled selected>Pilih Provinsi</option>';
  Object.keys(dataSekolah).forEach(prov => {
    const opt = document.createElement('option');
    opt.value = prov;
    opt.textContent = prov;
    selectProv.appendChild(opt);
  });

  // Disable kota dan sekolah pada awal
  const selectKota = document.getElementById('kota');
  selectKota.innerHTML = '<option value="" disabled selected>Pilih Kota/Kabupaten</option>';
  selectKota.disabled = true;

  const selectSekolah = document.getElementById('asalSekolah');
  selectSekolah.innerHTML = '<option value="" disabled selected>Pilih Asal Sekolah</option>';
  selectSekolah.disabled = true;
}

function loadKota() {
  const selectProv = document.getElementById('provinsi');
  const selectKota = document.getElementById('kota');
  selectKota.innerHTML = '<option value="" disabled selected>Pilih Kota/Kabupaten</option>';
  const prov = selectProv.value;

  if (prov && dataSekolah[prov]) {
    Object.keys(dataSekolah[prov]).forEach(kota => {
      const opt = document.createElement('option');
      opt.value = kota;
      opt.textContent = kota;
      selectKota.appendChild(opt);
    });
    selectKota.disabled = false;
  } else {
    selectKota.disabled = true;
  }

  // Reset dan disable sekolah ketika provinsi berubah
  const selectSekolah = document.getElementById('asalSekolah');
  selectSekolah.innerHTML = '<option value="" disabled selected>Pilih Asal Sekolah</option>';
  selectSekolah.disabled = true;
}

function loadAsalSekolah() {
  const prov = document.getElementById('provinsi').value;
  const kota = document.getElementById('kota').value;
  const selectSekolah = document.getElementById('asalSekolah');
  selectSekolah.innerHTML = '<option value="" disabled selected>Pilih Asal Sekolah</option>';

  if (prov && kota && dataSekolah[prov] && dataSekolah[prov][kota]) {
    dataSekolah[prov][kota].forEach(sekolah => {
      const opt = document.createElement('option');
      opt.value = sekolah;
      opt.textContent = sekolah;
      selectSekolah.appendChild(opt);
    });
    selectSekolah.disabled = false;
  } else {
    selectSekolah.disabled = true;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadProvinsi();
  isiOptions('jenisKelamin', opsiJenisKelamin);
  isiOptions('statusOrtu', opsiStatusOrtu);
  isiOptions('pilihanJurusan', opsiJurusan);

  document.getElementById('provinsi').addEventListener('change', loadKota);
  document.getElementById('kota').addEventListener('change', loadAsalSekolah);
});
