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

  onSecurityArmed(securityConfig: { securityState: string, securityStatus: string }) {
    console.log('Security was armed. Will update security-dashboard component. The security config is not set to - securityState: ' + securityConfig.securityState + ' securityStatus: ' + securityConfig.securityStatus);
    this.securityConfig = securityConfig;
  }

  onAlarmSilenced(securityConfig: { securityState: string, securityStatus: string }) {
    this.securityConfig = securityConfig;
  }

}
