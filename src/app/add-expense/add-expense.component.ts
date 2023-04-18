import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.expenseForm = this.formBuilder.group({
      
      expenseName: '',
      date: '',
      expenseAmount: '',
      modeOfPayement: '',

    })
  }

  formSubmit() {
    if(this.expenseForm.valid){
      console.log(this.expenseForm.value)
    }
  }

}
