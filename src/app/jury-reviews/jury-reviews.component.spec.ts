import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryReviewsComponent } from './jury-reviews.component';

describe('JuryReviewsComponent', () => {
  let component: JuryReviewsComponent;
  let fixture: ComponentFixture<JuryReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuryReviewsComponent]
    });
    fixture = TestBed.createComponent(JuryReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
