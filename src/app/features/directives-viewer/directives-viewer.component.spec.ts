import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesViewerComponent } from './directives-viewer.component';

describe('DirectivesViewerComponent', () => {
  let component: DirectivesViewerComponent;
  let fixture: ComponentFixture<DirectivesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
