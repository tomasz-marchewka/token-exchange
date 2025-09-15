import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../types/tokens.types';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  private http = inject(HttpClient);

  fetchTokens(): Observable<Token[]> {
    return this.http.get<Token[]>('mocks/tokens.json');
  }
}
