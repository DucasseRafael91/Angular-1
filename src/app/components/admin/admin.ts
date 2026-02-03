import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../navbar/navbar';
import { ApiTrainingService } from '../../services/API/apiTraining/api-training-service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, NavBarComponent],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {

  listTrainings: any[] = []; 

  constructor(private readonly apiTrainingService: ApiTrainingService, private changeDetector: ChangeDetectorRef, private readonly router: Router) {}

  ngOnInit(): void {
    this.getAllTrainings();
  }

  onClickAddTraining() {
    this.router.navigate(['/create']);
  }

  onEditTraining(training: any) {
    this.router.navigate(['/edit', training.id]);
  }

  getAllTrainings() {
    this.apiTrainingService.getTrainings().subscribe({
      next: (data) => {
        this.listTrainings = data;
        this.changeDetector.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching trainings:', err);
      }
    });
  }

  onDeleteTraining(id: string) {
    this.apiTrainingService.deleteTraining(id).subscribe({
      next: () => {
        this.listTrainings = this.listTrainings.filter(t => t.id !== id); 
      },
      error: (err) => {
        console.error('Error deleting training:', err);
      }
    });
  }
}
