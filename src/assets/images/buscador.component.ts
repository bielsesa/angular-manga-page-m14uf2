import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public animes: Array<any>;
  private saludo: string;
  lado = 4;
  constructor() {

    this.animes = [
      { nombre: "Anohana", genre: "Coming-of-age", creator: "Super Peace Busters", imgUrl: "../assets/images/anohana.jpg", description: "Anohana: The Flower We Saw That Day (あの日見た花の名前を僕達はまだ知らない。, Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai., lit. We Still Dont Know the Name of the Flower We Saw That Day.) is an 11 - episode 2011 Japanese anime television series created by Super Peace Busters(超平和バスターズ, Chō Heiwa Basutāzu), an artist collective consisting of director Tatsuyuki Nagai, screenwriter Mari Okada, and character designer Masayoshi Tanaka.The anime was produced by A - 1 Pictures and aired in Fuji TVs noitamina block between April and June 2011. It is currently licensed in North America by Aniplex of America. " },
      { nombre: "Shingeki no kyojin", genre: "Action", creator: "Hajime Isayama", imgUrl: "../assets/images/shingeki.jpg", description: "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. The Attack Titan) is a Japanese manga series both written and illustrated by Hajime Isayama. It is set in a fantasy world where humanity lives within territories surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans. " },
      { nombre: "Your lie in April", genre: ["Romantic", "Drama"], creator: "Naoshi Arakawa", imgUrl: "../assets/images/yourlie.jpg", description: "Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘) or just simply Kimiuso, is a Japanese manga series written and illustrated by Naoshi Arakawa. The series was serialized in Kodansha's Monthly Shōnen Magazine from April 2011 to May 2015. An anime television series adaptation by A-1 Pictures aired from October 2014 to March 2015 on Fuji TV's Noitamina block.A live-action film adaptation of the same name was released in September 2016." },
    ];

    this.saludo = "saludos!!";
  }

  ngOnInit() {
  }

  getAnimes() {
    return this.animes;
  }
  getSaludo() {
    return this.saludo;
  }

  filtrar() {
    var resultado2: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("resultado");
    resultado2.innerHTML = '';
    var formulario: HTMLInputElement = <HTMLInputElement>document.getElementById("formulario");
    const texto = formulario.value.toLowerCase();


    this.animes.forEach(function (value) {
      let nombre = value.nombre.toLowerCase();
      if (nombre.indexOf(texto) > -1 && texto != "") {
        resultado2.innerHTML += `
        <div class="carousel-inner">
            <h3>List of animes that starts with ${texto}</h3>
            <div class="carousel-item active">
                <img src="${value.imgUrl}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${value.nombre}</h5>
                    <p>${value.description}</p>
                </div>
            </div>
        </div>
        `;
      }
    });

    if (resultado2.innerHTML === '') {
      resultado2.innerHTML += `<h3>Anime no encontrado</h3>`;
    }
  }
}
