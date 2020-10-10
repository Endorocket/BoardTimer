import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartGameComponent } from './game/start-game/start-game.component';
import { CurrentGameComponent } from './game/current-game/current-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    WelcomeComponent,
    StartGameComponent,
    CurrentGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
