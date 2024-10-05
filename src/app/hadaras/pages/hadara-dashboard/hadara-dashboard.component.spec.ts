import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadaraDashboardComponent } from './hadara-dashboard.component';

describe('HadaraDashboardComponent', () => {
  let component: HadaraDashboardComponent;
  let fixture: ComponentFixture<HadaraDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HadaraDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadaraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
