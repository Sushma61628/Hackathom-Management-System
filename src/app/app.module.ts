import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
import { ChatComponent } from './chat/chat.component';
import { JuryReviewsComponent } from './jury-reviews/jury-reviews.component';
import { VoteForIdeasComponent } from './vote-for-ideas/vote-for-ideas.component';
 import { CheckpointSubmissionComponent } from './checkpoint-submission/checkpoint-submission.component';
import { HackathonTimerComponent } from './hackathon-timer/hackathon-timer.component';
import { RemainingTimePipe } from './remaining-time.pipe';
 
 

@NgModule({
  declarations: [
    AppComponent,
    TeamRegistrationComponent,
    MentorRegistrationComponent,
    ChatComponent,
    JuryReviewsComponent,
    VoteForIdeasComponent,
     
    HackathonTimerComponent,
    TeamRegistrationComponent,
    CheckpointSubmissionComponent,
    RemainingTimePipe,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
