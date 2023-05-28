import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormControl } from '../json-form.component';

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
