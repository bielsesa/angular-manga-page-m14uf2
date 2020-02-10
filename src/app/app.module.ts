import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncaminamentComponent} from '../encaminament/encaminament.component';
import { PreviewComponent } from '../preview/preview.component';
import {AppEncaminamentModule} from '../encaminament/appencaminament.module';
import { MangaComponent } from '../manga/manga.component';
import { GenereComponent } from '../genere/genere.component';
import { AutorComponent } from '../autor/autor.component';
import { FavoritsComponent } from '../favorits/favorits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {M09_OrdenarPerPipe} from './m09-ordenar-per.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EncaminamentComponent,
    MangaComponent,
    GenereComponent,
    AutorComponent,
    FavoritsComponent,
    M09_OrdenarPerPipe
    
  ],
  imports: [
    BrowserModule,
    AppEncaminamentModule,
    BrowserAnimationsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
