import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ExpensesService } from '../services/expenses.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'expenseName', 'date', 'expenseAmount', 'modeOfPayment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  expenses: any = [];

  constructor(private dialog:MatDialog, private expenseService:ExpensesService){
      }

  ngOnInit(): void {
    this.getexpenses();
  }

  openAddExpenseForm(){
    const dialogref = this.dialog.open(AddExpenseComponent);
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getexpenses();
        }
      }
    })
  }

  getexpenses() {
    this.expenseService.getExpenseList().subscribe({
      next: (res: any[] | undefined) => {
        this.dataSource = new MatTableDataSource (res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
      
    })

     
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 
deleteEpenses(id: number){
  this.expenseService.deleteExpenses(id).subscribe({
    next: (res) =>{
      alert('Expenses Deleted');
      this.getexpenses();
    },
    error: console.log,
  })
}

editExpenses(data: any){
  this.dialog.open(AddExpenseComponent, {
    data: data,
  } );
}
}