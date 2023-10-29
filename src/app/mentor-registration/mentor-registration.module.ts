import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import { MentorRegistrationComponent } from './mentor-registration.component';



@NgModule({
  declarations: [MentorRegistrationComponent],
  imports: [CommonModule,FormsModule],
  exports: [MentorRegistrationComponent],
})
export class MentorRegistrationModule {
}
 