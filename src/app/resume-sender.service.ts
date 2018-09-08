import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ResumeSenderService {

  result:any;

  constructor(private http: HttpClient) {
  }

  sendRequest(cr){
    console.log(cr);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post('https://api.notalec.com:/v1/sendResume', JSON.stringify(cr), { headers: headers })
      .pipe(map(result => this.result = result));
  }
}
