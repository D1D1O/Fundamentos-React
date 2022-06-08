function gerarNumeros(qtde){

  const qtdTot = qtde;
  let inicia = 0;
  let result = [];
  var valor;

  const min = 0;


   rd => Math.floor(Math.random() * (700 - 10 + 1)) + 10;


  while (qtde > inicia){
      inicia++
      result.push(Math.floor(Math.random() * (700 - 10 + 1)) + 10)
  }
  result = result.sort()
  return result
}

console.log(gerarNumeros(7))