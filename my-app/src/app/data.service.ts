// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private form1Data = new BehaviorSubject<any>({});
  form1Data$ = this.form1Data.asObservable();

  private form2Data = new BehaviorSubject<any>({});
  form2Data$ = this.form2Data.asObservable();

  updateForm1Data(data: any) {
    this.form1Data.next(data);
  }

  updateForm2Data(data: any) {
    this.form2Data.next(data);
  }
}
