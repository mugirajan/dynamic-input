// form2.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  formData = {
    phone: '', 
    // ... other form fields
  };


  constructor(private dataService: DataService) {}

  submitFormm() {
   

    console.log('Form2 submitted:', this.formData);
    this.dataService.updateForm2Data(this.formData);

    
  }
}
