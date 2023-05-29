import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormControl } from '../json-form.component';
import { Subscription } from 'rxjs';

@Component({
    template: '',
    standalone: true,
    imports: []
})
export class InputBaseComponent implements OnInit {

    @Input()
    formGroup!: FormGroup;

    @Input()
    control!: JsonFormControl;


    @Output()
    changed = new EventEmitter<any>();

    displayComponent: boolean = true;
    displayValueChangeSubscription?: Subscription;


    constructor() {
    }

    ngOnInit() {
        if (this.control && this.control.displayByControlName && this.control.displayByControlValue) {
            this.initializeConditionalDisplay();
        }
    }

    private initializeConditionalDisplay(): void {
        const conditionalControl = this.formGroup.get(this.control.displayByControlName!);
        if (conditionalControl) {
            this.displayComponent = false;
            this.displayValueChangeSubscription = conditionalControl.valueChanges.subscribe(value => {
                this.displayComponent = this.control.displayByControlValue === value;
            });
        }
    }


    onChanged(event: any) {
        try {
            this.changed.emit(this.control);
        } catch (e) {
            console.error("Error", e);
        };
    }

}
