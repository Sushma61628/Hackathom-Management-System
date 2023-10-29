import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointSubmissionComponent } from './checkpoint-submission.component';

describe('CheckpointSubmissionComponent', () => {
  let component: CheckpointSubmissionComponent;
  let fixture: ComponentFixture<CheckpointSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckpointSubmissionComponent]
    });
    fixture = TestBed.createComponent(CheckpointSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
