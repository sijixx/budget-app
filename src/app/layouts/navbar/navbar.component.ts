import { Component } from '@angular/core';
import { AddExpenseComponent } from 'src/app/add-expense/add-expense.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) { }
  addExpenseForm() {
    this.dialog.open(AddExpenseComponent)
  }

}
