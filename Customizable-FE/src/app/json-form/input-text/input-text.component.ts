import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { JsonFormControl } from '../json-form.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

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
