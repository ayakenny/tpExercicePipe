import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  
  transform(value: any, format?: string[]): any {
    // Définition des variables nécessaires
    let sizeO = 0;
    let sizeKo = 1024;
    let sizeMo = 1024*1024;
    let sizeGo = 1024*1024*1024;

    let o = ((value % sizeGo)%sizeMo)%sizeKo;
    let ko = Math.trunc(((value % sizeGo)%sizeMo)/sizeKo);
    let mo = Math.trunc((value%sizeGo)%sizeMo);
    let go = Math.trunc(value/sizeGo);
    
    // Affichage format 'complet'
    if() {
      
    }

    // Affichage selon chaque unité
    if() {

    }
  }
}
