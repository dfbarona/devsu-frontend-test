import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-ui-modal-v1',
	standalone: true,
	imports: [NgClass],
	templateUrl: './ui-modal-v1.component.html',
	styleUrl: './ui-modal-v1.component.scss',
})
export class UiModalV1Component {
	@Output() modalSwitch: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Input() contentModal!: string;
	@Input() visible!: boolean;

	closeModal() {
		this.modalSwitch.emit(false);
	}

	confirmAction() {
		this.confirm.emit(true);
	}
}
