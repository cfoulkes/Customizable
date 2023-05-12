import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonFormControl } from '../json-form.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule],
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {

  @Input()
  formGroup!: FormGroup;

  @Input()
  control!: JsonFormControl;


  @Output()
  changed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChanged(event: any) {
    try {
      this.changed.emit(this.control);
    } catch (e) {
      console.error("Error", e);
    };
  }

}
