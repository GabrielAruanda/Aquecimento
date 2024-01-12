// let celular = {
//     Modelo: "Iphone Xr",
//     Cor: "Preto",
//     Marca: "Aplle",
// }

// console.log(celular.Modelo, celular.Cor, celular.Marca)
// console.log(`O modelo do celular é ${celular.Modelo}`)

// user ={
//     digaoi: function(){
//         alert("Celular carregado!");
//         console.log("Celular carregado!")
//     }
// }

// user.digaoi()

// user ={
//     digaoi(){
//         alert("celular carregado")
//     }
// }

// let user = {
//     nome: "John",
//     age: 30,
//     sayHi(){
//         alert(user.nome)
//     }
// }

// console.log(user.nome)

// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     operator: null,
//     waitingForSecondOperand: false,
// };

// function updateDisplay() {
//     document.getElementById('display').value = calculator.displayValue;
// }

// function clearDisplay() {
//     calculator.displayValue = '0';
//     calculator.firstOperand = null;
//     calculator.operator = null;
//     calculator.waitingForSecondOperand = false;
//     updateDisplay();
// }

// function appendValue(digit) {
//     if (calculator.waitingForSecondOperand) {
//         calculator.displayValue = digit;
//         calculator.waitingForSecondOperand = false;
//     } else {
//         calculator.displayValue =
//             calculator.displayValue === '0' ? digit : calculator.displayValue + digit;
//     }
//     updateDisplay();
// }

// function performOperation(nextOperator) {
//     const inputValue = parseFloat(calculator.displayValue);

//     if (calculator.operator && calculator.waitingForSecondOperand) {
//         calculator.operator = nextOperator;
//         return;
//     }

//     if (calculator.firstOperand === null) {
//         calculator.firstOperand = inputValue;
//     } else if (calculator.operator) {
//         const result = calculate(calculator.firstOperand, inputValue, calculator.operator);

//         calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//         calculator.firstOperand = result;
//     }

//     calculator.operator = nextOperator;
//     calculator.waitingForSecondOperand = true;
//     updateDisplay();
// }

// function calculate(firstOperand, secondOperand, operator) {
//     switch (operator) {
//         case '+':
//             return firstOperand + secondOperand;
//         case '-':
//             return firstOperand - secondOperand;
//         case '*':
//             return firstOperand * secondOperand;
//         case '/':
//             return firstOperand / secondOperand;
//         default:
//             return secondOperand;
//     }
// }

// function calculateResult() {
//     const inputValue = parseFloat(calculator.displayValue);

//     if (calculator.operator && !calculator.waitingForSecondOperand) {
//         const result = calculate(calculator.firstOperand, inputValue, calculator.operator);

//         calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//         calculator.firstOperand = result;
//         calculator.operator = null;
//         calculator.waitingForSecondOperand = false;
//         updateDisplay();
//     }
// }

class cliente{
    nome;
    cpf;
    
}
class ContaCorrente{
    agencia;
    saldo
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
    depositar(valor){
        if(valor>0){
          this.saldo += valor
        }
      }
}


const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "gabriel"
cliente1.cpf = 11122233309


cliente2.nome = "aruanda"
cliente2.cpf = 88822233309



const contaCorrentegabriel = new ContaCorrente();
contaCorrentegabriel.saldo = 0;
contaCorrentegabriel.agencia = 1001



console.log(contaCorrentegabriel.saldo)
contaCorrentegabriel.saldo = 100;
console.log(contaCorrentegabriel.saldo)
contaCorrentegabriel.sacar(50)





console.log(contaCorrentegabriel)
console.log(cliente1, cliente2)