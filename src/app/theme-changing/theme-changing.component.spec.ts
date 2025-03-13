import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChangingComponent } from './theme-changing.component';

describe('ThemeChangingComponent', () => {
  let component: ThemeChangingComponent;
  let fixture: ComponentFixture<ThemeChangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeChangingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeChangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
