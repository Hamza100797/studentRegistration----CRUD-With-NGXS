import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-pop',
  templateUrl: './model-pop.component.html',
  styleUrls: ['./model-pop.component.scss'],
})
export class ModelPopComponent implements OnInit {
  @Output() modalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() editUserData: any;
  hasFormErrors: boolean = false;
  submitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChange) {
    if (changes) {
      if (this.editUserData) {
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
}
