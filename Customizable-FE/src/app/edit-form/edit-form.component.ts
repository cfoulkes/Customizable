import { JsonFormControl, JsonFormData, JsonFormRow } from './../json-form/json-form.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FieldEditComponent } from '../field-edit/field-edit.component';
import { EditFormControlComponent } from '../edit-form-control/edit-form-control.component';
import { DisplayFormDialogComponent } from '../display-form-dialog/display-form-dialog.component';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  imports: [CommonModule, DragDropModule, CdkMenuModule, MatDialogModule, FieldEditComponent, EditFormComponent, EditFormControlComponent, DisplayFormDialogComponent]
})
export class EditFormComponent {

  newRowIdx = 0;

  rows: JsonFormRow[] = [
    {
      id: 0, controls: [
        { type: 'section-header', label: 'Client Information', validators: {}, name: '' }
      ]
    },
    {
      id: 1, controls: [
        { type: 'text', label: 'First Name', name: 'firstName', validators: { required: true }, placeholder: 'enter first name' }
      ]
    },
    {
      id: 2, controls: [
        { type: 'text', label: 'Last Name', name: 'lastName', validators: { required: true }, placeholder: 'enter last name' }
      ]
    },
    {
      id: 3, controls: [
        { type: 'select', label: 'Gender', name: 'gender', validators: {}, selectList: 2 },
        { type: 'select', label: 'Marital Status', name: 'maritalStatus', validators: {}, selectList: 1 }
      ]
    },
    {
      id: 4, controls: [
        { type: 'select', label: 'Country', name: 'country', validators: {}, selectList: 3 },
        { type: 'select', label: 'Province', name: 'province', validators: {}, selectList: 4, filterByControlValue: 'country' }
      ]
    },
  ];

  constructor(private dialog: MatDialog) { }

  dropInRow(event: CdkDragDrop<JsonFormControl[]>) {
    console.log(event)
    if (event.previousContainer !== event.container) {
      event.container.data.splice(event.currentIndex, 0, event.item.data);
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addRow() {
    const row = new JsonFormRow();
    row.id = this.newRowIdx;
    this.newRowIdx = this.newRowIdx + 1;
    this.rows.push(row);
  }

  addControl(row: JsonFormRow) {
    row.controls.push(new JsonFormControl({}));
  }

  deleteControlClicked(rowIdx: number, controlIdx: number) {
    this.rows[rowIdx].controls.splice(controlIdx, 1);
    console.log(this.rows)
  }

  moveUpRowClicked(id: number) {
    const rowIdx = this.rows.findIndex(r => r.id === id);

    console.log('moveUp row', id, rowIdx)
    this.moveArrayElement(this.rows, rowIdx, rowIdx - 1)
  }

  moveDownRowClicked(id: number) {
    const rowIdx = this.rows.findIndex(r => r.id === id);
    console.log('moveDown row', id, rowIdx)
    this.moveArrayElement(this.rows, rowIdx, rowIdx + 1)
  }

  moveArrayElement(arr: any[], fromIndex: number, toIndex: number) {
    if (toIndex < 0 || toIndex >= arr.length) return;

    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  deleteRowClicked(id: number) {
    const rowIdx = this.rows.findIndex(r => r.id === id);
    if (rowIdx) {
      this.rows.splice(rowIdx, 1);
    }
  }

  editControlClicked(control: JsonFormControl) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '800px';
    dialogConfig.data = control;

    const dialogRef = this.dialog.open(FieldEditComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(res => {
        if (res) {
        }
      });
  }

  displayForm() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px';
    dialogConfig.width = '1200px';
    dialogConfig.data = new JsonFormData();
    dialogConfig.data.rows = this.rows;


    const dialogRef = this.dialog.open(DisplayFormDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(res => {
        if (res) {
        }
      });
  }
}

