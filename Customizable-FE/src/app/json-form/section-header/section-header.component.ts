import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { JsonFormControl } from '../json-form.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input()
  control!: JsonFormControl;


  constructor() { }

  ngOnInit() {
  }

}
