import { Component } from '@angular/core';


interface Checkpoint {
  name: string;
  deadline: Date;
  submittedTeams: string[];
}


@Component({
  selector: 'app-checkpoint-submission',
  templateUrl: './checkpoint-submission.component.html',
  styleUrls: ['./checkpoint-submission.component.css']
})
export class CheckpointSubmissionComponent {

  checkpoints: Checkpoint[] = [
    {
      name: 'Checkpoint 1',
      deadline: new Date('2023-01-31T23:59:59'),
      submittedTeams: ['Team A', 'Team C'],
    },
    {
      name: 'Checkpoint 2',
      deadline: new Date('2023-02-28T23:59:59'),
      submittedTeams: ['Team B', 'Team D'],
    },
    {
      name: 'Checkpoint 3',
      deadline: new Date('2023-03-31T23:59:59'),
      submittedTeams: ['Team A', 'Team B'],
    }]
     
  };


