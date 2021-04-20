import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})
export class AgGridTableComponent implements OnInit {

  @Input() config
  constructor() { }

  ngOnInit(): void {
  }

}
