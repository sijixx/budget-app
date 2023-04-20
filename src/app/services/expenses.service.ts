import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { 

  }

  addexpense(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/expenses', data);
  }

  updateExpense(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/expenses/${id}`, data);
  }

  getExpenseList(): Observable<any> {
    return this.http.get('http://localhost:3000/expenses');
  }

  deleteExpenses(id: number): Observable<any> {
      return this.http.delete(`http://localhost:3000/expenses/${id}`);
  }
}
