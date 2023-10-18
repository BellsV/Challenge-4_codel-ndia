import { Component, HostListener } from '@angular/core';
import { VisibilityService } from './visibility.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public visibilityService: VisibilityService){}


   @HostListener('window:resize', ['$event'])
   onResize(event : Event):void{
    const showGraficPart = window.innerWidth>=900;
    this.visibilityService.setShowGraficPart(showGraficPart)
   }

  title = 'desafio_4';
}
