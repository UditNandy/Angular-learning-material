import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOrientedJavascriptComponent } from './object-oriented-javascript.component';

describe('ObjectOrientedJavascriptComponent', () => {
  let component: ObjectOrientedJavascriptComponent;
  let fixture: ComponentFixture<ObjectOrientedJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectOrientedJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectOrientedJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
