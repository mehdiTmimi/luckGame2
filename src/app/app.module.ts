import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/score/score.component';
import { NumberComponent } from './components/game/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
