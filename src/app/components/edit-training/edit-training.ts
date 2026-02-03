import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiTrainingService } from '../../services/API/apiTraining/api-training-service';
import { Training } from '../trainings/trainings.model';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-edit-training',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './edit-training.html',
  styleUrls: ['./edit-training.css'],
})
export class EditTrainingComponent implements OnInit {

  tr: Training = {
    id: '',
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    image: '',
    category: ''
  };
  id!: number;

  constructor(
    private readonly apiTrainingService: ApiTrainingService,
    private readonly route: ActivatedRoute,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiTrainingService.getTrainingById(this.id.toString()).subscribe({
      next: (data) => {
        this.tr = data;
        this.changeDetector.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching training by ID:', err);
      }
    });
  }

      OnUpdateTraining(training: Training) {
      this.apiTrainingService.updateTraining(training).subscribe({
        next: (data) => {
          alert('Formation mise à jour avec succès !');
        },
        error: (err) => {
          alert('Erreur lors de la mise à jour de la formation.');
        }
      });

    }

}
