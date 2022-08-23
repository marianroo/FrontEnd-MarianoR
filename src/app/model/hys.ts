export class Hys {
    id? : number;
    nombreHys : string;
    descripcionHys : string;
    imgHys: string;
    porcentaje: number

    constructor(nombreHys: string, descripcionHys: string, imgHys: string,  porcentaje: number ){
        this.nombreHys = nombreHys;
        this.descripcionHys = descripcionHys;
        this.imgHys = imgHys;
        this.porcentaje = porcentaje;
    }
}
