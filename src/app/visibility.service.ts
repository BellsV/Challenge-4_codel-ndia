import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private showGraficPart = true;

  setShowGraficPart(value: boolean){
    this.showGraficPart = value;
  }

  getShowGraficPart(){
    return this.showGraficPart;
  }

  constructor() { }
}
