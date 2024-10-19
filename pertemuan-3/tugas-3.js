const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

// tampilkan data mahasiswa yang pertama
const mhs1 = dataMahasiswa[0];

// destructuring seluruh field
const {
  id,
  nama,
  tanggalLahir,
  fakultas,
  programStudi,
  semester,
  nilai,
  aktif,
  organisasi,
} = mhs1;
console.log(nama, fakultas, semester);

//  destructuring field nilai
const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log(
  `Algoritma: ${algoritma}, Basis Data: ${basisData}, Pemrograman Web: ${pemrogramanWeb}`
);

// destructuring dan spread operator field organisasi
const [organisasi1, organisasi2, ...organisasiLainnya] = organisasi;
console.log(`1: ${organisasi1}, 2: ${organisasi2}`);

// update field fakultas dan semester
const updateMahasiswa = {
  ...mhs1,
  fakultas: "Fakultas Ilmu Budaya",
  semester: 5,
};
console.log(updateMahasiswa.fakultas, updateMahasiswa.semester);

// split field tanggal lahir dan tampilkan tahun
const getYear = updateMahasiswa.tanggalLahir.split("-")[0];
console.log(getYear);

// conditional operator
const statusMahasiswa = updateMahasiswa.aktif
  ? "Mahasiswa Aktif"
  : "Mahasiswa Tidak Aktif";
console.log(statusMahasiswa);

// tampilkan semua nama mahasiswa menggunakan method map
const getName = dataMahasiswa.map((mhs) => mhs.nama);
console.log(getName);

// tampilkan semua nama mahasiswa yang aktif dan dari fakultas ilmu komputer menggunakan method filter
const mhsIsAktif = dataMahasiswa
  .filter((mhs) => mhs.aktif)
  .map((mhs) => mhs.nama);
console.log(mhsIsAktif);

const mhsIsIlkom = dataMahasiswa
  .filter((mhs) => mhs.fakultas === "Fakultas Ilmu Komputer")
  .map((mhs) => mhs.nama);
console.log(mhsIsIlkom);

// total semua nilai mahasiswa
const sumNilai = dataMahasiswa.reduce((sum, currentValue) => {
  const nilai = Object.values(currentValue.nilai).reduce(
    (acc, nilai) => acc + nilai
  );

  return sum + nilai;
}, 0);
console.log(sumNilai);

// sorting mahasiswa berdasarkan semester
const sortSemester = dataMahasiswa
  .sort((a, b) => a.semester - b.semester)
  .map((mhs) => `Nama: ${mhs.nama}, Semester ${mhs.semester}`);
console.log(sortSemester);

// tambah mahasiswa
const tambahMahasiswa = {
  id: 4,
  nama: "Yutase",
  tanggalLahir: "2004-08-04",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Teknik Informatika",
  semester: 5,
  nilai: {
    sisiKlien: 90,
    perangkatBergerak: 82,
    sisiServer: 70,
  },
  aktif: true,
  organisasi: ["Badan Eksekutif Mahasiswa"],
};

const dataMahasiswaUpdated = [...dataMahasiswa, tambahMahasiswa];
console.log(dataMahasiswaUpdated);

// delete dan update salah satu mahasiswa
const deleteMahasiswa = dataMahasiswaUpdated.slice(1);
console.log(deleteMahasiswa);

const updateDataMahasiswa = deleteMahasiswa
  .map((mhs) =>
    mhs.nama === "Yutase" ? { ...mhs, nama: "Yutase Jordan Amrullah" } : mhs
  )
  .map((mhs) => mhs.nama);
console.log(updateDataMahasiswa);
