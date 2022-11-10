const meses = [
    { Janeiro: [] },
    { Fevereiro: [] },
    { Marco: [] },
    { Abril: [] },
    { Maio: [] },
    { Junho: [] },
    { Julho: [] },
    { Agosto: [] },
    { Setembro: [] },
    { Outubro: [] },
    { Novembro: [] },
    { Dezembro: [] },
    
]

   
    for(i=0; i<22; i++){
        meses[0].Janeiro[i] = Math.floor(Math.random() * 100)
        meses[1].Fevereiro[i] = Math.floor(Math.random() * 100)
        meses[2].Marco[i] = Math.floor(Math.random() * 100)
        meses[3].Abril[i] = Math.floor(Math.random() * 100)
        meses[4].Maio[i] = Math.floor(Math.random() * 100)
        meses[5].Junho[i] = Math.floor(Math.random() * 100)
        meses[6].Julho[i] = Math.floor(Math.random() * 100)
        meses[7].Agosto[i] = Math.floor(Math.random() * 100)
        meses[8].Setembro[i] = Math.floor(Math.random() * 100)
        meses[9].Outubro[i] = Math.floor(Math.random() * 100)
        meses[10].Novembro[i] = Math.floor(Math.random() * 100)
        meses[11].Dezembro[i] = Math.floor(Math.random() * 100)
}
     
// console.log(meses)

function filtraValoresBaixo(num){
     return num < 10
 }

   let mes1 =  meses[0].Janeiro.filter(filtraValoresBaixo)
   let mes2 =  meses[1].Fevereiro.filter(filtraValoresBaixo)
   let mes3 =  meses[2].Marco.filter(filtraValoresBaixo)
   let mes4 =  meses[3].Abril.filter(filtraValoresBaixo)
   let mes5 =  meses[4].Maio.filter(filtraValoresBaixo)
   let mes6 =  meses[5].Junho.filter(filtraValoresBaixo)
   let mes7 =  meses[6].Julho.filter(filtraValoresBaixo)
   let mes8 =  meses[7].Agosto.filter(filtraValoresBaixo)
   let mes9 =  meses[8].Setembro.filter(filtraValoresBaixo)
   let mes10 =  meses[9].Outubro.filter(filtraValoresBaixo)
   let mes11 =  meses[10].Novembro.filter(filtraValoresBaixo)
   let mes12 =  meses[11].Dezembro.filter(filtraValoresBaixo)
    



 const Baixo = [mes1,mes2,mes3,mes4,mes5,mes6,mes7,mes8,mes9,mes10,mes11,mes12]

 function filtraValoresBaixoAno(num){
    return num < 10
 }

 let valor = Baixo.filter(filtraValoresBaixoAno)
console.log("Faturamento Baixo do ano = " + valor)

function filtroValorAlto(num){
    return num > 85
}

  let mes1alto =  meses[0].Janeiro.filter(filtroValorAlto)
  let mes2alto =  meses[1].Fevereiro.filter(filtroValorAlto)
  let mes3alto =  meses[2].Marco.filter(filtroValorAlto)
  let mes4alto =  meses[3].Abril.filter(filtroValorAlto)
  let mes5alto =  meses[4].Maio.filter(filtroValorAlto)
  let mes6alto =  meses[5].Junho.filter(filtroValorAlto)
  let mes7alto =  meses[6].Julho.filter(filtroValorAlto)
  let mes8alto =  meses[7].Agosto.filter(filtroValorAlto)
  let mes9alto =  meses[8].Setembro.filter(filtroValorAlto)
  let mes10alto =  meses[9].Outubro.filter(filtroValorAlto)
  let mes11alto =  meses[10].Novembro.filter(filtroValorAlto)
  let mes12alto =  meses[11].Dezembro.filter(filtroValorAlto)


  const alto = [mes1alto,mes2alto,mes3alto,mes4alto,mes5alto,mes6alto,mes7alto,mes8alto,mes9alto,mes10alto,mes11alto,mes12alto]

 function filtraValoresAlto(num){
    return num > 85
 }

 let valorAlto = alto.filter(filtraValoresAlto)
console.log("Faturamento Alto do ano = " + valorAlto)


 const somaTodos = meses[3].Abril.reduce(
 (antes, depois) => antes + depois,
   0
 );
  
  let media = somaTodos /meses.length
  console.log("Media usando Abril como Referencia = " + media.toFixed(2));
  console.log("Soma de todos os dias de Abril = " + somaTodos)