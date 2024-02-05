import { IForm } from "../interface/form.interface"


export const loginFormConfig: IForm = {
  formTitle: '  Login Form',
  saveBtnTitle: 'login',
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
          "message": "*"
        },
        {
          "validatorName": "minlength",
          "minLength":5,
          "message": "First name should be 8-15 characters in uppercase"
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
            "required":true,
            "message": "Last Name is Required"
          },
          {
            "validatorName": "minlength",
            "minLength":5,
            "message": "  Minimum 5 characters"
          },
        ]
      },
      {
        "name": "gender",
        "label": "Gender",
        "value": "",
        "placeholder": "",
        "class": "col-md-6",
        "radioOptions":[
          "Male",
          "Female"
        ],
        "type": "radio",
        "validators": [
          {
            "validatorName": "required",
            "required":true,
            "message": "Gender is Required"
          },
          
        ]
      },
      {
        "name": "duration",
        "label": "Duration",
        "value": "",
        "placeholder": "",
        "class": "col-md-6",
        "options":[
          {
            "id":1,
            "month":"jan-jun"
          },
          {
            "id":2,
            "month":"jul-dec"
          }
        ],
        "type": "select",
        "validators": [
          {
            "validatorName": "required",
            "required":true,
            "message": "Duration is Required"
          },
          
        ]
      }
  ]
}