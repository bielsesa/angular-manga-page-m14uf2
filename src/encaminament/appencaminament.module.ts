/*
 * Mòdul d'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Mòdul d'encaminament
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MangaComponent} from '../manga/manga.component';
import { GenereComponent} from '../genere/genere.component';
import { AutorComponent} from '../autor/autor.component';
import { FavoritsComponent} from '../favorits/favorits.component';

const encaminaments: Routes = [
  { path: '', redirectTo: 'manga', pathMatch: 'full' },
  { path: 'manga', component: MangaComponent, data: { state: 'manga' } },
  { path: 'genere', component: GenereComponent, data: { state: 'genere' } },
  { path: 'autor', component: AutorComponent, data: { state: 'autor' } },
  { path: 'favorits', component: FavoritsComponent, data: { state: 'favorits' } },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }

