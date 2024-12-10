import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CepService } from '../cep.service';

@Component({
  selector: 'app-item-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {

  items: any[] = [];
  newItem: {  cep: string  } = {  cep: ''  }
  constructor(private cepService: CepService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.cepService.getItems().subscribe((data) => {
      this.items = data;
    })
  }

  addItem(): void {
    if(this.newItem.cep) {
      this.cepService.addItem(this.newItem).subscribe(()=> {
        this.newItem.cep = '';
        this.loadItems()
      })
    }
  }
 }
