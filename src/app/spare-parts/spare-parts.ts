import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';

export interface ISparePart{
  id: number;
  partCode: string;
  partName: string;
  price: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spare-parts.html',
  styleUrl: './spare-parts.css',
})
export class SpareParts {

  constructor(private authService: AuthService){}

  private refreshParts$ = new BehaviorSubject<void>(undefined);

  parts$ = this.refreshParts$.pipe(
    switchMap(() => this.authService.serviceGetAllSpareParts())
  );
}
