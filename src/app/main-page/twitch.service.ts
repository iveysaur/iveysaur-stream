import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwitchService {
  private twitchUrl = 'https://api.twitch.tv/kraken/streams/iveysaurrr';

  constructor(private http: Http) { }

  getStreamStatus(): Promise<any> {
    let authHeaders = new Headers();
    // No need to keep this secret, it isn't really needed anyway, just recommended to have one.
    authHeaders.append('Client-ID', 'olerbdsulhtdkmm9io4tryp1vcqunnc');

    return this.http.get(this.twitchUrl, {headers: authHeaders})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
