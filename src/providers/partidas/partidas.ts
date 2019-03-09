import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PartidasProvider {

  apiUrl = 'http://localhost:8080/api/partidas/';
  convidados: any;

  constructor(public http: HttpClient) {
    console.log('Hello PartidasProvider Provider');
  }

  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"")
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });

  }

  save(partida) {
    let data = JSON.stringify(partida);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json' }})
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(partida);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Partida {
  id: number;
  time1: string;
  time2: string;
  local: string;
}