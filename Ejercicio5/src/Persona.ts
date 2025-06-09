// Clase abstracta
export abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  // Método que verifica si es mayor de edad
  public verificarMayorEdad(): void {
    if (this.edad >= 18) {
      console.log('Es mayor de edad.');
    } else {
      console.log('No es mayor de edad.');
    }
  }

  // Método abstracto para mostrar los datos
  public abstract mostrarDatos(): void;
}

