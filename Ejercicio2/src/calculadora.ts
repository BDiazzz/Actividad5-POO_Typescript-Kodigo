export class Calculadora {

  // Método para sumar dos números
  public sumar(a: number, b: number): number {
    return a + b;
  }

  // Método para restar dos números
  public restar(a: number, b: number): number {
    return a - b;
  }

  // Método para multiplicar dos números
  public multiplicar(a: number, b: number): number {
    return a * b;
  }

  // Método para dividir dos números
  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero.");
    }
    return a / b;
  }

  // Método para calcular la potencia
  public potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // Método para calcular el factorial de un número
  public factorial(n: number): number {
    if (n < 0) {
      throw new Error("No se puede calcular el factorial de un número negativo.");
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

