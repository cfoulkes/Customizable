import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { JsonFormControl } from '../json-form/json-form.component';

@Component({
  selector: 'app-field-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatDialogModule],
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit {

  controlTypes: any[] = [
    { id: 1, description: 'Text' },
    { id: 2, description: 'Select' },
    { id: 3, description: 'Check Box' },
    { id: 4, description: 'Radio Button' },
    { id: 5, description: 'Date Picker' },
    { id: 6, description: 'Text Area' },
  ]

  fieldNames: any[] = [
    { id: 1, controlTypeId: 1, description: 'firstName' },
    { id: 2, controlTypeId: 1, description: 'lastName' },
    { id: 3, controlTypeId: 5, description: 'dateOfBirth' },
    { id: 4, controlTypeId: 2, description: 'gender' },
    { id: 5, controlTypeId: 2, description: 'maritalStatus' },
  ]

  maritalStatuses: any[] = [
    { id: 1, description: 'Single' },
    { id: 2, description: 'Married' },
    { id: 3, description: 'Common Law' },
    { id: 4, description: 'Separated' },
    { id: 5, description: 'Divorced' },
    { id: 6, description: 'Widowed' },
  ]

  theForm?: FormGroup;

  // constructor(private formBuilder: FormBuilder) { }
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FieldEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JsonFormControl
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
  }

  createForm() {
    console.log(this.data)
    const controlInfo = {
      label: [this.data.label, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      type: [this.data.type, [Validators.required]],
      required: [this.data.required, [Validators.required]],
      placeholder: [this.data.placeholder, [Validators.required]],
    }
    this.theForm = this.formBuilder.group(controlInfo);

  }

  saveClicked() {
    let value = this.theForm!.value;
    this.data.label = value.label;
    this.data.type = value.type;
    this.data.name = value.name;
    this.data.required = value.required;
    this.data.placeholder = value.placeholder;
    this.dialogRef.close(true);
  }

  cancelClicked() {
    this.dialogRef.close(false);
  }




}
