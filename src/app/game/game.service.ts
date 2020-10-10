import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Timer } from './timer.model';

@Injectable({providedIn: 'root'})
export class GameService {
  players: Player[] = [];
  timer: Timer;

  getPlayers(): Player[] {
    return this.players.slice();
  }

  getTimer(): Timer {
    return {...this.timer};
  }

  startGame(players: Player[], timer: Timer): void {
    this.players = players;
    this.timer = timer;
  }
}
