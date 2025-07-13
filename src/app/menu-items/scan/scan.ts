import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-scan',
  standalone: false,
  templateUrl: './scan.html',
  styleUrl: './scan.css',
})
export class Scan {
  constructor(private router: Router) {}

  onEvent(eventValue: ScannerQRCodeResult[], action?: any) {
    this.router.navigate(['/item/' + eventValue[0].value]);
  }
}
 