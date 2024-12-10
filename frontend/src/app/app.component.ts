import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { CepService } from './cep.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemListComponent, HttpClientModule],
  providers: [CepService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
