import { Component } from '@angular/core';

@Component({
  selector: 'app-jury-reviews',
  templateUrl: './jury-reviews.component.html',
  styleUrls: ['./jury-reviews.component.css']
})
export class JuryReviewsComponent {
  ideas: any[] = [];
  newIdea: string = '';
  newReview: string = '';
  submitIdea() {
    if (this.newIdea.trim() !== '') {
      this.ideas.push({
        idea: this.newIdea,
        reviews: [],
      });
      this.newIdea = '';
    }
  }

  submitReview(ideaIndex: number, review: string) {
    this.ideas[ideaIndex].reviews.push(review);
    this.newReview = '';
  }
}

