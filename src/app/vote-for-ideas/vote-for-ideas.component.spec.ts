import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteForIdeasComponent } from './vote-for-ideas.component';

describe('VoteForIdeasComponent', () => {
  let component: VoteForIdeasComponent;
  let fixture: ComponentFixture<VoteForIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteForIdeasComponent]
    });
    fixture = TestBed.createComponent(VoteForIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
