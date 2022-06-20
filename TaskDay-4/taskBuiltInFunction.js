// 10 Built In Function in Javascript

// 1. Slice (Untuk memotong atau menghapus array dengan menetukan index ke berapa)
// contoh:
const skill = ['PHP', 'javascript', 'html']

console.log(skill.slice(2))


// 2. Shift (Untuk menghapus elemen pertama pada array)
// contoh:

const skill1 = ['PHP', 'javascript', 'html', 'Golang', 'Python', 'Java', 'C#', 'C++', 'Ruby']

const shift = skill1.shift();

console.log(skill1)

// 3. Find (Untuk mengembalikan elemen pertama dalam array yang memenuhi fungsi yang diminta)
// contoh:

const nilaiRand = [5, 9, 14, 162, 45, 67]

const find = nilaiRand.find(element => element > 10)

console.log(find)

// 4. findIndex (Untuk mengembalikan elemen pertama dalam array yang memenuhi fungsi dengan syarat tertentu)
// contoh: 
const numm = [11, 156, 120, 56, 82, 34]
const srcNumm = (element) => element == 120;

console.log(numm.findIndex(srcNumm))

// 5. Flat (Untuk menggabungkan array baru yang ada dalam suatu array)
// contoh: 
const arr = [2, 4, 6, [12, 14, 20]]
const jArr = arr.flat()

console.log(jArr)

// 6. Foreach (Untuk menampilkan perulangan isi dalam array)
// contoh: 
const array = [1, 2, 3, 4, 5]
array.forEach(
    e => console.log(e)
)

// 7. From (Untuk menjadikan kata sebagai array)
// contoh:
console.log(Array.from('fazztrack'));

// 8. Includes (Untuk menentukan apakah sebuah array memiliki nilai tertentu dan mengembalikan nilai boolean)
// contoh:
const mhs = ['Carol', 'Diana', 'Faith']
const dataMhs = mhs.includes('Diana')

console.log(dataMhs)

// 9. IndexOf (Untuk menentukan index pada array)
// contoh : 
const hobi = ['Learn Code', 'Sport', 'Drawing', 'Reading']

const inHobi = hobi.indexOf('Reading')

console.log(inHobi)

// 10. Map (Untuk menghasilkan nilai array baru dari array yang lama)
// contoh: 
const num = [3, 5, 7, 9, 11, 13, 15]
const mapNum = num.map(x => x - 1)

console.log(mapNum)
