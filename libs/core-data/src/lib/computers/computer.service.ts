import { Computer } from './computer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
model = 'computers'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(computer: Computer) {
    return this.httpClient.post(this.getUrl(), computer);
  }

  delete(computer: Computer) {
    return this.httpClient.delete(this.getUrlForId(computer.id));
  }

  update(computer: Computer) {
    return this.httpClient.put(this.getUrlForId(computer.id), computer);
  }
}
