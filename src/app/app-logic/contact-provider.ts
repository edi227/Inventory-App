import { Injectable } from '@angular/core';
import { ContactData } from './contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactProvider {
  providedData = <ContactData>{
    info: "Depozit situat in Brasov, Coresi",
    address: "Strada Turnului, nr. 5",
    openDays: "Luni-Vineri",
    timeSlot: "8:00 - 16:00",
    phone: "0770123456"
  };
  constructor() { }

  getData(): ContactData{
    return this.providedData;
  }
}
