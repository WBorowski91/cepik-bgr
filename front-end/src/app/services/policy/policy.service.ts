import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../../models/policy';
 
const baseUrl: string = 'http://localhost:64611/api/Policies';
 
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
 
  constructor(private http: HttpClient) { }
  getAllPolicies(){
    return this.http.get(baseUrl);
  }
 
  getPolicy(id: number){
    return this.http.get(`${baseUrl}/${id}`);
  }
 
  addPolicy(data: Policy){
    return this.http.post(baseUrl, data);
  }
 
  editPolicy(id: number, data: Policy){
    return this.http.put(`${baseUrl}/${id}`, data);
  }
 
  removePolicy(id: number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
 
}
