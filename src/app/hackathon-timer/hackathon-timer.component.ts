import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-hackathon-timer',
  templateUrl: './hackathon-timer.component.html',
  styleUrls: ['./hackathon-timer.component.css']
})
export class HackathonTimerComponent implements OnInit,OnDestroy 
{
  hackathonDuration = 52 * 60 * 60; // 52 hours in seconds
  remainingTime!: number;
  timerSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateRemainingTime();
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  updateRemainingTime() {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    this.remainingTime = this.hackathonDuration - currentTime;

    if (this.remainingTime <= 0) {
      this.remainingTime = 0;
      this.timerSubscription.unsubscribe();
    }
  }
}
