import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Player } from '../player.model';
import { Timer } from '../timer.model';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  startGameForm: FormGroup;

  constructor(private router: Router, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.startGameForm = new FormGroup({
      player1: new FormControl(null, [Validators.required]),
      player2: new FormControl(null, [Validators.required]),
      start: new FormControl(null, [Validators.required]),
      turn: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    console.log(this.startGameForm);
    const player1Name = this.startGameForm.value.player1;
    const player2Name = this.startGameForm.value.player2;

    const startTime = this.startGameForm.value.start;
    const startTimeMinutes = startTime.split(':')[0];
    const startTimeSeconds = startTime.split(':')[1];

    const turnTime = this.startGameForm.value.turn;
    const turnTimeMinutes = turnTime.split(':')[0];
    const turnTimeSeconds = turnTime.split(':')[1];

    const startTimeDate = new Date(2020, 1, 1, 0, startTimeMinutes, startTimeSeconds);
    const turnTimeDate = new Date(2020, 1, 1, 0, turnTimeMinutes, turnTimeSeconds);

    const player1: Player = {
      name: player1Name,
      time: startTimeDate
    };
    const player2: Player = {
      name: player2Name,
      time: startTimeDate
    };
    const timer: Timer = {
      start: startTimeDate,
      turn: turnTimeDate
    };
    this.gameService.startGame([player1, player2], timer);
    this.router.navigate(['/current-game']);
  }
}
