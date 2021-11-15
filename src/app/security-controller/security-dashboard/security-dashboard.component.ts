import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit {
  securityBreached = false
  armed = false

  constructor() { }

  ngOnInit(): void {
  }

}
