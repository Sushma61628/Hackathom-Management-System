import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackathonTimerComponent } from './hackathon-timer.component';
import { RemainingTimePipe } from '../remaining-time.pipe';



@NgModule({
  declarations: [HackathonTimerComponent,RemainingTimePipe],
  imports: [
    CommonModule
  ],
  exports:[HackathonTimerComponent]
})
export class HackathonTimerModule { }
