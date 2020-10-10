import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Timer } from '../timer.model';
import { Player } from '../player.model';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  players: Player[];
  timer: Timer;

  currentPlayerIndex: number;
  isPaused = true;
  intervalId: number;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.players = this.gameService.getPlayers();
    this.timer = this.gameService.getTimer();
    this.currentPlayerIndex = 0;
  }

  togglePauseButton(): void {
    if (this.isPaused) {
      this.startInterval();
    } else {
      clearInterval(this.intervalId);
    }
    this.isPaused = !this.isPaused;
  }

  finishRound(playerIndex: number): void {
    if (this.currentPlayerIndex !== playerIndex || this.isPaused) {
      return;
    }
    clearInterval(this.intervalId);
    const nextPlayerIndex = (playerIndex + 1) % this.players.length;
    this.currentPlayerIndex = nextPlayerIndex;
    this.addTurnTime(this.players[nextPlayerIndex].time);
    this.startInterval();
  }

  private startInterval(): void {
    this.intervalId = setInterval(() => {
      const currentPlayer = this.players[this.currentPlayerIndex];
      currentPlayer.time = new Date(currentPlayer.time.setSeconds(currentPlayer.time.getSeconds() - 1));
      if (currentPlayer.time.getMinutes() === 0 && currentPlayer.time.getSeconds() === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  private addTurnTime(time: Date): void {
    const currentPlayer = this.players[this.currentPlayerIndex];
    currentPlayer.time = new Date(time.setMinutes(time.getMinutes() + this.timer.turn.getMinutes()));
    currentPlayer.time = new Date(time.setSeconds(time.getSeconds() + this.timer.turn.getSeconds()));
  }
}
