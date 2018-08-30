import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: HttpClient, private commonservice: CommonService) { }

  Url: Uri = new Uri();

  public GetCaptcha() : Observable<any>{
    var CaptchaUrl = this.commonservice.GetServiceUrl(this.Url.GetCaptcha);    
    return this.http.get(this.commonservice.GetServiceUrl(this.Url.GetCaptcha));
  }

}
