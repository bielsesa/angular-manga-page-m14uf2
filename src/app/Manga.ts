import { Autor } from './Autor';


export const enum Genere{
    Action,
    Adventure,
    Comedy,
    Drama, 
    Fantasy,
    Magic, 
    Horror, 
    Mistery,
    Romance,
    Sci_fi

}
export class Manga {
    
    titol : string;
    imgUrl: string;
    genere : Genere;
    autor:Autor;
    constructor(titol:string, imgUrl:string,genere:Genere, autor:Autor) {
        this.titol=titol;
        this.imgUrl=imgUrl;
        this.genere=genere;
        this.autor=autor;
    }
    
}
