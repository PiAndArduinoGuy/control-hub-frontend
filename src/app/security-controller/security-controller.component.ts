import {Component, OnInit} from '@angular/core';
import {SecurityMicroserviceBackendRequestsService} from './securuty-micro-service-backend-requests.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-security-controller',
  templateUrl: './security-controller.component.html',
  styleUrls: ['./security-controller.component.scss']
})
export class SecurityControllerComponent implements OnInit {
  securityBreached = false;
  securityConfig: { securityState: string, securityStatus: string };
  zalandoProblemDetail: string;
  newAnnotatedImage: string;

  constructor(private securityMicroserviceBackendRequestsService: SecurityMicroserviceBackendRequestsService) {
  }

  ngOnInit(): void {
    this.getLatestSecurityConfig();
    interval(5000).subscribe(() => {
      console.log('Performing check for latest security config');
      this.getLatestSecurityConfig();
    });
  }

  getLatestSecurityConfig() {
    this.securityMicroserviceBackendRequestsService.getSecurityConfig().subscribe(
      (securityConfig) => {
        console.log('Received security config.' + securityConfig);
        this.securityConfig = securityConfig;
      }
    );
  }

  onSecurityConfigUpdated(securityConfig: { securityState: string; securityStatus: string }) {
    console.log('Security config updated. Reacting to event.');
    this.securityConfig = securityConfig;
  }

  onSecurityControlsOutputUpdate(securityControlsOutput: { outputType: string, output: string }) {
    if (securityControlsOutput.outputType === 'zalandoProblem') {
      this.zalandoProblemDetail = securityControlsOutput.output;
      this.newAnnotatedImage = null;
    } else if (securityControlsOutput.outputType === 'newAnnotatedImage'){
      this.newAnnotatedImage = 'data:image/jpeg;base64,' + securityControlsOutput.output;
      this.zalandoProblemDetail = null;
    } else if (securityControlsOutput.outputType === 'successArmDisarmSilenceRequest'){
      this.newAnnotatedImage = null;
      this.zalandoProblemDetail = null;
    }
  }
}
