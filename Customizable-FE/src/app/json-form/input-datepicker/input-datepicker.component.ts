import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
	selector: 'app-input-datepicker',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
	templateUrl: './input-datepicker.component.html',
	styleUrls: ['./input-datepicker.component.scss']
})
export class InputDatepickerComponent extends InputBaseComponent implements OnInit {

	constructor() {
		super();
	}

	override ngOnInit() {
		super.ngOnInit();
	}

}
