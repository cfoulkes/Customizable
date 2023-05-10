import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	constructor(private router: Router) { }

	editFormClicked() {
		this.router.navigate(['/editForm']);
	}

	custom1Clicked() {
		this.router.navigate(['/custom1']);
	}
}
