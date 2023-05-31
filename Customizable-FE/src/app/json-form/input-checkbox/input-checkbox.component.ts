import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
    selector: 'app-input-checkbox',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule],
    templateUrl: './input-checkbox.component.html',
    styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends InputBaseComponent implements OnInit {

    constructor() {
        super();
    }

    override ngOnInit() {
        super.ngOnInit();
    }

}
