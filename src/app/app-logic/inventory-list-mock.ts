import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-item';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryListMock {

  inventoryData: Array<InventoryItem> = [];
  private apiURL = 'https://localhost:7103/api/inventory/item';

  constructor(private httpClient: HttpClient){}

  getData(): Observable<Array<InventoryItem>>{
    return this.httpClient.get<InventoryItem[]>(this.apiURL);
  } // This method can be used to fetch data from a real API

  addItem(item: InventoryItem): void {
  this.httpClient.post<InventoryItem>(this.apiURL, item).subscribe(data => {
    this.inventoryData.push(data);
  });
}

getLastId(): number {
  return Math.max.apply(
    Math,
    this.inventoryData.map(function (o) {
      return o.id;
    })
  );
}

getItemById(id: number): Observable<InventoryItem> {
  return this.httpClient.get<InventoryItem>(`${this.apiURL}/${id}`);
}

updateItem(item: InventoryItem): void {
  this.httpClient.put<InventoryItem>(this.apiURL,item).subscribe(data => {
    console.log(data)
  })

}


}