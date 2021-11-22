import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SecurityMicroserviceBackendRequestsService {
  private baseUrl = window['baseUrl'];

  constructor(private httpClient: HttpClient) {

  }

  getBase64EncodedImage() {
    return this.httpClient.get(this.baseUrl + '/annotated-image', {responseType: 'text'});
  }

  getSecurityConfig() {
    return this.httpClient.get<{ securityState: string, securityStatus: string }>(this.baseUrl + '/security-config');
  }

  silenceAlarm() {
    return this.httpClient.post<{ securityState: string, securityStatus: string }>(this.baseUrl + '/silence-alarm', null);
  }

  armAlarm() {
    return this.httpClient.post<{ securityState: string, securityStatus: string }>(this.baseUrl + '/arm-alarm', null);
  }

}
