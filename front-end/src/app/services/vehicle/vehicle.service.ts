import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vechicle } from '../../models/vechicle';
 
const baseUrl: string = 'http://localhost:64611/api/vechicles/';
 
@Injectable({
  providedIn: 'root'
})
export class VechicleService {
 
  constructor(private http: HttpClient) { }
 
getAllVechicles(){
  return this.http.get(baseUrl);
}
 
getVechicle(id: number){
  return this.http.get(`${baseUrl}/${id}`);
}
 
addVechichle(data: Vechicle){
  return this.http.post(baseUrl, data);
}
 
editVechichle(id: number, data: Vechicle){
  return this.http.put(`${baseUrl}/${id}`, data);
}
 
removeVechichle(id: number){
  return this.http.delete(`${baseUrl}/${id}`);
}
 
}
 