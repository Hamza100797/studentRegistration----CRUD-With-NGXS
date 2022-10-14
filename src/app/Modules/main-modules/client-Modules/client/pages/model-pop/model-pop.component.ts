import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from 'popper.js';

@Component({
  selector: 'app-model-pop',
  templateUrl: './model-pop.component.html',
  styleUrls: ['./model-pop.component.scss'],
})
export class ModelPopComponent implements OnInit {
  hasFormErrors: boolean = false;
  submitted: boolean = false;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { heading: string }
  ) {}
  editUserData: any = this.data.heading;
  ngOnInit(): void {
    console.log(this.editUserData);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(this.editUserData);
    debugger;
    if (changes) {
      if (this.editUserData) {
        console.log(this.editUserData);
        console.log(this.editUserData);
        this.studentForm.patchValue(this.editUserData);
      }
    }
  }

  studentForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    profileImage: new FormControl('', Validators.required),
  });

  get f(): any {
    return this.studentForm.controls;
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.studentForm.controls[controlName].hasError(errorName);
  }
  
onDelete() {

}
  onSubmit(): void {
    this.hasFormErrors = false;
    if (this.studentForm.invalid) {
      const controls = this.studentForm.controls;
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      this.hasFormErrors = true;
      return;
    }
    this.submitted = true;
    debugger;
    // update Activity

    //Create Activity
  }
  onNoClick(): void {
    debugger;
    this.dialog.closeAll();
    this.data.heading = '';
  }
}
