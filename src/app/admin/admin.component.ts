import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',

  
})
export class AdminComponent {
  newItemName: string = '';
  newItemPrice: number | null = null; // Explicitly define the type
  newItemImage: string = '';
  newItemSizes: string = '';

  items = [
    { id: 1, name: 'T-Shirt', price: 29, imageUrl: 'sample1.jpg', sizes: ['XS', 'S', 'M', 'L'], inStock: true },
    { id: 2, name: 'Pants', price: 49, imageUrl: 'sample2.jpg', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    // Add more items as needed
  ];

  addItem(): void {
    // Check if newItemPrice is null
    if (this.newItemPrice === null) {
      console.error('Item price cannot be null');
      return;
    }

    // Create a new item
    const newItem = {
      id: this.items.length + 1,
      name: this.newItemName,
      price: this.newItemPrice,
      imageUrl: this.newItemImage,
      sizes: this.newItemSizes.split(',').map(size => size.trim()),
      inStock: true  // Assuming a newly added item is in stock
    };

    // Add the new item to the items array
    this.items.push(newItem);

    // Reset form fields
    this.newItemName = '';
    this.newItemPrice = null;
    this.newItemImage = '';
    this.newItemSizes = '';
  }
}