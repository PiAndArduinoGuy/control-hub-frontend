import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SecurityConfig } from "./security-config.model";

@Injectable({providedIn: "root"})
export class SecurityMicroserviceBackendRequestsService{
  private baseUrl = window['baseUrl'];  

  constructor(private httpClient: HttpClient) {

  }

  getBase64EncodedImage(){
    return this.httpClient.get(this.baseUrl + "/annotated-image", {responseType: 'text'})
  }

  getSecurityConfig(){
    return this.httpClient.get<SecurityConfig>(this.baseUrl + "/security-config")
  }
  
}