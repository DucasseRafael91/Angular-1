import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiTrainingService } from '../../services/API/apiTraining/api-training-service';
import { NavBarComponent } from '../navbar/navbar';
import { Training } from '../trainings/trainings.model';

@Component({
  selector: 'app-create-training',
  imports: [FormsModule, CommonModule, NavBarComponent],
  templateUrl: './create-training.html',
  styleUrl: './create-training.css',
})
export class CreateTraining implements OnInit {

  constructor(private readonly apiTrainingService: ApiTrainingService) {}

  ngOnInit(): void {
    this.getAllTrainings();
  }

  tr: Training = new Training(0, '', '', 0, 0, '', '');
  listTrainings: Training[] = [];

  getAllTrainings() {
    this.apiTrainingService.getTrainings().subscribe({
      next: (data) => {
        this.listTrainings = data;
      },
      error: (err) => {
        console.error('Error fetching trainings:', err);
      }
    });
  }

    OnSaveTraining(training: Training) {
      training.id = this.listTrainings.length + 1;
      training.quantity = 1;
      this.apiTrainingService.createTraining(training).subscribe({
        next: (data) => {
          alert('Formation créée avec succès !');
        },
        error: (err) => {
          alert('Erreur lors de la création de la formation.');
        }
      });
    }

}
