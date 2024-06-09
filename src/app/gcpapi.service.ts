import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GcpapiService {

  constructor(private httpClient: HttpClient) { }

  downLoadFileToLocalFromDotNetWebApi(fileName:string) {
    return this.httpClient.get(`http://localhost:5158/dotnetapi/${fileName}`); // Example API endpoint
  }
  uploadFileToGCP()
  {
    return this.httpClient.post<any>('http://localhost:8080/api/excel/uploadFileToGCS',{});
  }

}
