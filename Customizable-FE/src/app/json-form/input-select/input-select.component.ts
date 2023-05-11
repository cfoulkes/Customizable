import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonFormControl } from '../json-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input()
  formGroup?: FormGroup;

  @Input()
  control?: JsonFormControl;


  @Output()
  changed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChanged() {
    try {
      this.changed.emit(this.control);
    } catch (e) {
      console.error("Error", e);
    };
  }

}
