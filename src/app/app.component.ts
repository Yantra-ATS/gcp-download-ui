import { Component } from '@angular/core';
import {GcpapiService} from "./gcpapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gcp-dowload';
  constructor(private apiService: GcpapiService ) {
  }

  downLoadFileToLocalFromDotNetWebApi()
  {
    this.apiService.uploadFileToGCP().subscribe((filename) => {
      this.apiService.downLoadFileToLocalFromDotNetWebApi(filename.message).subscribe((data) => {

      });
    });


  }

}
