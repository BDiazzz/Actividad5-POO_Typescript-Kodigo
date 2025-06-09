import { Persona } from "./Persona";

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
  private sueldo: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = 0;
  }

  // Método para establecer el sueldo
  public cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  // Método para imprimir el sueldo
  public imprimirSueldo(): void {
    console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
  }

  // Implementación del método abstracto
  public mostrarDatos(): void {
    console.log('--- Datos del Empleado ---');
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}

export default Empleado;
