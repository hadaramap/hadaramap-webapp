import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderMobileComponent } from './placeholder-mobile.component';

describe('PlaceholderMobileComponent', () => {
  let component: PlaceholderMobileComponent;
  let fixture: ComponentFixture<PlaceholderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
