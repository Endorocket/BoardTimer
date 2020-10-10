import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { GameService } from './game.service';

@Injectable({providedIn: 'root'})
export class GameGuard implements CanActivate {

  constructor(private router: Router, private gameService: GameService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.gameService.gameStarted) {
      return true;
    } else {
      this.router.navigate(['/start-game']);
    }
  }
}
