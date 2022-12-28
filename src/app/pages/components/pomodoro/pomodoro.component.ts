import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})

export class PomodoroComponent implements OnInit {

  minutes: number = 25
  seconds: number = 0
  intervalId: any

  constructor() { }

  ngOnInit() {
  }

  increaseMinutes(){
    this.minutes = this.minutes + 1
  }

  decreaseMinutes(){
    this.minutes = this.minutes - 1
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      }
    }, 1000);

    let progressBar = document.querySelector<HTMLElement>(".circular-progress")
    let valueContainer = document.querySelector<HTMLElement>(".timer-value")

    let progressValue = 0
    let progressEndValue = this.minutes 
    let maxLoad = this.minutes * 60
    console.log(maxLoad)
    let speed = 1000

    let progress = setInterval(() => {
      progressValue++
      console.log(progressValue)
      progressBar!.style.background = `conic-gradient(#a1a1a1 ${progressValue}deg, black ${progressValue}deg)`;
      if(progressValue == maxLoad){
        clearInterval(progress)
      }
    }, speed)

  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  restartTimer(){
    this.minutes = 25
    this.seconds = 0
  }
  
}
