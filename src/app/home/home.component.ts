import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  displayform = false;

  newExpense: any = {
    name: '',
    price: 0,
    date: '',
    mode: '',
    narration: ''
  };

  expenses: any = [];

  constructor(){}

  ngOnInit(): void {
    this.getexpenses();
  }

  getexpenses() {

    

    const expensesString = localStorage.getItem('expense');
    if (expensesString) {
      this.expenses = JSON.parse(expensesString).reverse();
    } else {
      this.expenses = [];
    }
  }

  addExpense() {
    const currentExpenses = JSON.parse(localStorage.getItem('expense') || '[]');
    currentExpenses.push(this.newExpense);
    localStorage.setItem('expense', JSON.stringify(currentExpenses));

    this.getexpenses();
    this.clearform();
    
  }

  clearform(){
    this.newExpense = {
      name: '',
      price: 0,
      date: '',
      mode: '',
      narration: ''
    };

    this.displayform = false;
  }

  showform(){
    this.displayform = true;
  }

  hideform(){
    this.displayform = false;
  }
  
}

