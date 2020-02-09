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
    
    public n : string;
    public imgUrl: string;
    public genere : Genere;
    public autor:Autor;
    constructor(n:string, imgUrl:string,genere:Genere, autor:Autor) {
        this.n=n;
        this.imgUrl=imgUrl;
        this.genere=genere;
        this.autor=autor;
    }
    
}
