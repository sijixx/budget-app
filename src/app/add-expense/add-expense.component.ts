import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpensesService } from '../services/expenses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expenseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private expenses: ExpensesService, 
    private dialogref: MatDialogRef<AddExpenseComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
    this.expenseForm = this.formBuilder.group({
      
      expenseName: '',
      date: '',
      expenseAmount: '',
      modeOfPayment: '',

    })
  }

  ngOnInit (): void{
    this.expenseForm.patchValue(this.data)
  }

  formSubmit() {
    if (this.expenseForm.valid) {
      if(this.data){
        this.expenses.updateExpense(this.data.id, this.expenseForm.value).subscribe({
          next: (value: any) => {
            alert("Expense Updated");
            this.dialogref.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
    }
    else {
      this.expenses.addexpense(this.expenseForm.value).subscribe({
        next: (value: any) => {
          alert("Expense added successfully");
          this.dialogref.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }

}
