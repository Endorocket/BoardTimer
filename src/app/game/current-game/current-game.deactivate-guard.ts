import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CurrentGameComponent } from './current-game.component';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';

@Injectable({providedIn: 'root'})
export class CurrentGameDeactivateGuard implements CanDeactivate<CurrentGameComponent> {

  constructor(private gameService: GameService) {
  }

  canDeactivate(component: CurrentGameComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.gameService.gameStarted) {
      return true;
    }
    const cancelConfirmed = window.confirm('Do you really want to cancel current game?');
    if (cancelConfirmed) {
      this.gameService.gameStarted = false;
      return true;
    }
    return false;
  }
}
