export class FileItem {
    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    //para ver si el archivo se sube o no
    public estaSubiendo: boolean;
    public progreso: number;

    constructor(archivo: File) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
    }
}