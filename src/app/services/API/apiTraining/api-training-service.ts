import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../../../components/trainings/trainings.model';
import { environment } from '../../../Environnement';

@Injectable({
  providedIn: 'root',
})
export class ApiTrainingService {

  constructor(private readonly http:HttpClient) { }

  public getTrainings(){
    return this.http.get<Training[]>(environment.host+'/trainings');
  }

    public createTraining(training: Training) {
    return this.http.post<Training>(environment.host+'/trainings', training);
  }

  public getTrainingById(id:number){
    return this.http.get<Training>(environment.host+'/trainings/'+id);
  }

    public deleteTraining(id:number){
    return this.http.delete(environment.host+'/trainings/'+id);
  }

  public updateTraining(training: Training){
    return this.http.put<Training>(environment.host+'/trainings/'+training.id, training);
  }
}