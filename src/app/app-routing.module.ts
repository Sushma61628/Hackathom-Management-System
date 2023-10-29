import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
 import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
 import { ChatComponent } from './chat/chat.component';
 import { JuryReviewsComponent } from './jury-reviews/jury-reviews.component';
 import { VoteForIdeasComponent } from './vote-for-ideas/vote-for-ideas.component';
 import { CheckpointSubmissionComponent } from './checkpoint-submission/checkpoint-submission.component'; 
 import { HackathonTimerComponent } from './hackathon-timer/hackathon-timer.component';

const routes: Routes = [
  { path: 'team-registration', component: TeamRegistrationComponent },
  { path: 'mentor-registration', component: MentorRegistrationComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'jury-reviews', component: JuryReviewsComponent },
  { path: 'vote-for-ideas', component: VoteForIdeasComponent },
  {path:'checkpoint-submission',component:CheckpointSubmissionComponent},
  { path: 'hackathon-timer', component: HackathonTimerComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
