import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForm } from '../interface/form.interface';
import { IFormControl } from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  dynamicFormGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.dynamicFormGroup = this.fb.group({}, { updateOn: 'submit' });
  }


  ngOnInit(): void {
    if (this.form?.formControls) {
      const formGroup: any = {};
      this.form.formControls.forEach((control: any) => {
        const controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: any) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }


  onSubmit() {
    if (this.dynamicFormGroup.valid) {
      console.log('Form values:', this.dynamicFormGroup.value);
    }
  }


  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getValidationError(control:IFormControl): string{
    let errorMessage = '';
    const myFormControl = this.dynamicFormGroup.get(control.name);
    control.validators.forEach((val)=>{
      if(myFormControl?.hasError(val.validatorName as string)){
        errorMessage = val.message as string
      }
    });
    return errorMessage;
  }
}
