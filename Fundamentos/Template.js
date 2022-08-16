const nome = 'rebeca'
const concatenação = 'Olá ' + nome + '!'
const template =`
    Olá
    ${nome}`
console.log(concatenação, template)

// expressões....
console.log(`1 + 1 = ${1 + 1}`)// não é aspas shift + acento crase

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)

//template string `${}`