import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  Form,
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable, delay, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public reactiveFromGroup!: FormGroup;
  public multipleStudentsForm!: FormGroup;
  public nestedFormGroup!: FormGroup;
  public demoControl!: FormControl;
  constructor() {}

  ngOnInit(): void {
    this.reactiveFromGroup = this.buildFormGroup();
    this.buildMultipleStudents();
    this.nestedFormGroup = this.buildNestedFormGroup();
    this.demoControl = new FormControl('');
  }

  //Normal Form Starts here

  buildFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      userName: new FormControl(
        '',
        [Validators.required],
        [this.validateUsername()]
      ),
      age: new FormControl('', [Validators.required, this.validateMinAge()]),
      hobbies: new FormArray([]),
    });
  }

  get hobbies(): FormArray {
    return this.reactiveFromGroup.get('hobbies') as FormArray;
  }

  addControlInArray() {
    let control = new FormControl(null, Validators.required);
    this.hobbies.push(control);
  }

  removeControl(index: number) {
    this.hobbies.removeAt(index);
  }

  validateMinAge() {
    return (control: AbstractControl) => {
      return control.value >= 18 ? null : { invalidAge: true };
    };
  }
  setName = () => {
    this.reactiveFromGroup.patchValue({ name: 'Udit' });
    // this.reactiveFromGroup.setValue({
    //   ...this.reactiveFromGroup.value,
    //   name: 'Udit',
    // });
  };
  reset = () => {
    this.reactiveFromGroup.reset();
  };
  validateUsername() {
    return (control: AbstractControl) => {
      let addedUsernames = ['udit', 'ashish', 'vikram'];
      return of(
        addedUsernames.includes(control.value)
          ? { invalidUsername: true }
          : null
      ).pipe(delay(2000));
    };
  }
  // normal form ends here

  //Form array of form group starts here

  buildMultipleStudents() {
    this.multipleStudentsForm = new FormGroup({
      students: new FormArray([this.buildMultipleStudentsFormGroup()]),
    });
  }

  buildMultipleStudentsFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      userName: new FormControl(
        '',
        [Validators.required],
        [this.validateUsername()]
      ),
      age: new FormControl('', [Validators.required, this.validateMinAge()]),
      hobbies: new FormArray([]),
    });
  }

  get multipleStudents() {
    return this.multipleStudentsForm.get('students') as FormArray;
  }

  addNewStudent() {
    this.multipleStudents.push(this.buildFormGroup());
  }

  removeStudent(index: number) {
    this.multipleStudents.removeAt(index);
  }

  getHobbiesForMultiple(formIndex: number): FormArray {
    return this.multipleStudents.at(formIndex).get('hobbies') as FormArray;
  }

  addNewHobbtInMultiple(formIndex: number) {
    let control = new FormControl(null, Validators.required);
    this.getHobbiesForMultiple(formIndex).push(control);
  }

  removeHobbyFromMultiple(formIndex: number, index: number) {
    this.getHobbiesForMultiple(formIndex).removeAt(index);
  }

  onMultipleStudentsSubmit() {
    console.log(this.multipleStudentsForm.value);
  }

  onReactiveFormSubmit() {
    console.log(this.reactiveFromGroup.value);
  }

  buildNestedFormGroup() {
    return new FormGroup({
      name: new FormGroup({
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
      }),
      age: new FormControl('', Validators.required),
    });
  }
}
