import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  serviceGetAllSpareParts(): Observable<any> {
    return this.http.get(
      'https://lital1.onrender.com/api/personalarea/showAllSpareParts'
    );
  }
}
