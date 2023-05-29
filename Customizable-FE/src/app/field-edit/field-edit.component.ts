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
import { LookupService } from '../json-form/lookup.service';

@Component({
  selector: 'app-field-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatDialogModule],
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit {

  controlTypes: any[] = [
    { id: 'text', description: 'Text' },
    { id: 'number', description: 'Number' },
    { id: 'email', description: 'Email' },
    { id: 'phone', description: 'Phone' },
    { id: 'select', description: 'Select' },
    { id: 'checkbox', description: 'Check Box' },
    { id: 'radio-button', description: 'Radio Button' },
    { id: 'datepicker', description: 'Date Picker' },
    { id: 'textarea', description: 'Text Area' },
    { id: 'postal-code', description: 'Postal Code' },
    { id: 'page-header', description: 'Page Header' },
    { id: 'section-header', description: 'Section Header' },
    { id: 'section-sub-header', description: 'Section Sub Header' },
    { id: 'section-text', description: 'Section Text' },
  ]

  fieldNames: any[] = [
    { id: 1, controlTypeId: 1, description: 'firstName' },
    { id: 2, controlTypeId: 1, description: 'lastName' },
    { id: 3, controlTypeId: 5, description: 'dateOfBirth' },
    { id: 4, controlTypeId: 2, description: 'gender' },
    { id: 5, controlTypeId: 2, description: 'maritalStatus' },
  ]

  theForm?: FormGroup;

  get selectLists() { return this.lookupService.selectLists };

  // constructor(private formBuilder: FormBuilder) { }
  constructor(private formBuilder: FormBuilder,
    private lookupService: LookupService,
    private dialogRef: MatDialogRef<FieldEditComponent>,
    @Inject(MAT_DIALOG_DATA) public control: JsonFormControl
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
  }

  createForm() {
    console.log(this.control)
    const controlInfo = {
      label: [this.control.label, [Validators.required]],
      name: [this.control.name, [Validators.required]],
      type: [this.control.type, [Validators.required]],
      placeholder: [this.control.placeholder, [Validators.required]],
      selectList: [this.control.selectList, [Validators.required]],
      required: [this.control.validators.required],
      minLength: [this.control.validators.minLength],
      maxLength: [this.control.validators.maxLength],
      minValue: [this.control.validators.minValue],
      maxValue: [this.control.validators.maxValue],
      requiredTrue: [this.control.validators.requiredTrue],
      filterById: [this.control.filterById],
      filterByControlValue: [this.control.filterByControlValue],
      displayByControlName: [this.control.displayByControlName],
      displayByControlValue: [this.control.displayByControlValue],
    };
    this.theForm = this.formBuilder.group(controlInfo);

  }

  saveClicked() {
    let value = this.theForm!.value;
    this.control.label = value.label;
    this.control.type = value.type;
    this.control.name = value.name;
    this.control.placeholder = value.placeholder;
    this.control.validators.required = value.required;
    this.control.validators.minLength = value.minLength;
    this.control.validators.maxLength = value.maxLength;
    this.control.validators.maxValue = value.maxValue;
    this.control.validators.minValue = value.minValue;
    this.dialogRef.close(true);
  }

  cancelClicked() {
    this.dialogRef.close(false);
  }




}
