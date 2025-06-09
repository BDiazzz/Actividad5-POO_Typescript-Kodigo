export class Cancion {
    //atributos
    titulo : string;
    genero : string;
    autor: string;

    //constructor de clase que solo acepta como parametros titulo y genero
    constructor(titulo: string, genero: string){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""
    }

    //obtener el valor de autor
    public getAutor(): string{
        return this.autor;
    }

    //asignar el valor a autor
    public setAutor(autor: string): void{
        this.autor = autor;
    }

    //imprimir datos de la cancion
    public imprimirCancion(): void{
        console.log("<--------Detalles de la canción-------->");
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }

}