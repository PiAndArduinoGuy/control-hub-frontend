import { Component, OnInit } from '@angular/core';
import { SecurityMicroserviceBackendRequestsService } from '../securuty-micro-service-backend-requests.service';


@Component({
  selector: 'app-security-options',
  templateUrl: './security-options.component.html',
  styleUrls: ['./security-options.component.scss']
})
export class SecurityOptionsComponent implements OnInit {

  base64JpegEncodedImage = null

  constructor(private securityMicroserviceBackendRequestsService: SecurityMicroserviceBackendRequestsService) { }

  ngOnInit(): void {
  }

  armSecurity() {
    console.log('Send request to arm security.')
  }

  viewAnnotatedImage() {
    this.securityMicroserviceBackendRequestsService.getBase64EncodedImage().subscribe(
      response => {
        console.log('Received new annotated image.')
        this.base64JpegEncodedImage = 'data:image/jpeg;base64,' + response
      }
    );
  }

  silenceAlarm() {
    console.log('Send request to silence alarm here.')
  }

}
