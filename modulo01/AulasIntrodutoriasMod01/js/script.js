console.log("Hello World!");

var a = 7;
var b = 6;



if(a > b){
  console.log('A é maior que B');
}else{
  if(a === b){
    console.log('A e B são iguais');
  }else{
    console.log('B é maior que A');
  }
}

var r = '';

switch (r) {
  case 1: r= 'Domingo';break;
  case 2: r= 'Segunda';break;
  case 3: r= 'Terça';break;
  case 4: r= 'Quarta';break;
  case 5: r= 'Quinta';break;
  case 6: r= 'Sexta';break;
  case 7: r= 'Sábado';break;

  default: r = 'Dia Inválido';
}

console.log(r);

//operador ternario
var c = 10;
var d = 12;

var resposta = c > d ? 'maior': c < d ? 'menor' : 'igual';

console.log(resposta);

//somatorio com while
var numeroAtual = 1;
var somatorio = 0;

while(numeroAtual <= 10){
  somatorio += numeroAtual;
  numeroAtual ++;
}

console.log('A soma é ' + somatorio);

//somatorio com for

numero = 0;

for(a = 1;a < 10;a++){
    numero = numero + 1;    
}

console.log(numero);


