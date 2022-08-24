import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SecurityMicroserviceBackendRequestsService {
  private securityMicroServiceBaseUrl = window['securityMicroServiceBaseUrl'];

  constructor(private httpClient: HttpClient) {

  }

  getBase64EncodedImage() {
    return this.httpClient.get<{ base64EncodedImage: string }>(this.securityMicroServiceBaseUrl + '/annotated-image');
  }

  getSecurityConfig() {
    return this.httpClient.get<{ securityState: string, securityStatus: string }>(this.securityMicroServiceBaseUrl + '/security-config');
  }

  silenceAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.securityMicroServiceBaseUrl + '/silence-alarm', null);
  }

  armAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.securityMicroServiceBaseUrl + '/arm-alarm', null);
  }

  disarmAlarm() {
    return this.httpClient.put<{ securityState: string, securityStatus: string }>(this.securityMicroServiceBaseUrl + '/disarm-alarm', null);
  }

}
