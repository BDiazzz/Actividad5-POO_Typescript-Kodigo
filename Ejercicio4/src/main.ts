import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import Cuenta from './Cuenta';

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

// Crear una cuenta con los datos iniciales
const miCuenta = new Cuenta('Carlos López', 10, 'Ahorro', '1234567890');

// Probar métodos
miCuenta.mostrarDatos();
miCuenta.depositar();
miCuenta.retirar(3);   // Intento de retiro menor a $5.00
miCuenta.retirar(6);   // Retiro válido
miCuenta.retirar(10);  // Intento de retirar más de lo que queda
