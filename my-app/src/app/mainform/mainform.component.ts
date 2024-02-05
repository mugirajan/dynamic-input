// mainform.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent implements OnInit {
  formData1: any = {};
  formData2: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.form1Data$.subscribe(data => {
      this.formData1 = data;
    });

    this.dataService.form2Data$.subscribe(data => {
      this.formData2 = data;
    });
  };
  public input1Value: string = '';
  public input2Value: string = '';
}

