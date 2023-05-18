import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { JsonFormComponent, JsonFormData } from '../json-form/json-form.component';

@Component({
  selector: 'app-display-form-dialog',
  standalone: true,
  templateUrl: './display-form-dialog.component.html',
  styleUrls: ['./display-form-dialog.component.css'],
  imports: [CommonModule, MatDialogModule, JsonFormComponent]
})
export class DisplayFormDialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DisplayFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JsonFormData
  ) { }

  ngOnInit() {
    console.log(`DisplayFormDialogComponent`, this.data)
  }

}
