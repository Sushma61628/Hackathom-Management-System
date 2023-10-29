import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRegistrationComponent } from './team-registration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TeamRegistrationComponent],
  imports: [CommonModule,FormsModule],
  exports: [TeamRegistrationComponent],
})
export class TeamRegistrationModule { }
