import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SpecialistRegisterRequest {
  names: string;
  firstLastname: string;
  secondLastname?: string;
  birthDate: string;
  ciNumber: string;
  email: string;
  password: string;
  biography: string;
  certificationImg: string;
  officeUbi?: string;
  sessionCost: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:8080'
      : 'https://tragic-vere-takecare-cebbdb2d.koyeb.app';

  constructor(private http: HttpClient) {}

  registerPatient(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/v1/users/register/patient`,
      data
    );
  }

  registerSpecialist(data: SpecialistRegisterRequest): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/v1/users/register/specialist`,
      data
    );
  }

}