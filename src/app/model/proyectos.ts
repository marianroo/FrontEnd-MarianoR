export class Proyectos {
    id? : number;
    nombrePro : string;
    descripcionPro : string;
    imgPro: string;
    urlPro: string;

    constructor(nombrePro: string, descripcionPro: string, imgPro: string, urlPro: string ){
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.imgPro = imgPro;
        this.urlPro = urlPro;
    }
}
