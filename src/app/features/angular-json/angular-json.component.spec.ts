import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsonComponent } from './angular-json.component';

describe('AngularJsonComponent', () => {
  let component: AngularJsonComponent;
  let fixture: ComponentFixture<AngularJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
