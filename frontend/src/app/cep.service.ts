import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/api/endereco`);
  }

  addItem(data: any): Observable<any[]> {
    console.log(data);
    
    return this.http.post<any>(`${this.baseUrl}/api/endereco`, data)
  }
}
