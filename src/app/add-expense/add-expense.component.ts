import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpensesService } from '../services/expenses.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private expenses: ExpensesService, private dialogref: DialogRef<AddExpenseComponent> ) {
    this.expenseForm = this.formBuilder.group({
      
      expenseName: '',
      date: '',
      expenseAmount: '',
      modeOfPayment: '',

    })
  }

  formSubmit() {
    if(this.expenseForm.valid){
      this.expenses.addexpense(this.expenseForm.value).subscribe({
        next: (value: any) => {
          alert("Expense added successfully");
          this.dialogref.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }

}
