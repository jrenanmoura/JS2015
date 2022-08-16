let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // mostra objeto

produto.preco = 3.50 // acrescentando ao objeto
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // bolean para false !!
//delete produto.preco // usar para apagar em vez de undefined
console.log(produto) //undefined

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)


