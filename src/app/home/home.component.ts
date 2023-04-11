import { Component } from '@angular/core';


interface Expense {
  name: string;
  price: number;
  date: string;
  mode: string;
  narration?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  newExpense: Expense = {
    name: '',
    price: 0,
    date: '',
    mode: '',
    narration: ''
};

expenses: Expense[] = [];

addExpense() {
  // Set default values for new expense
  const date = new Date().toISOString().slice(0, 10);
  const mode = 'Cash';

  // Create new expense object
  const expense = {
    name: 'Expense',
    price: 0,
    date,
    mode,
    narration: this.newExpense.narration
  };

  // Add expense to expenses array
  this.expenses.push(expense);

  // Reset newExpense object
  this.newExpense.narration = '';
}
}

