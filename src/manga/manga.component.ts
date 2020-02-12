import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { Manga, Genere } from '../classes/Manga';
import { Autor } from '../classes/Autor';
import { PreviewComponent } from 'preview/preview.component';
import { PreviewDirective } from 'app/pv.directive';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit, OnDestroy {

  @ViewChild(PreviewDirective, { static: true }) previewContainer: PreviewDirective;

  public animes: Array<any>;
  public llistaMangas: Array<any>;
  public mmm: Array<any>;
  public llistaMangasJSObject: Array<any>;
  public llistaMangasJSON: Array<any>;
  private subs: Subscription[] = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.llistaMangas = [
      new Manga("Attack on titans", "../assets/images/attackontitans.jpg", Genere.Action, new Autor("Hajime", "Isayama", new Date(2009, 9, 9), "Japó")),
      new Manga("Eureka seven", "../assets/images/eurekaseven.jpg", Genere.Sci_fi, new Autor("Jinsei", "Kataoka", new Date(2005, 4, 17), "Japó")),
      new Manga("The promised neverland", "../assets/images/thepromisedneverland.jpg", Genere.Adventure, new Autor("Kaiu", "Shirai", new Date(2019, 10, 1), "Japó")),
      new Manga("Blue exorcist", "../assets/images/blueexorcist.jpg", Genere.Fantasy, new Autor("Kazue", "Kato", new Date(2009, 4, 4), "Japó")),
      new Manga("Evangelion", "../assets/images/evangelion.jpg", Genere.Sci_fi, new Autor("Hideaki", "Anno", new Date(1995, 10, 4), "Japó")),
      new Manga("Tokyo Ghoul", "../assets/images/tokyoghoul.jpg", Genere.Horror, new Autor("Sui", "Ishida", new Date(2011, 9, 18), "Japó")),
      new Manga("Boku no hero", "../assets/images/bokunohero.jpg", Genere.Action, new Autor("Kohei", "Horikoshi", new Date(2014, 7, 7), "Japó")),
      new Manga("Sword art online", "../assets/images/sao.jpg", Genere.Sci_fi, new Autor("Sui", "Ishida", new Date(2013, 12, 31), "Japó")),
      new Manga("Berserk", "../assets/images/berserk.jpg", Genere.Magic, new Autor("Kentaro", "Miuda", new Date(1997, 10, 7), "Japó")),
      new Manga("Detective Conan", "../assets/images/conan.jpg", Genere.Action, new Autor("Gosho", "Aoyama", new Date(1994, 1, 19), "Japó")),
      new Manga("One punch man", "../assets/images/opm.jpg", Genere.Action, new Autor("One", "-", new Date(2009, 7, 3), "Japó")),
      new Manga("Dragon Ball", "../assets/images/db.jpeg", Genere.Action, new Autor("Akira", "Toruyama", new Date(1984, 11, 20), "Japó"))
    ];

    this.llistaMangasJSObject = [
      { titol: "Attack on titans", imgUrl: "../assets/images/attackontitans.jpg", genere: Genere.Action, autor_nom: "Hajime", autor_cognom: "Isayama", data: new Date(2009, 9, 9), autor_pais: "Japó" },
      { titol: "Eureka seven", imgUrl: "../assets/images/eurekaseven.jpg", genere: Genere.Sci_fi, autor_nom: "Jinsei", autor_cognom: "Kataoka", data: new Date(2005, 4, 17), autor_pais: "Japó" },
      { titol: "The promised neverland", imgUrl: "../assets/images/thepromisedneverland.jpg", genere: Genere.Adventure, autor_nom: "Kaiu", autor_cognom: "Shirai", data: new Date(2019, 10, 1), autor_pais: "Japó" },
      { titol: "Blue exorcist", imgUrl: "../assets/images/blueexorcist.jpg", genere: Genere.Fantasy, autor_nom: "	Kazue", autor_cognom: "Kato", data: new Date(2009, 4, 4), autor_pais: "Japó" }];

    this.animes = [
      { titol: "Anohana", genre: "Coming-of-age", creator: "Super Peace Busters", imgUrl: "../assets/images/anohana.jpg", description: "Anohana: The Flower We Saw That Day (あの日見た花の名前を僕達はまだ知らない。, Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai., lit. We Still Dont Know the Name of the Flower We Saw That Day.) is an 11 - episode 2011 Japanese anime television series created by Super Peace Busters(超平和バスターズ, Chō Heiwa Basutāzu), an artist collective consisting of director Tatsuyuki Nagai, screenwriter Mari Okada, and character designer Masayoshi Tanaka.The anime was produced by A - 1 Pictures and aired in Fuji TVs noitamina block between April and June 2011. It is currently licensed in North America by Aniplex of America. " },
      { titol: "Shingeki no kyojin", genre: "Action", creator: "Hajime Isayama", imgUrl: "../assets/images/shingeki.jpg", description: "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. The Attack Titan) is a Japanese manga series both written and illustrated by Hajime Isayama. It is set in a fantasy world where humanity lives within territories surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans. " },
      { titol: "Your lie in April", genre: ["Romantic", "Drama"], creator: "Naoshi Arakawa", imgUrl: "../assets/images/yourlie.jpg", description: "Your Lie in April, known in Japan as Shigatsu wa Kimi no Uso (四月は君の嘘) or just simply Kimiuso, is a Japanese manga series written and illustrated by Naoshi Arakawa. The series was serialized in Kodansha's Monthly Shōnen Magazine from April 2011 to May 2015. An anime television series adaptation by A-1 Pictures aired from October 2014 to March 2015 on Fuji TV's Noitamina block.A live-action film adaptation of the same name was released in September 2016." },
    ];

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe from all on destroy
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getLlistaMangas() {
    return this.llistaMangas;
  }

  filtrar() {
    var contenido: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("contingut");
    contenido.style.visibility = 'hidden';
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
                <th scope="col">Buscador mangas</th>
            </tr>
        <tbody>
          <tr">
            `;
    this.llistaMangas.forEach(function (value) {
      var i = 0;
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
        nombre = Manga.genereToString(value.genere).toLowerCase();
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
    if (texto === '') {
      contenido.style.visibility = 'visible';
    }
  }

  showDialog : boolean = false;
  mangaFavNom : string = "";

  favorito(e) {
    // alert(`${e.n} afegit a favorits!`)
    this.mangaFavNom = e.n;
    this.showDialog = true;
    localStorage.setItem(e.n, JSON.stringify(e));
  }

  mangaGenere(manga) : string {
    return Manga.genereToString(manga.genere);
  }

  mostraPreview(event, nomManga) {
    console.log(`Nom del manga: ${nomManga}`);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PreviewComponent);
    const viewContainerRef = this.previewContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    // subscribe to component event to know when to delete
    const selfDeleteSub = componentRef.instance.deleteSelf
      .pipe(tap(() => componentRef.destroy()))
      .subscribe();

    // add subscription to array for clean up
    this.subs.push(selfDeleteSub);

    switch (nomManga) {
      case 'Attack on titans':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/aot";
        break;

      case 'Berserk':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/berserk";
        break;

      case 'Blue exorcist':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/be";
        break;

      case 'Boku no hero':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/bnh";
        break;

      case 'Detective Conan':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/dc";
        break;

      case 'Dragon Ball':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/db";
        break;

      case 'Eureka Seven':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/es";
        break;

      case 'Evangelion':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/evgl";
        break;

      case 'One punch man':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/opm";
        break;

      case 'Sword art online':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/sao";
        break;

      case 'The promised neverland':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/tpn";
        break;

      case 'Tokyo Ghoul':
        (<PreviewComponent>componentRef.instance).baseImgName = "../assets/images/preview/tg";
        break;
    }
  }
}
