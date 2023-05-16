import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JsonFormControl } from '../json-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-input-datepicker',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './input-datepicker.component.html',
    styleUrls: ['./input-datepicker.component.scss']
})
export class InputDatepickerComponent implements OnInit {

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
