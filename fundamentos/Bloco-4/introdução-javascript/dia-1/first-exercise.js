// const myName = "Andrios"
// const birthCity = "Londrina"
// let birthYear = 1985
// console.log(myName)
// console.log(birthCity)
// console.log(1985)
// birthYear=2030
// console.log(birthYear)
// //birthCity =Campinas
// console.log(birthCity) //Erro porque não se pode mudar uma constante//
// //----------------------
// let movie="Avengers"; //string literal
// let score=10.89; //number literal
// let isValid = true; //boolean
// let name; //undefined
// let color=null; //redefinição
// //---------------------------
// // let patientId = 50;
// // let isEnrolled = true;
// // const patientInfo = {
// //   firstName: 'Ana',
// //   lastName: 'Santos',
// // };
// // const patientEmail = 'ana@email.com';

// // typeof patientId - number
// // typeof isEnrolled - boolean
// // typeof patientInfo - object
// // typeof patientEmail - string

// const 
// const base = 5;
// let height = 8;
// const area = base * height 
// console.log(area)
// const perimeter = base*2 + height*2
// console.log(perimeter)

// notaFinal <=80 && >=100 - Aprovada
// notaFinal <=80 && >=60 - Lista de espera
// notaFinal <60 && >=0 - Reprovado
// let notaFinal = 95;
// let grade = 67;
// let notaFinal = 45;

// if (grade >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!")
//   } else if (grade < 80 && grade >= 60) {
//     console.log("Você está na nossa lista de espera");
//   } else if (grade < 60) {
//     console.log("Você foi reprovada(o)")
//   }

  // const currentHour = 15;
  // let message = "";

//   if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
//   } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
//   } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
//   } else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!";
//   } else if (currentHour < 11 && currentHour < 4) {
//     message = "Hmmm, cheiro de café recém passado";
//   }
// console.log(message)



// let weekDay = "quarta-feira"

// if (weekDay === "segunda"){
//   console.log("trybe")
// }else {
//   console.log("folga")
// }

// console.log (2+2) === 4

// console.log(!(2+2))===4






let candidata = "aprovada";
switch (candidata){
  case "80":
  console.log("aprovada");
  break;

  case 60:
  console.log("lista de espera");
  break;

  case 50:
  console.log("reprovada")
  break;
}
console.log (candidata);