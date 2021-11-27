import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SecurityMicroserviceBackendRequestsService} from '../securuty-micro-service-backend-requests.service';


@Component({
  selector: 'app-security-controls',
  templateUrl: './security-controls.component.html',
  styleUrls: ['./security-controls.component.scss']
})
export class SecurityControlsComponent implements OnInit {

  base64JpegEncodedImage = null;
  zalandoProblem: { title: string, status: number, detail: string } = null;

  @Output() securityArmed = new EventEmitter<{ securityState: string, securityStatus: string }>();
  @Output() securitySilenced = new EventEmitter<{ securityState: string, securityStatus: string }>();

  constructor(private securityMicroserviceBackendRequestsService: SecurityMicroserviceBackendRequestsService) {
  }

  ngOnInit(): void {
  }

  armSecurity() {
    this.securityMicroserviceBackendRequestsService.armAlarm().subscribe(
      response => {
        this.zalandoProblem = null;
        console.log('Alarm armed, received updated security config.');
        this.securityArmed.emit(response);
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(this.zalandoProblem);
      }
    );
  }

  viewAnnotatedImage() {
    this.securityMicroserviceBackendRequestsService.getBase64EncodedImage().subscribe(
      response => {
        this.zalandoProblem = null;
        console.log('Received new annotated image.');
        this.base64JpegEncodedImage = 'data:image/jpeg;base64,' + response;
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(this.zalandoProblem);
      }
    );
  }

  silenceAlarm() {
    this.securityMicroserviceBackendRequestsService.silenceAlarm().subscribe(
      response => {
        this.zalandoProblem = null;
        console.log('Alarm silenced, received updated security config.');
        this.securitySilenced.emit(response);
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(this.zalandoProblem);
      }
    );
  }

}
