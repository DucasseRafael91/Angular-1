import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Training } from '../trainings/trainings.model';

@Component({
  selector: 'app-training-modal',
  standalone: true,
  templateUrl: './training-modal.html',
  styleUrls: ['./training-modal.css'],
})
export class TrainingModalComponent {

  constructor(
    public dialogRef: MatDialogRef<TrainingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public training: Training
  ) {}

  closeModal() {
    this.dialogRef.close();
  }
}
