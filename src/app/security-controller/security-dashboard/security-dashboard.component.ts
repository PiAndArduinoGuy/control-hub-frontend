import { Component, OnInit } from '@angular/core';
import { SecurityMicroserviceBackendRequestsService } from '../securuty-micro-service-backend-requests.service';
import { SecurityConfig } from '../security-config.model';
import { SecurityStatus } from '../security-status.enum';
import { SecurityState } from '../security-state.enum';

@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit { 
  securityStatus = null
  securityState = null

  constructor(private securityMicroserviceBackendRequestsService: SecurityMicroserviceBackendRequestsService) { }

  ngOnInit(): void {
    this.securityMicroserviceBackendRequestsService.getSecurityConfig().subscribe(
      (securityConfig)  => {
        console.log('Received security config.')
        this.securityState = securityConfig.securityState
        console.log('Security state: ' + this.securityState)
        this.securityStatus = securityConfig.securityStatus
        console.log('Security status: ' + this.securityStatus)
      }
    )
  }

}
