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

@Component({
  selector: 'app-edit-form-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule],
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

