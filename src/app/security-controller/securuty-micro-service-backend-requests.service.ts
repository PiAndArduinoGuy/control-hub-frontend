import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SecurityMicroserviceBackendRequestsService {
  private baseUrl = window['baseUrl'];

  constructor(private httpClient: HttpClient) {

  }

  getBase64EncodedImage() {
    return this.httpClient.get<{ base64EncodedImage: string }>(this.baseUrl + '/annotated-image');
  }

  getSecurityConfig() {
    return this.httpClient.get<{ securityState: string, securityStatus: string }>(this.baseUrl + '/security-config');
  }

  silenceAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.baseUrl + '/silence-alarm', null);
  }

  armAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.baseUrl + '/arm-alarm', null);
  }

  disarmAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.baseUrl + '/disarm-alarm', null);
  }

}
