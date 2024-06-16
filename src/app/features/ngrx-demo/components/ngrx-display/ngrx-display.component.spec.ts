import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDisplayComponent } from './ngrx-display.component';

describe('NgrxDisplayComponent', () => {
  let component: NgrxDisplayComponent;
  let fixture: ComponentFixture<NgrxDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
