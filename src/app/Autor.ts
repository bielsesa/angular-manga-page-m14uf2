
export class Autor {
    
    nom : string;
    cognom : string;
    data_naixement : Date;
    pais : string;

    constructor(nom:string, cognom:string, data_naixement:Date, pais:string) {
        this.nom=nom;
        this.cognom=cognom;
        this.data_naixement=data_naixement;
        this.pais=pais;
    }
    
}
