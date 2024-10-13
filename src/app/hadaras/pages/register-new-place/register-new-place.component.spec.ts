import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewPlaceComponent } from './register-new-place.component';

describe('RegisterNewPlaceComponent', () => {
  let component: RegisterNewPlaceComponent;
  let fixture: ComponentFixture<RegisterNewPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterNewPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNewPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
