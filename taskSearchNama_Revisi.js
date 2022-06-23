function searchName(letter, limit) {
    const names = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    const namesMap = names.map(x => x.toLowerCase())
    const filt = namesMap.filter(x => x.includes(letter))
    const cut = filt.slice(0, limit)
    // const forEa = cut.forEach(x => x.charAt(0))
    return cut;
}

console.log(searchName("an", 3))