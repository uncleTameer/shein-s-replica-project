import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private bagItems: any[] = [];
  constructor() {}

  addToBag(item: any): void {
    this.bagItems.push(item);
  }

  getBagItems(): any[] {
    return this.bagItems;
  }

  getBagItemCount(): number {
    return this.bagItems.length;
  }
}
