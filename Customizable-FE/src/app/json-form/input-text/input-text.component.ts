import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { InputBaseComponent } from '../input-base/input-base.component';


@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends InputBaseComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
  }

}
