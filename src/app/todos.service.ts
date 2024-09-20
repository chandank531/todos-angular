import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/'
  constructor() { }

  async getData () {
    try {
      const response = await axios.get(this.apiUrl + 'todos');
      return response.data;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  
  }

  async createData (data: any) {
    try {
      const response = await axios.post(this.apiUrl + 'posts', data);
      return response.data;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }
}
