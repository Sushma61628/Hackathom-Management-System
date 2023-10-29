import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import { JuryReviewsComponent } from './jury-reviews.component';



@NgModule({
  declarations: [JuryReviewsComponent],
  imports: [CommonModule,FormsModule],
  exports:[JuryReviewsComponent],
})
export class JuryReviewsModule { }
