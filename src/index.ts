// let ereynomer: number[] = [0, 1, 2, 3, 4]
// ereynomer.forEach((kik) => console.log(kik));

interface Pesanan{
    id: number
    customer: string
    menu: string
    qty: number
    price: number
}

const pesanan: Pesanan[] = [
    { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
    { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
    { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
    { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 }
]
const totalpesanan = pesanan.map(pesanan => ({pesanan,
  total: pesanan.qty * pesanan.price
}))

console.log(totalpesanan)

const tutalpesanan = pesanan.map(pesanan => ({
  customer: pesanan.customer,
  total: pesanan.qty * pesanan.price
}))

console.log(tutalpesanan)

const qtylebih1 = pesanan.filter(pesanan => pesanan.qty > 1)

console.log(qtylebih1)


interface Book {
  id: number
  judul: string
  kategori: string
  harga: number
  stok: number
}

const books: Book[] = [
  { id: 1, judul: 'TS Dasar', kategori: 'Pemograman', harga: 150_000, stok: 10 },
  { id: 2, judul: 'NestJS Lanjutan', kategori: 'Web', harga: 200_000, stok: 5 },
  { id: 3, judul: 'Data Structures', kategori: 'Ilmu Komputer', harga: 180_000, stok: 8 },
]

const totalGudang = books.map(book => ({
  judul: book.judul,
  total: book.stok * book.harga
}))

console.log("Total Nilai Gudang:", totalGudang)

const totalgudang = books.reduce((prev, curr) => (curr.stok > prev.stok ? curr : prev))
totalgudang.stok += 10
console.log("Setelah Tambah Stok:", books)

const ringkas = books.map(book => `${book.judul} — Rp${book.harga} (Stok: ${book.stok})`)
console.log("Format Ringkas:", ringkas)

console.log("Daftar Judul Buku:")
books.forEach(book => console.log(book.judul))
