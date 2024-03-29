import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', {static: false}) table: any;
  dataTable: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
