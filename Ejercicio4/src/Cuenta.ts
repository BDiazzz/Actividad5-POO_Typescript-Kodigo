class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  // Método para depositar dinero
  public depositar(): void {
    if (this.cantidad < 5) {
      console.log('El valor a depositar debe ser mayor a $5.00');
    } else {
      console.log(`Se ha depositado correctamente $${this.cantidad.toFixed(2)}`);
    }
  }

  // Método para retirar dinero
  public retirar(valor: number): void {
    if (this.cantidad <= 0) {
      console.log('No hay nada en la cuenta.');
      return;
    }

    if (valor < 5) {
      console.log('Debe retirar al menos $5.00');
      return;
    }

    if (valor > this.cantidad) {
      console.log('Fondos insuficientes.');
      return;
    }

    this.cantidad -= valor;
    console.log(`Ha retirado $${valor.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`);
  }

  // Método para mostrar los datos de la cuenta
  public mostrarDatos(): void {
    console.log('--- Datos de la Cuenta ---');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
    console.log(`Número de Cuenta: ${this.numeroCuenta}`);
  }
}

export default Cuenta;
