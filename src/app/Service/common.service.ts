import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public GetServiceHostUrl() : void{
    this.httpClient.get('/api/v1/serviceinfo').subscribe((data) => {
      var Url = String(data);
      localStorage.setItem("serviceurl", Url);
    })
  }

  public ServiceUrl() : string{
    return localStorage.getItem('serviceurl');
  }
}
