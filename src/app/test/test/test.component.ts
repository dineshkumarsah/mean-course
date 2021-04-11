import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'
import { AgGridAngular } from 'ag-grid-angular';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  selectable = true;
  removable = true;
  fruits: string[] = ['Lemon'];
  fruitCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('agGrid') agGrid: AgGridAngular;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  filteredFruits: Observable<string[]>;
  forbiddenName = ['dinesh','kiran'];
  userForm: FormGroup;
  showToolPanel: boolean = true

  columnDefs =[
    { field: 'make', sortable: true, filter: true, checkboxSelection: true},
    { field: 'model', sortable: true, filter: true},
    { field: 'price', sortable: true, filter: true}
  ]
  rowData =[
    { make: 'Tyota',model: 'celica', price: 350000},
    { make: 'Maruti',model: 'saudu', price: 230000},
    { make: 'Boloro',model: 'zxxx', price: 45000},
    { make: 'Pickup',model: 'yxyyx', price: 50000}
  ]
  constructor() { 
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit(): void {
    this.userForm =new FormGroup({
      userName: new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(),
      gender: new FormControl('Female')
    })
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenName.indexOf(control.value)!==-1){
      return {forbiddenName: true}
    }

    return null

  }
  onUserSubmit(){
    console.log(this.userForm);
    
  }
  getSelectedRow(){
   const selectedNodes = this.agGrid.api.getSelectedNodes();
   console.log(selectedNodes);
   const selectedData = selectedNodes.map((node) =>{
    console.log(node.data);
    
   } )
   
  }
  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}


