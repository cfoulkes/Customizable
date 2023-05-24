import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkMenuModule } from '@angular/cdk/menu';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonFormControl } from '../json-form/json-form.component';
import { SectionHeaderComponent } from '../json-form/section-header/section-header.component';
import { InputTextComponent } from '../json-form/input-text/input-text.component';
import { InputSelectComponent } from '../json-form/input-select/input-select.component';
import { InputCheckboxComponent } from '../json-form/input-checkbox/input-checkbox.component';
import { InputDatepickerComponent } from '../json-form/input-datepicker/input-datepicker.component';

@Component({
  selector: 'app-edit-form-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, InputTextComponent, InputSelectComponent, InputCheckboxComponent, InputDatepickerComponent, SectionHeaderComponent],
  templateUrl: './edit-form-control.component.html',
  styleUrls: ['./edit-form-control.component.scss']
})
export class EditFormControlComponent {

  @Input()
  control!: JsonFormControl;

  theForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const controlInfo = {
    }
    this.theForm = this.formBuilder.group(controlInfo);
  }

}

