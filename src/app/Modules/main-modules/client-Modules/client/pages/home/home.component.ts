import { OnInit, SimpleChange } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { studentInterface } from 'src/app/Interfaces/demotableData';
import { StudentRecordService } from 'src/app/services/student-record.service';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  openModel: boolean = false;
  editUserData!: any;
  status = 'No Data';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _studentRecords: StudentRecordService) {}

  ngOnInit(): void {
    this.apiloadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Getting All Record
  apiloadData() {
    this._studentRecords.getAllRecords().subscribe((data) => {
      console.log(data.Records);
      debugger;
      this.dataSource.data = data.Records;
    });
  }

  userModel(response: boolean) {
    console.log('userModel is click');
    this.openModel = response;
  }
  editUser(item: any) {
    this.userModel(true);
    this.editUserData = item;
    this.apiloadData();
  }
}
