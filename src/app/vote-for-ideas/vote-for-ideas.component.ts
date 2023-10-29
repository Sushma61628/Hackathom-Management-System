
import { Component } from '@angular/core';

interface Idea {
  id: number;
  title: string;
  description: string;
  votes: number;
  userHasVoted: boolean;
}

@Component({
  selector: 'app-vote-for-ideas',
  templateUrl: './vote-for-ideas.component.html',
  styleUrls: ['./vote-for-ideas.component.css']
})
export class VoteForIdeasComponent {

  ideas: Idea[] = [
    {
      id: 1,
      title: 'Idea 1',
      description: 'Description for Idea 1',
      votes: 0,
      userHasVoted: false,
    },
    {
      id: 2,
      title: 'Idea 2',
      description: 'Description for Idea 2',
      votes: 0,
      userHasVoted: false,
    },
     
  ];

  voteForIdea(idea: Idea) {
    if (!idea.userHasVoted) {
      idea.votes++;
      idea.userHasVoted = true;
    }
  }
}


