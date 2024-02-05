// form-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formFields: { id: string; label: string }[] = [];
  formData: any = {}; // Add this line to declare formData property

  updateFields(fields: { id: string; label: string }[]) {
    this.formFields = fields;
  }

  updateData(data: any) {
    this.formData = { ...this.formData, ...data };
  }
}
