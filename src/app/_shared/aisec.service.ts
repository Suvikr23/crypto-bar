import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

@Injectable()
export class AisecService {
  headers: Headers;
  options: RequestOptions;
  private API_URL = environment.apiUrl;
  private SKILLS_URL = environment.skillsUrl;
  private BACK_URL = environment.backgroundsUrl;
  private PATCH_URL = environment.patchUrl;


  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getOppData() {
    return this.http.get(this.API_URL)
      .map((res: Response) => res.json())
      .do((res: Response) => { console.log(res) });
  }

  getSkillsData() {
    return this.http.get(this.SKILLS_URL)
      .map((res: Response) => res.json())
      .do((res: Response) => { /*console.log('skills -- ' + res)*/ });
  }

  getBackgroundsData() {
    return this.http.get(this.BACK_URL)
      .map((res: Response) => res.json())
      .do((res: Response) => { /*console.log('backgrounds -- ' + res)*/ });
  }

  getPatchService(param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .patch(this.PATCH_URL, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
