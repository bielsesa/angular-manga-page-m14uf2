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
    
    static genereToString (genere: Genere) : string {
        switch(genere) {
            case Genere.Action:
                return 'Action';
            case Genere.Adventure:
                return 'Adventure';
            case Genere.Comedy:
                return 'Comedy';
            case Genere.Drama:
                return 'Drama';
            case Genere.Fantasy:
                return 'Fantasy';
            case Genere.Magic:
                return 'Magic';
            case Genere.Horror:
                return 'Horror';
            case Genere.Mistery:
                return 'Mistery';
            case Genere.Romance:
                return 'Romance';
            case Genere.Sci_fi:
                return 'Sci-Fi';
        }
    }
}
