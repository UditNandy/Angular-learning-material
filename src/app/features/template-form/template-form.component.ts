import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('myForm') form!: NgForm;
  public templateFormValue = { name: '', username: '', age: '' };

  constructor() {}

  ngOnInit(): void {}

  onTemplateFormSubmit(form: NgForm) {
    console.log(form.controls);
  }

  setName(form: NgForm) {
    form.form.patchValue({ name: 'Udit' });
    // form.setValue({ ...form.value, name: 'Udit' });
  }
  reset(form: NgForm) {
    this.form.reset();
  }
}
