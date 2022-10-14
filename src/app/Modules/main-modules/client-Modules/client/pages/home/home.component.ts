import { OnInit, SimpleChange } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { studentInterface } from 'src/app/Interfaces/demotableData';
import { StudentRecordService } from 'src/app/services/student-record.service';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModelPopComponent } from '../model-pop/model-pop.component';
import { Profile } from 'src/app/Interfaces/Profile';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'email',
    'action',
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  loading: boolean = true;
  fetching: boolean = true;
  editUserData: any;

  status = 'No Data';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private modalService: NgbModal,
    private _studentRecords: StudentRecordService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.apiloadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  limit=10;offset=1
  //Getting All Record
  apiloadData() {
    this._studentRecords.getAllRecords(this.limit,this.offset).subscribe((res) => {
      console.log(res.data);
      debugger;
      this.dataSource.data = res.data;
    });
  }

  // userModel(response: boolean) {
  //   console.log('userModel is click');
  //   this.openModel = response;
  // }
  editUser(item: any) {
    this.editUserData = 'Update Record';
    this.openDialog(item);

    console.log(`Edit check ${this.editUserData}`);
    // this.apiloadData();
  }

  openDialog(content?: any) {
    console.log(` sending Data from main ${this.editUserData}`);
    const dialogRef = this.dialog.open(ModelPopComponent, {
      data: { heading: this.editUserData },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete(
    enterAnimationDuration?: string,
    exitAnimationDuration?: string,

  ): void {
    console.log('deleteModel call');
    this.dialog.open(DeleteModelComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    },

    )
   console.log(this.dialog)
    this.apiloadData()
  }

 deleteRecord (id:string) {
    console.log(id);
    this._studentRecords.DeleteRecordByID(id).subscribe(res=>{
      console.log('record is deleted');
      if(res.status) {
        this._snackBar.open(res.message)
      }
    })
  }
}


