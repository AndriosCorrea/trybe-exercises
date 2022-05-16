let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index +=1){
//     console.log (numbers [index]);
// }


//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for (let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
    
// }
// console.log(soma);
//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0;
// for (let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
      
// }
// let media = soma / numbers.length;
// console.log(media);


// - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   resultado += numbers[index];
// }

// resultado = resultado / numbers.length;

// if (resultado > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }
// 5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorValor = numbers[0];
// for(let index = 1; index < numbers.length; index +=1){
//     if (numbers[index] > maiorValor) {
//         maiorValor = numbers[index];
//       }

// }
// console.log(maiorValor);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" ;


// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let menorValor = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < menorValor) {
//     menorValor = numbers[index];
//   }
// }

// console.log(menorValor);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let resultado = [];

// for (let index = 1; index <= 25; index += 1) {
//   resultado.push(index);
// }

// console.log(resultado);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };