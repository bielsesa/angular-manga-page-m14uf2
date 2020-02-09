/*
 * Component que definex el marc per a fer uns encaminaments a altres components
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que definex el marc per a fer uns encaminaments a altres components
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import { Manga, Genere } from './Manga';
import { Autor } from './Autor';



@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './encaminament.component.html'
})
export class EncaminamentComponent {
  titol = 'DAW2 demo de routing';
  llistaMangas = [
    new Manga("attack on titans", "../assets/attackontitans.jpg", Genere.Action, new Autor("Hajime", "Isayama", new Date(), "Japon")),
    new Manga("Eureka seven", "../assets/attackontitans.jpg", Genere.Sci_fi, new Autor("Hajiqeq", "eqeqea", new Date(), "Jeq")),
    new Manga("The promised neverland", "../assets/attackontitans.jpg", Genere.Adventure, new Autor("Hajime", "Isayama", new Date(), "Japon")),
    new Manga("Blue exorcist", "../assets/attackontitans.jpg", Genere.Fantasy, new Autor("Hajime", "Isayama", new Date(), "Japon"))];
  constructor() {

  }


  alumnes = [
    { i: 11, n: 'Sergi' },
    { i: 12, n: 'Joan' },
    { i: 13, n: 'Anna' },

  ];


}