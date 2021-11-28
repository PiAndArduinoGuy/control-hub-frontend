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

  armAlarm() {
    this.clearPreviousOutput();
    this.securityMicroserviceBackendRequestsService.armAlarm().subscribe(
      response => {
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
    this.clearPreviousOutput();
    this.securityMicroserviceBackendRequestsService.getBase64EncodedImage().subscribe(
      response => {
        console.log('Received new annotated image.');
        this.base64JpegEncodedImage = 'data:image/jpeg;base64,' + response.base64EncodedImage;
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(error);
        console.log(this.zalandoProblem);
      }
    );
  }

  silenceAlarm() {
    this.clearPreviousOutput();
    this.securityMicroserviceBackendRequestsService.silenceAlarm().subscribe(
      response => {
        console.log('Alarm silenced, received updated security config.');
        this.securitySilenced.emit(response);
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(this.zalandoProblem);
      }
    );
  }

  disarmAlarm() {
    this.clearPreviousOutput();
    this.securityMicroserviceBackendRequestsService.disarmAlarm().subscribe(
      response => {
        console.log('Alarm disarmed, received updated security config.');
        this.securitySilenced.emit(response);
      },
      error => {
        this.zalandoProblem = error.error;
        console.log(this.zalandoProblem);
      }
    );
  }

  clearPreviousOutput() {
    this.clearBase64JpegEncodedImage();
    this.clearZalandoProblem();
  }

  clearBase64JpegEncodedImage() {
    this.base64JpegEncodedImage = null;
  }

  clearZalandoProblem() {
    this.zalandoProblem = null;
  }
}
