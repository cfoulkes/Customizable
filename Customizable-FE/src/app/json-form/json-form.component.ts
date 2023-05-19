import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputSelectComponent } from "./input-select/input-select.component";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { InputDatepickerComponent } from "./input-datepicker/input-datepicker.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";




@Component({
  selector: 'app-json-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatDialogModule, InputTextComponent, InputSelectComponent, InputCheckboxComponent, InputDatepickerComponent, SectionHeaderComponent],

  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {

  @Input()
  jsonFormData?: JsonFormData;

  theForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    console.log(`JsonFormComponent onInit`, this.jsonFormData)
    this.createForm()
  }

  createForm() {
    if (!this.jsonFormData) return;

    const controls = this.jsonFormData.rows.flatMap(row => row.controls);


    controls.forEach(control => {
      //create validator collection for each control
      const validators: any[] = [];
      if (control.validators) {
        for (const [key, value] of Object.entries(control.validators)) {
          switch (key) {
            case 'required':
              validators.push(Validators.required);
              break;
            case 'requiredTrue':
              validators.push(Validators.requiredTrue);
              break;
            case 'email':
              validators.push(Validators.email);
              break;
            case 'minValue':
              validators.push(Validators.min(value));
              break;
            case 'maxValue':
              validators.push(Validators.max(value));
              break;
            case 'minLength':
              validators.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validators.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validators.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              validators.push(Validators.nullValidator(value));
              break;
          }
        }
      }

      this.theForm.addControl(
        control.name,
        new FormControl('', validators)
      );
    });
  }

  onSubmit() {
    console.log('Form valid: ', this.theForm.valid);
    console.log('Form values: ', this.theForm.value);
  }

}

export class JsonFormControlOptions {
  min?: string;
  max?: string;
  minLength?: string;
  maxLength?: string;
  step?: string;
  icon?: string;
}

export class JsonFormValidators {
  minValue?: number;
  maxValue?: number;
  required?: boolean;
  requiredTrue?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}


export class JsonFormControl {
  name: string;
  placeholder?: string;
  hint?: string;
  label?: string;
  type: string;
  selectList?: number;
  options?: JsonFormControlOptions;
  validators: JsonFormValidators;

  constructor(values: any) {
    this.name = values.name;
    this.placeholder = values.placeholder;
    this.hint = values.hint;
    this.label = values.label;
    this.type = values.type;
    this.selectList = values.selectList;
    this.validators = values.validators ?? new JsonFormValidators();
  }
}

export class JsonFormRow {
  id: number = 0;
  controls: JsonFormControl[] = [];
}

export class JsonFormData {
  rows: JsonFormRow[] = [];
}


