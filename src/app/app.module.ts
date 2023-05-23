import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesizePipe } from './filesize.pipe';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesizePipe,
    ConvertisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
