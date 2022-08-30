Number.prototype.entre = function (inicio , fim ){
    return this >= inicio && this <= fim
    }

    const mostrarResultado = function(nota){
        if (nota.entre(9, 10)){
        console.log("excelente")    
         } else if (nota.entre(7 , 8.99)){
            console.log('passou')
         } else if (nota.entre(4 , 6.99)){
            console.log('recuperação')
         }else if (nota.entre(0 , 3.99)){
            console.log("reprovado")
         } else {
            console.log('consulte o professor')
         }
    }

    mostrarResultado(10)
    mostrarResultado(7)
    mostrarResultado(5)
    mostrarResultado(3)
    mostrarResultado(-1)