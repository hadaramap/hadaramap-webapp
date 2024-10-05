import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayingTimeComponent } from './praying-time.component';

describe('PrayingTimeComponent', () => {
  let component: PrayingTimeComponent;
  let fixture: ComponentFixture<PrayingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayingTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
