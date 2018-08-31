import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class PharmaService {

  constructor(private http: HttpClient, private common: CommonService) { }

  Url: Uri = new Uri();

  public Pharmas() : Observable<any>{    
    return this.http.get(this.common.GetServiceUrl(this.Url.GetPharmas)+"?from=shoppingcart");
  }
}
