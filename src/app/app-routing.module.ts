import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'start-game', component: StartGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
