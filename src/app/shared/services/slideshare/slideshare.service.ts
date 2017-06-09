import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SlideshareService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private authUrl = 'http://localhost:8080/slideshare';  // URL to web api

  constructor(private http: Http) { }

  search(username: string, password: string, orcid:string): Promise<Object> {
    const url = `${this.authUrl}/search?username=${username}&password=${password}&orcid=${orcid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
