import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { JsonFormControl } from '../json-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LookupService } from '../lookup.service';
import { Subscription } from 'rxjs';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
    selector: 'app-input-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule],
    templateUrl: './input-select.component.html',
    styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent extends InputBaseComponent implements OnInit, OnDestroy {

    // @Input()
    // formGroup!: FormGroup;

    // @Input()
    // control!: JsonFormControl;


    // @Output()
    // changed = new EventEmitter<any>();

    selectList: any[] = [];
    valueChangeSubscription?: Subscription;

    constructor(private lookupService: LookupService) {
        super();
    }

    override ngOnInit() {
        super.ngOnInit();

        if (this.control && this.control.selectList && this.lookupService) {
            if (this.control.filterByControlValue) {
                //todo - do we need any initial setting here?
                this.conditionalControlChange();
            } else if (this.control.filterById) {
                this.selectList = this.lookupService.getLookupsByKeyAndFilterId(this.control.selectList!, this.control.filterById!);
            } else {
                this.selectList = this.lookupService.getLookupsByKey(this.control.selectList!)
            }
        }
    }

    private conditionalControlChange(): void {
        const conditionalControl = this.formGroup.get(this.control.filterByControlValue!);
        if (conditionalControl) {
            this.valueChangeSubscription = conditionalControl.valueChanges.subscribe(value => {
                this.formGroup.get(this.control.name)?.setValue(undefined);
                this.selectList = this.lookupService.getLookupsByKeyAndFilterId(this.control.selectList!, value);
            });
        }
    }

    ngOnDestroy(): void {
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }

    // onChanged(event: any) {
    //     try {
    //         this.changed.emit(this.control);
    //     } catch (e) {
    //         console.error("Error", e);
    //     };
    // }

}
