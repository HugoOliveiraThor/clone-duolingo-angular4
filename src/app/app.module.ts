import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from "./top/topo.component";
import { PanelComponent } from './panel/panel.component';
import { AttemptsComponent } from './attempts/attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
