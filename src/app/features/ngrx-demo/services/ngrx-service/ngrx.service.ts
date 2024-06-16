import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgrxService {
  constructor(private httpClient: HttpClient) {}

  getAllData = () => {
    return this.httpClient.get('./assets/data/user-list.json');
  };
}
