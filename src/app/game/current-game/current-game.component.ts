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

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.players = this.gameService.getPlayers();
    this.timer = this.gameService.getTimer();
  }
}
