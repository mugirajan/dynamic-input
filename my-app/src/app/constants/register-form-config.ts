import { IForm } from "../interface/form.interface"


export const registerFormConfig: IForm = {
  formTitle: 'Gym Registration Form',
  saveBtnTitle: 'Confirm Registration',
  resetBtnTitle: 'Reset',
  formControls: [
    {
      "name": "firstName",
      "label": "First name",
      "value": "",
      "placeholder": "",
      "class": "col-md-6",
      "type": "text",
      "validators": [
        {
          "validatorName": "required",
          "required":true,
          "message": "First name should be 8-15 characters in uppercase"
        },
        {
          "validatorName": "required",
          "message": "First Name is Required"
        },
      ]
    },
    {
        "name": "lastName",
        "label": "Last name",
        "value": "",
        "placeholder": "",
        "class": "col-md-6",
        "type": "text",
        "validators": [
          {
            "validatorName": "required",
            "required": true,
            "message": "Last name should be 8-15 characters in uppercase"
          },
          {
            "validatorName": "required",
            "message": "Last Name is Required"
          },
        ]
      },
      {
        "name": "email",
        "label": "Email",
        "value": "",
        "placeholder": "",
        "class": "col-md-6",
        "type": "email",
        "validators": [
          {
            "validatorName": "pattern",
            "required": true,
            "message": "Email Name is Required"
          },
          {
            "validatorName": "required",
            "email":"email",
            "message": "Email Name is Required"
          },
        ]
      },
      {
        "name": "mobile",
        "label": "Mobile",
        "value": "",
        "placeholder": "",
        "class": "col-md-6",
        "type": "email",
        "validators": [
          {
            "validatorName": "required",
            "required": true,
            "message": "Mobile Number is Required"
          },
          {
            "validatorName": "required",
            "message": "Mobile Number is Required"
          },
        ]
      },
  ]
}