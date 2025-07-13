import { Component, ViewChild, OnInit, viewChild } from '@angular/core';
import { InventoryListMock } from '../../app-logic/inventory-list-mock';
import { InventoryItem } from '../../app-logic/inventory-item';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator:
  | MatPaginator
  | undefined;
@ViewChild(MatSort, {static: true}) sort: MatSort | undefined;

  inventoryItems: any;
  inventoryColumns: string[] = [
    'select',
    'id',
    'name',
    'description',
    'user',
    'location',
    'inventoryNumber',
    'createdAt',
    'modifiedAt',
    'deleted',
    'actions',
  ]

  selection = new SelectionModel<Element>(true, []);

  constructor(private inventoryListMock: InventoryListMock){}

  ngOnInit(): void{
    this.inventoryListMock.getData().subscribe(data => {
      if (data) { 
        this.inventoryItems = new MatTableDataSource<InventoryItem>(data);
        this.inventoryItems.paginator = this.paginator;
        this.inventoryItems.sort = this.sort;
      }
    })
  }
  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.inventoryItems?.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    console.log("masterToggle")
  this.isAllSelected()
    ? this.selection.clear()
    : this.inventoryItems.data.forEach((row: Element) => {
        this.selection.select(row);
      });
}
}
