import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficParteComponent } from './page/component/grafic-parte/grafic-parte.component';
import { LoginComponent } from './page/component/login/login.component';

import { VisibilityService } from './visibility.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficParteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VisibilityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
