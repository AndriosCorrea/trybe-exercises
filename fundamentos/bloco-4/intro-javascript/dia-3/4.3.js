// // 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// 1- criar uma variável para guardar o resultado do fatorial
//  2- multiplicar o numero 10 pelos seus antecessores
// 3-criar uma let com o array de 10 à 1
// 3-imprimir o resultado

// let fatorial = [10,9,8,7,6,5,4,3,2,1];


// for (let index = 1; index < fatorial.length; index += 1) {
//     let resultadoFatorial = fatorial[0] * fatorial[index -1];
//     console.log(resultadoFatorial)
// }

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// 1 criar uma variável, para guardar a nova palavra
// 2 percorrer a palavra
// 3 inverter a palavra
// let word = 'tryber';
// let newWord = '';
// for (let index = 0; index < word.length; index +=1){
//     newWord += word[word.length - 1 - index] 

// }
// console.log(newWord);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// 1 percorrer o array com for
// 2 criar uma variavel apra guardar a menor palavra e outra para maior palavra

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

//     for (let index = 0; index < array.length; index += 1) {
//         if (array[index].length > maiorPalavra.length) {
//          maiorPalavra = array[index];
//         }
//       }
      
//       for (let index = 0; index < array.length; index += 1) {
//         if (array[index].length < menorPalavra.length) {
//          menorPalavra= array[index];
//         }
//       }
      
//       console.log(maiorPalavra);
//       console.log(menorPalavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
// 1 -  n que divide por n e por 1.
// 2 - criar uma variável para guardar o resultado do maior numero primo
// 3 - percorre uma lista de numeros de 0 -50
// 4 - verificar quais numeros são primos]
// 5 - verificar qual é o maior número primo

// let maiorNumero = 0;
// for (let index = 0; index <= 50; index += 1){
//     if (index / index && index / 1);
//     // NÃO SEUBE RESOLVER ESSE :(
// }

// 5 -  Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine += symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// };

// 6 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0 ; lineIndex < n; lineIndex += 1) {
//   inputLine += symbol;
//   console.log(inputLine);
// };

