import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Calculadora } from './calculadora.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const calc = new Calculadora();

console.log('Suma: ', calc.sumar(5, 3));         // 8
console.log('Resta: ', calc.restar(10, 4));      // 6
console.log('Multiplicación: ', calc.multiplicar(6, 7)); // 42
console.log('División: ', calc.dividir(20, 5));  // 4
console.log('Potencia: ', calc.potencia(2, 3));  // 8
console.log('Factorial: ', calc.factorial(5));   // 120