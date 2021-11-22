import {Component, Input, OnInit} from '@angular/core';
import {SecurityMicroserviceBackendRequestsService} from '../securuty-micro-service-backend-requests.service';

@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit {
  @Input() securityStatus = null;
  @Input() securityState = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAlarmSilenced(securityConfig: {securityState: string, securityStatus: string}) {
    console.log('The alarm was silenced, I know about it and I am the dashboard, it was ' + securityConfig);
  }

}
