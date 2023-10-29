import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import { VoteForIdeasComponent } from './vote-for-ideas.component';



@NgModule({
  declarations: [VoteForIdeasComponent],
  imports: [CommonModule,FormsModule],
  exports:[VoteForIdeasComponent],
})
export class VoteForIdeasModule { }
