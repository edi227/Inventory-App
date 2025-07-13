import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../app-logic/inventory-item';
import { InventoryListMock } from '../app-logic/inventory-list-mock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  standalone: false,
  templateUrl: './show-item.html',
  styleUrl: './show-item.css',
})
export class ShowItem implements OnInit {
  item!: InventoryItem;
  itemId!: number;
  itemFound = false;

  constructor(
    private inventoryListMock: InventoryListMock,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      this.itemId = params['id'];
    });
  }

  ngOnInit(): void {
    this.inventoryListMock.getItemById(this.itemId).subscribe(
      data =>{
        this.item = data;
        this.itemFound = this.item ? true : false;
      }
    )
    this.itemFound = this.item ? true : false;
  }
  edit() {
    this.router.navigate(['edit/' + this.itemId]);
  }
}
 