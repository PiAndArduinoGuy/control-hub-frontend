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

  onSecurityConfigUpdate(securityConfig: {securityState: string; securityStatus: string}) {
    console.log('Security config updated. Acting on emitted event.');
    this.securityConfig = securityConfig;
  }
}
