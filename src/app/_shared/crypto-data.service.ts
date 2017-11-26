import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Crypto } from '../crypto';

@Injectable()
export class CryptoDataService {
  private url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

  constructor(private http: Http) { }

  getCryptoData(): Observable<any> {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }
}
