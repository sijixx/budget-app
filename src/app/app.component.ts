import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';

  constructor(private _dialog: MatDialog) {

  }

  addExpenseForm() {
    this._dialog.open(AddExpenseComponent)
  }
}

  