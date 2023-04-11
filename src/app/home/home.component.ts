import { Component } from '@angular/core';


interface Expense {
  name: string;
  price: number;
  date: string;
  mode: string;
  narration: string;
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
  
}
}

