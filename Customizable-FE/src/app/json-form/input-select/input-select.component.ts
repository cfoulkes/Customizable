import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonFormControl } from '../json-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LookupService } from '../lookup.service';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input()
  formGroup!: FormGroup;

  @Input()
  control!: JsonFormControl;


  @Output()
  changed = new EventEmitter<any>();

  get selectList() {
    if (this.control && this.control.selectList && this.lookupService) {
      return this.lookupService.getLookupsByKey(this.control.selectList!)
    } else {
      return [];
    }
  }

  constructor(private lookupService: LookupService) { }

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
