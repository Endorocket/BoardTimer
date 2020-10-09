import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  startGameForm: FormGroup;

  constructor() { }

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
  }
}
