import { Component } from '@angular/core';
import { ServiceService } from '../service.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css',
})
export class BagComponent {
  bagItems: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.bagItems = this.service.getBagItems();
  }
}
