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
import { Component, ViewEncapsulation } from '@angular/core';




@Component({
  //moduleId: module.id,
  selector: 'encaminament-component',
  templateUrl: './encaminament.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EncaminamentComponent {
  titol = 'NORMA COMICS';



  

}