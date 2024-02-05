// form1.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  formData = {
    name: '',
    email: ''
  };

  constructor(private dataService: DataService) {}

  submitForm() {
    console.log('Form1 submitted:', this.formData);
    this.dataService.updateForm1Data(this.formData);
  }
}
