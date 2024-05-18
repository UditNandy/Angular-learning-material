import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationProcessComponent } from './compilation-process.component';

describe('CompilationProcessComponent', () => {
  let component: CompilationProcessComponent;
  let fixture: ComponentFixture<CompilationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilationProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
