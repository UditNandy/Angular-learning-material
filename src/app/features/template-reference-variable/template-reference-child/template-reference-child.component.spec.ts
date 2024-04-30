import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceChildComponent } from './template-reference-child.component';

describe('TemplateReferenceChildComponent', () => {
  let component: TemplateReferenceChildComponent;
  let fixture: ComponentFixture<TemplateReferenceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
