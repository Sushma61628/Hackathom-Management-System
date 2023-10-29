import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonTimerComponent } from './hackathon-timer.component';

describe('HackathonTimerComponent', () => {
  let component: HackathonTimerComponent;
  let fixture: ComponentFixture<HackathonTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackathonTimerComponent]
    });
    fixture = TestBed.createComponent(HackathonTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
