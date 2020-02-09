import { Component, OnInit } from '@angular/core';
import { Manga, Genere } from '../classes/Manga';
import { Autor } from '../classes/Autor';
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  public animes: Array<any>;
  public llistaMangas: Array<any>;
  public alumnes: Array<any>;
  public mmm: Array<any>;
  public llistaMangasJSObject: Array<any>;
  public llistaMangasJSON: Array<any>;
  constructor() {
    this.llistaMangas = [
      new Manga("Attack on titans", "../assets/images/attackontitans.jpg", Genere.Action, new Autor("Hajime", "Isayama", new Date(2009, 9, 9), "Japon")),
      new Manga("Eureka seven", "../assets/images/eurekaseven.jpg", Genere.Sci_fi, new Autor("Jinsei", "Kataoka", new Date(2005, 4, 17), "Jeq")),
      new Manga("The promised neverland", "../assets/images/thepromisedneverland.jpg", Genere.Adventure, new Autor("Kaiu", "Shirai", new Date(2019, 10, 1), "Japon")),
      new Manga("Blue exorcist", "../assets/images/blueexorcist.jpg", Genere.Fantasy, new Autor("	Kazue", "Kato", new Date(2009, 4, 4), "Japon"))];

    this.llistaMangasJSObject = [
      { titol: "Attack on titans", imgUrl: "../assets/images/attackontitans.jpg", genere: Genere.Action, autor_nom: "Hajime", autor_cognom: "Isayama", data: new Date(2009, 9, 9), autor_pais: "Japon" },
      { titol: "Eureka seven", imgUrl: "../assets/images/eurekaseven.jpg", genere: Genere.Sci_fi, autor_nom: "Jinsei", autor_cognom: "Kataoka", data: new Date(2005, 4, 17), autor_pais: "Japon" },
      { titol: "The promised neverland", imgUrl: "../assets/images/thepromisedneverland.jpg", genere: Genere.Adventure, autor_nom: "Kaiu", autor_cognom: "Shirai", data: new Date(2019, 10, 1), autor_pais: "Japon" },
      { titol: "Blue exorcist", imgUrl: "../assets/images/blueexorcist.jpg", genere: Genere.Fantasy, autor_nom: "	Kazue", autor_cognom: "Kato", data: new Date(2009, 4, 4), autor_pais: "Japon" }];

    this.animes = [
      { titol: "Anohana", genre: "Coming-of-age", creator: "Super Peace Busters", imgUrl: "../assets/images/anohana.jpg", description: "Anohana: The Flower We Saw That Day (あの日見た花の名前を僕達はまだ知らない。, Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai., lit. We Still Dont Know the Name of the Flower We Saw That Day.) is an 11 - episode 2011 Japanese anime television series created by Super Peace Busters(超平和バスターズ, Chō Heiwa Basutāzu), an artist collective consisting of director Tatsuyuki Nagai, screenwriter Mari Okada, and character designer Masayoshi Tanaka.The anime was produced by A - 1 Pictures and aired in Fuji TVs noitamina block between April and June 2011. It is currently licensed in North America by Aniplex of America. " },
      { titol: "Shingeki no kyojin", genre: "Action", creator: "Hajime Isayama", imgUrl: "../assets/images/shingeki.jpg", description: "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. The Attack Titan) is a Japanese manga series both written and illustrated by Hajime Isayama. It is set in a fantasy world where humanity lives within territories surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans. " },
      { titol: "Your lie in April", genre: ["Romantic", "Drama"], creator: "Naoshi Arakawa", imgUrl: "../assets/images/yourlie.jpg", description: "Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘) or just simply Kimiuso, is a Japanese manga series written and illustrated by Naoshi Arakawa. The series was serialized in Kodansha's Monthly Shōnen Magazine from April 2011 to May 2015. An anime television series adaptation by A-1 Pictures aired from October 2014 to March 2015 on Fuji TV's Noitamina block.A live-action film adaptation of the same name was released in September 2016." },
    ];
    this.alumnes = [
      { n: 'Sergi', i: 11 },
      { n: 'Joan', i: 12, },
      { n: 'Anna', i: 13 },
      { n: 'Jordi', i: 14 },
      { n: 'Guille', i: 15 },

    ];

    this.mmm = [
      { i: 11, n: 'Attack on titans' },
      { i: 12, n: 'Eureka seven' },
      { i: 13, n: 'The promised neverland' },
      { i: 14, n: 'Blue exorcist' },

    ];

    this.llistaMangasJSON = [
      { n: "Attack on titans", imgUrl: "../assets/images/attackontitans.jpg" },
      { n: "Eureka seven", imgUrl: "../assets/images/eurekaseven.jpg", },
      { n: "The promised neverland", imgUrl: "../assets/images/thepromisedneverland.jpg", },
      { n: "Blue exorcist", imgUrl: "../assets/images/blueexorcist.jpg" },];
  }





  ngOnInit() {
  }

  getLlistaMangas() {
    return this.llistaMangas;
  }


  filtrar() {
    var resultado: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("resultado");
    var tipoSelect: HTMLInputElement = <HTMLInputElement>document.getElementById("tipoSelect");
    var text = tipoSelect.value;//valor del tipo de select
    //alert(text);
    resultado.innerHTML = '';
    var formulario: HTMLInputElement = <HTMLInputElement>document.getElementById("formulario");
    const texto = formulario.value.toLowerCase();

    resultado.innerHTML += `
    <table class="table table-striped">
        <thead class="thead-dark">
            <tr>
                
                <th scope="col">Buscador animes</th>
            </tr>
        <tbody>
            <tr">
            `;
    this.llistaMangas.forEach(function (value) {
      var nombre;
      if (text == "nom") {
        nombre = value.n.toLowerCase();
        if (nombre.indexOf(texto) > -1 && texto != "") {
          resultado.innerHTML += `
          <td>
              <h3>${value.n}</h3> <img src="${value.imgUrl}" width="330px" heigth="550px"> 
          </td>
          `;
        }
      }
      if (text == "genere") {//no funciona
        nombre = value.genere.toLowerCase();
        if (nombre.indexOf(texto) > -1 && texto != "") {
          resultado.innerHTML += `
          <td>
              <h3>${value.genere}</h3> <img src="${value.imgUrl}" width="330px" heigth="550px"> 
          </td>
          `;
        }
      }
      if (text == "autor") {
        nombre = value.autor.nom.toLowerCase();
        if (nombre.indexOf(texto) > -1 && texto != "") {
          resultado.innerHTML += `
          <td>
              <h3>${value.autor.nom} ${value.autor.cognom}</h3> <img src="${value.imgUrl}" width="330px" heigth="550px"> 
          </td>
          `;
        }
      }
      //cambiando las propiedades de value podemos elegir que tipo de busqueda hacer
      
    });
    resultado.innerHTML += `
    </tr>
    </tbody>
    </table>`;


    if (resultado.innerHTML === '') {
      resultado.innerHTML += `<h3>Anime no encontrado</h3>`;
    }
  }

}
