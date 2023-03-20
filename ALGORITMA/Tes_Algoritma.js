/* 
Saya kerjakan soal algoritma ini menggunakan javascript, karena saya lebih familiar dengan javascript daripada bahasa pemrograman lainnya.
*/

/* 
#Soal nomor 1
Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
*/

function reversedStringKeepTheNumberInPlace(str) {
  // Langkah pertama saya memisahkan dulu alfabet dan angka menggunakan regex
  const alphabet = str
    .match(/[a-zA-Z]+/)[0]
    .split('')
    .reverse()
    .join('')
  const number = str.match(/\d+/)[0]
  // Langkah kedua saya menggabungkan kembali alfabet dan angka
  return alphabet + number
}

// Untuk mengecek hasilnya bisa menggunakan console Ninja
console.log(reversedStringKeepTheNumberInPlace('NEGIE1'))

/* 
#Soal Nomor 2
Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character

*/

function longest(sentence) {
  // Langkah pertama saya memisahan kalimat menjadi array
  const words = sentence.split(' ')
  // Menggunakan fungsi bawaan sort untuk mengurutkan berdasarkan panjang kata
  // untuk [0] kenapa saya gunakan agar nilai yang dikembalian langsung berupa string
  const sortedWords = words.sort((a, b) => b.length - a.length)[0]
  // Langkah terakhir saya menggabungkan kembali kata dan panjang kata
  // dengan memformat string untuk menghasilkan output kata beserta panjangnyal
  const result = `${sortedWords}: ${sortedWords.length} character`
  return result
}

console.log(longest('Saya sangat senang mengerjakan soal algoritma'))

/*
#Soal Nomor 3
Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

*/

function findWordOccurrences(input, query) {
  // Langkah pertama membuat variable untuk menyimpan summary dari hasil pencarian
  let summary = ''

  // Langkah kedua saya menggunakan fungsi map untuk mengubah array query menjadi array yang berisi jumlah kemunculan kata pada array input, kemudian saya melakukan penyaringan untuk mendapatkan nilai yang sama dengan kata yang sedang di iterasi
  const occurrences = query.map((word) => {
    let count = input.filter((inputWord) => inputWord === word).length
    summary += `${word} ada ${count}, `

    return count
  })

  // Langkah terakhir saya mengembalikan nilai array yang berisi jumlah kemunculan kata pada array input, dan summary dari hasil pencarian

  return `[${occurrences}] ${summary}`
}

const INPUT = ['xc', 'dz', 'bbb', 'dz']
const QUERY = ['bbb', 'ac', 'dz']
const occurrences = findWordOccurrences(INPUT, QUERY)
console.log(occurrences)

/*
#Soal Nomor 4
Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:


Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3

*/

function sumDecrementDiagonals(matrix) {
  // untuk fungsi ini saya berfikir menggunakan reduce,
  // karena reduce bisa mengakumulasi nilai dari array yang diiterasi
  // pada setiap iterasi saya mengakumulasi sum dengan nilai dari panjang matrix dikurangi 1 (agar sesuai indexing array) dikurangi nilai index iterasi.
  // nilai jumlah akhir tersimpan pada variable sum yang saya kembalikan
  // fungsi rumit ini dibantu oleh Github Copilot
  return matrix.reduce((sum, row, i) => sum + row[matrix.length - 1 - i], 0)
}

const sum = sumDecrementDiagonals([
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
])
console.log(sum) //
