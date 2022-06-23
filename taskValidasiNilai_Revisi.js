function seleksiNilai(dataAwal, dataAkhir, dataArray) {
    if (dataAkhir > dataAwal) {
        if (dataArray.length >= 5) {
            const sortDataArr = dataArray.sort((a, b) => (a - b))
            const filt = sortDataArr.filter((e) => e >= dataAwal && e <= dataAkhir)
            return filt;
        }
        else {
            return 'jumlah angka dalam data Array harus lebih dari 5'
        }
    }
    else {
        return 'nilai akhir harus lebih besar dari nilai awal'
    }
}


console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))