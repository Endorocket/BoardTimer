import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    const players = this.gameService.getPlayers();
    const timer = this.gameService.getTimer();
  }
}
