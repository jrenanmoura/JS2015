 const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4])// sem o valor undefined
valores[4] = 10 //adicionado a const
console.log(valores)
console.log(valores. length)//mostra quantos indices na array

valores.push({is: 3}, false, null, 'teste')// pode misturas tipos
console.log(valores)

console.log(valores.pop())//saca o ultimo exclui
delete valores[0]
console.log(valores)

console.log(typeof valores)