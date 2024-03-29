import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ModelPopComponent } from './pages/model-pop/model-pop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { DeleteModelComponent } from './pages/delete-model/delete-model.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomeComponent, ModelPopComponent, DeleteModelComponent],
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    NgxMatFileInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    ClientRoutingModule,
    MatSnackBarModule,

  ],
})
export class ClientModule {}
