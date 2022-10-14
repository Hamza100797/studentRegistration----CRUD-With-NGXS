import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.scss'],
})
export class DeleteModelComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteModelComponent>) {}

  ngOnInit(): void {}
  clickNo() {
    console.log('No button clicked');
    this.dialogRef.close();
}
clickOk() {
    console.log('Ok button clicked');
    this.dialogRef.close();
}
}
