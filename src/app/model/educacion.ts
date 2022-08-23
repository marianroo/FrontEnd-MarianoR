export class Educacion {
    id? : number;
    nombreEduc : string;
    descripcionEduc : string;
    imgEduc: string;

    constructor(nombreEduc: string, descripcionEduc: string, imgEduc: string ){
        this.nombreEduc = nombreEduc;
        this.descripcionEduc = descripcionEduc;
        this.imgEduc = imgEduc;
    }
}
