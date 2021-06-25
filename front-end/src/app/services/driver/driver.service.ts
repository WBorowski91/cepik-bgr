import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../../models/driver';
 
const baseUrl: string = 'http://localhost:64611/api/Drivers';
 
@Injectable({
  providedIn: 'root'
})
export class DriverService {
 
  constructor(private http: HttpClient) { }
 
  getAllDrivers(){
    return this.http.get(baseUrl);
  }
 
  getDriver(id: number){
    return this.http.get(`${baseUrl}/${id}`);
  }
 
  addDriver(data: Driver){
    return this.http.post(baseUrl, data);
  }
 
  editDriver(id: number, data: Driver){
    return this.http.put(`${baseUrl}/${id}`, data);
  }
 
  removeDriver(id: number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
 
}
