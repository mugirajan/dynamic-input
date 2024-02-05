import { FormControl } from "@angular/forms"

export interface IForm{
  formTitle: string
  saveBtnTitle?: string
  resetBtnTitle?: string
  formControls: IFormControl[]
}

 export interface IFormControl {
    name: string
    label: string
    value: string
    placeholder?: string
    options?: IOptions[]
    radioOptions?: string[]
    class: string
    type: string
    validators: IValidator[]
  }

interface IValidator {
    validatorName?: string
    required?: boolean
    message?: string
    pattern?: string
    minLength?: number
    maxLength?: number
    email?: string
  }

interface IOptions{
  id?: number,
  month?:string
}