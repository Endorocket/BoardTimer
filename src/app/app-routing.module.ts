import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StartGameComponent } from './game/start-game/start-game.component';
import { CurrentGameComponent } from './game/current-game/current-game.component';
import { GameGuard } from './game/game.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'start-game', component: StartGameComponent},
  {path: 'current-game', component: CurrentGameComponent, canActivate: [GameGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
