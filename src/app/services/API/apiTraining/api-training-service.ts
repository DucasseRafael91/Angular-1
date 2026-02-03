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

  public getTrainingById(id:number){
    return this.http.get<Training>(environment.host+'/trainings/'+id);
  }
}